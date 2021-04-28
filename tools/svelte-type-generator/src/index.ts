import path from 'path';
import fs from 'fs';
import ts from 'typescript';
import svelte2tsx from 'svelte2tsx';

function getConfig() {
  const fileName = ts.findConfigFile(process.cwd(), ts.sys.fileExists);
  if (!fileName) {
    throw new Error('Failed to locate typescript configuration');
  }
  const host: ts.ParseConfigFileHost = ts.sys as any;
  const config = ts.getParsedCommandLineOfConfigFile(
    fileName,
    ts.getDefaultCompilerOptions(),
    host
  );
  if (config === undefined) {
    throw new Error(`Failed to parse typescript configuration ${fileName}`);
  }
  return config;
}

function createCompilerHost(options: ts.CompilerOptions) {
  const host = ts.createCompilerHost(options);
  options.emitDeclarationOnly = true;

  const originalFileExists = host.fileExists;
  host.fileExists = (fileName) => {
    if (fileName.endsWith('.svelte.tsx')) {
      return true;
    }
    return originalFileExists(fileName);
  };

  const originalReadFile = host.readFile;
  host.readFile = (fileName) => {
    if (fileName.endsWith('.svelte.tsx')) {
      const { dir, name } = path.parse(fileName);
      const svelteFileName = path.join(dir, name);
      const svelteCode = fs.readFileSync(svelteFileName, 'utf-8');
      const tsx = svelte2tsx(svelteCode, {
        filename: svelteFileName,
        strictMode: true,
        isTsFile: true,
      });
      return postprocessTSX(tsx.code);
    }
    return originalReadFile(fileName);
  };

  const originalWriteFile = host.writeFile;
  host.writeFile = (fileName, data, writeByteOrderMark) => {
    originalWriteFile(fileName, data, writeByteOrderMark);
    console.log(path.relative(process.cwd(), fileName));
  };

  return host;
}

function postprocessTSX(code: string) {
  const COMPONENT_SUFFIX = '__SvelteComponent_';
  const regex = new RegExp(
    `export default class (?<componentName>.+)${COMPONENT_SUFFIX}` +
      ` extends createSvelte2TsxComponent\\((?<propDef>.+)\\)`
  );
  const match = code.match(regex);
  if (match && match.groups) {
    const { componentName, propDef } = match.groups;
    const oldComponentExport = match[0];
    const newComponentExport =
      `export default class ${componentName} extends SvelteComponentTyped` +
      `<${componentName}Props, ${componentName}Events, ${componentName}Slots>`;
    return (
      `import { SvelteComponentTyped } from 'svelte';` +
      code.replace(oldComponentExport, newComponentExport) +
      `const propDef = ${propDef}();` +
      `export type ${componentName}Props = typeof propDef.props;` +
      `export type ${componentName}Events = typeof propDef.events;` +
      `export type ${componentName}Slots = typeof propDef.slots;`
    );
  }
  return code;
}

export function compile() {
  const {
    name,
    version,
  } = require('@material-svelte/svelte-type-generator/package.json');
  console.log(`${name} v${version} generating types...`);

  const { options: compilerOptions, fileNames } = getConfig();
  const shims = require.resolve('svelte2tsx/svelte-shims.d.ts');
  fileNames.push(shims);
  const host = createCompilerHost(compilerOptions);
  const program = ts.createProgram(fileNames, compilerOptions, host);
  program.emit();
}
