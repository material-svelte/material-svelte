const postcss = require('postcss');
const { cosmiconfigSync } = require('cosmiconfig');

const defaultConfig = {};

function getConfig() {
  const explorer = cosmiconfigSync('material');
  try {
    const result = explorer.search();
    if (result) {
      return result.config;
    } else {
      return defaultConfig;
    }
  } catch (error) {
    console.error('Failed to load material-configuration:', error);
  }
}

module.exports = () => {
  const options = getConfig();
  const plugins = [
    require('./custom-properties')(options),
    require('./breakpoint')(options),
    require('postcss-import'),
    require('postcss-mixins')({
      mixins: require('@material-svelte/postcss-mixins')(options),
    }),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-hexrgba'),
    require('autoprefixer'),
  ];

  return postcss(plugins);
};
module.exports.postcss = true;
