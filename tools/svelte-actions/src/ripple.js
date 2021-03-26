import ripplet, { defaultOptions } from 'ripplet.js';

defaultOptions.opacity = 0.32;

export function ripple(node, options = {}) {
  options.clearing = false;

  function startRipple(event) {
    ripplet(event, options);
  }

  function stopRipple(event) {
    ripplet.clear(event.currentTarget);
  }

  node.addEventListener('pointerdown', startRipple);
  node.addEventListener('pointerup', stopRipple);
  node.addEventListener('pointerleave', stopRipple);

  return {
    destroy() {
      node.removeEventListener('pointerdown', startRipple);
      node.removeEventListener('pointerup', stopRipple);
      node.removeEventListener('pointerleave', stopRipple);
    },
  };
}
