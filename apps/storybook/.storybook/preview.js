const materialConfig = require('../material.config.cjs');
const { BreakpointSlicer } = require('@material-svelte/breakpoint-tools');
import 'happo-plugin-storybook/register';

const slicer = new BreakpointSlicer(materialConfig.breakpoints);
let viewports = {};
slicer.forEach((slice) => {
  const min = parseInt(slice.min, 10);
  const max = parseInt(slice.max, 10);
  const width = min > 0 ? min : max;
  const height = Math.ceil(width * 1.5);
  viewports[slice.name] = {
    name: slice.name,
    styles: {
      width: `${width}px`,
      height: `${height}px`,
    },
  };
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  viewport: { viewports },
};
