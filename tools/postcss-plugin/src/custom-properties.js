const materialSvelteOptionsPlugin = (options) => {
  const packageRE = /.*@material-svelte\/(?<package>\w+)\/.*/;
  return {
    postcssPlugin: 'material-svelte-options',
    Declaration(node) {
      if (!node.prop.startsWith('--')) {
        return;
      }
      const match = node.source.input.file.match(packageRE);
      if (!match) {
        return;
      }
      try {
        const component = match.groups.package;
        const propName = node.prop.substring(2);
        const propValue = options.components[component][propName];
        if (propValue) {
          node.value = propValue;
        }
      } catch {
        /* */
      }
    },
  };
};
materialSvelteOptionsPlugin.postcss = true;

module.exports = materialSvelteOptionsPlugin;
