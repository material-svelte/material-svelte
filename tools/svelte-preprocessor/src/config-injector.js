const { cosmiconfigSync } = require('cosmiconfig');

const getConfig = () => {
  const explorer = cosmiconfigSync('material');
  try {
    const result = explorer.search();
    if (!result) {
      console.error('Failed to locate material.config.cjs');
    } else if (result.config) {
      return result.config;
    }
  } catch (error) {
    console.error('Failed to load material-configuration:', error);
  }
};

const injectConfig = (content) => {
  const config = getConfig();
  const match = /import (?<name>\w+) from '\$material-svelte-config'.*/g.exec(
    content
  );
  if (match) {
    content = content.replace(
      match[0],
      `const ${match.groups.name} = ${JSON.stringify(config)};`
    );
  }
  return content;
};

module.exports = injectConfig;
