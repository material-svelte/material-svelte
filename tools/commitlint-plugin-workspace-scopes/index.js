const ensure = require('@commitlint/ensure');
const { default: message } = require('@commitlint/message');
const { getPackagesSync } = require('@manypkg/get-packages');

module.exports = {
  rules: {
    'scope-enum': (parsed, when = 'always', value = []) => {
      if (!parsed.scope) {
        return [true, ''];
      }
      const packages = getPackages(parsed);
      const scopes = value.concat(packages);
      const negated = when === 'never';
      const result = ensure.enum(parsed.scope, scopes);
      return [
        negated ? !result : result,
        message([
          'scope must',
          negated ? 'not' : null,
          `be one of [${scopes.join(', ')}]`,
        ]),
      ];
    },
  },
};

function getPackages(context) {
  const cwd = context.cwd || process.cwd();
  const packages = getPackagesSync(cwd);
  return packages.packages.map((p) => p.packageJson.name);
}
