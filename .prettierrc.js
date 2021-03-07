module.exports = {
  // workaround for: prettier doesn't find plugins installed with pnpm
  // same applies for --plugin-search-dir in package.json
  // active PR: https://github.com/prettier/prettier/pull/9167
  pluginSearchDirs: ['.'],
  plugins: [require('prettier-plugin-package')],
  // prettier
  singleQuote: true,
};
