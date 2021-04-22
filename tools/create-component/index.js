#!/usr/bin/env node

// @ts-check
const fs = require('fs');
const path = require('path');
const { prompt } = require('enquirer');

const cwd = process.cwd();

const renameFiles = {
  '_package.json': 'package.json',
};

async function init() {
  /**
   * @type {{ componentName: string }}
   */
  const { componentName } = await prompt({
    type: 'input',
    name: 'componentName',
    message: 'Component name:',
    initial: 'Component',
  });
  /**
   * @type {{ packageName: string }}
   */
  const { packageName } = await prompt({
    type: 'input',
    name: 'packageName',
    message: 'Package name:',
    initial: componentName.toLowerCase(),
  });
  const targetDir = packageName;
  const packageDir = path.join(cwd, targetDir);
  const templateDir = path.join(__dirname, 'template');

  console.log(`\nScaffolding package in ${packageDir}...`);

  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir, { recursive: true });
  } else {
    const existing = fs.readdirSync(packageDir);
    if (existing.length) {
      /**
       * @type {{ yes: boolean }}
       */
      const { yes } = await prompt({
        type: 'confirm',
        name: 'yes',
        initial: 'Y',
        message:
          `Target directory ${targetDir} is not empty.\n` +
          `Remove existing files and continue?`,
      });
      if (yes) {
        emptyDir(packageDir);
      } else {
        return;
      }
    }
  }

  copyTemplate(templateDir, packageDir, packageName, componentName);

  console.log(`\nDone. Now run:\n`);
  if (packageDir !== cwd) {
    console.log(`  cd ${path.relative(cwd, packageDir)}`);
  }
  console.log(`  pnpm install`);
  console.log(`  pnpm dev`);
  console.log(
    `\nDon't forget to add dependency to 'packages/material-svelte/package.json':\n`
  );
  console.log(`  "@material-svelte/${packageName}": "workspace:*"`);
  console.log(
    `\nDon't forget to add export to 'packages/material-svelte/src/index.js':\n`
  );
  console.log(
    `  export { ${componentName} } from '@material-svelte/${packageName}';`
  );
  console.log(
    `\nDon't forget to add devDependency to 'apps/storybook/package.json':\n`
  );
  console.log(`  "@material-svelte/${packageName}": "workspace:*"`);
  console.log();
}

function copyTemplate(srcDir, destDir, packageName, componentName) {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const renameFile = renameFiles[file] ? renameFiles[file] : file;
    copy(
      path.join(srcDir, file),
      path.join(destDir, renameFile),
      packageName,
      componentName
    );
  }
}

function replacePlaceholders(content, packageName, componentName) {
  return content
    .replace(/PACKAGE_NAME/g, packageName)
    .replace(/COMPONENT_NAME/g, componentName);
}

function copy(source, destination, packageName, componentName) {
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    copyDir(source, destination, packageName, componentName);
  } else {
    copyFile(source, destination, packageName, componentName);
  }
}

function copyDir(srcDir, destDir, packageName, componentName) {
  const finalDestination = replacePlaceholders(
    destDir,
    packageName,
    componentName
  );
  fs.mkdirSync(finalDestination, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(finalDestination, file);
    copy(srcFile, destFile, packageName, componentName);
  }
}

function copyFile(src, dest, packageName, componentName) {
  const finalDestination = replacePlaceholders(
    dest,
    packageName,
    componentName
  );
  const content = fs.readFileSync(src, { encoding: 'utf8' });
  const finalContent = replacePlaceholders(content, packageName, componentName);
  fs.writeFileSync(finalDestination, finalContent);
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file);
    // baseline is Node 12 so can't use rmSync :(
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      fs.rmdirSync(abs);
    } else {
      fs.unlinkSync(abs);
    }
  }
}

init().catch((e) => {
  console.error(e);
});
