const injectConfig = require('./config-injector');

function materialSveltePreprocess() {
  return {
    script: ({ content }) => {
      content = injectConfig(content);
      return { code: content };
    },
  };
}
module.exports = materialSveltePreprocess;
