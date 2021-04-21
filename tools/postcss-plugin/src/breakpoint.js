const { BreakpointSlicer } = require('@material-svelte/breakpoint-tools');

const breakpointPlugin = (options) => {
  const breakpoints = options.breakpoints || {};
  const slicer = new BreakpointSlicer(breakpoints);
  const replaceKey = (content, key, value) => {
    return content.replace(`$(${key})`, value);
  };

  return {
    postcssPlugin: 'material-svelte-breakpoint',
    AtRule: {
      breakpoint: (node, helpers) => {
        const pattern = /(?<func>\w+)\((?<args>.*)\)$/;
        const match = pattern.exec(node.params);
        if (!match) {
          throw node.error(`SyntaxError: @${node.name} ${node.params}`);
        }
        const func = match.groups.func;
        const args = match.groups.args.split(',').map((e) => e.trim());
        if (func === 'at') {
          if (args.length < 1) {
            throw node.error(`ArgumentError: @${node.name} ${node.params}`);
          }
          const breakpointName = args[0];
          const media = args[1] || null;
          node.name = 'media';
          node.params = slicer.at(breakpointName, media);
        } else if (func === 'from') {
          if (args.length < 1) {
            throw node.error(`ArgumentError: @${node.name} ${node.params}`);
          }
          const breakpointName = args[0];
          const media = args[1] || null;
          node.name = 'media';
          node.params = slicer.from(breakpointName, media);
        } else if (func === 'to') {
          if (args.length < 1) {
            throw node.error(`ArgumentError: @${node.name} ${node.params}`);
          }
          const breakpointName = args[0];
          const media = args[1] || null;
          node.name = 'media';
          node.params = slicer.to(breakpointName, media);
        } else if (func === 'between') {
          if (args.length < 2) {
            throw node.error(`ArgumentError: @${node.name} ${node.params}`);
          }
          const fromBreakpointName = args[0];
          const toBreakpointName = args[1];
          const media = args[2] || null;
          node.name = 'media';
          node.params = slicer.between(
            fromBreakpointName,
            toBreakpointName,
            media
          );
        } else if (func === 'each') {
          if (args.length < 1) {
            throw node.error(`ArgumentError: @${node.name} ${node.params}`);
          }
          const breakpointKey = args[0];
          const media = args[1] || null;
          slicer.forEach((slice) => {
            const proxy = node.cloneBefore({
              name: 'media',
              params: slicer.at(slice.name, media),
            });
            proxy.nodes.forEach((n) => {
              n.selector = replaceKey(n.selector, breakpointKey, slice.name);
              n.nodes.forEach((d) => {
                d.prop = replaceKey(d.prop, breakpointKey, slice.name);
                d.value = replaceKey(d.value, breakpointKey, slice.name);
              });
            });
          });
          node.remove();
        }
      },
    },
  };
};
breakpointPlugin.postcss = true;
module.exports = breakpointPlugin;
