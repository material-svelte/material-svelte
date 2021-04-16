interface RippleOptions {
  color?: string;
  startDuration?: string;
  startTimingFunction?: string;
  stopDuration?: string;
  stopTimingFunction?: string;
  centered?: boolean;
  abortAnimation?: boolean;
}

const RippleDefaults: RippleOptions = {
  color: 'rgba(0, 0, 0, 0.1)',
  startDuration: '400ms',
  startTimingFunction: 'linear',
  stopDuration: '1000ms',
  stopTimingFunction: 'ease-in-out',
  centered: false,
  abortAnimation: true,
};

class Ripple {
  private element: HTMLElement;
  private options: RippleOptions;
  private animationElement: HTMLElement;

  constructor(element: HTMLElement, options: RippleOptions) {
    this.element = element;
    this.options = { ...RippleDefaults, ...options };
    this.injectContainerStyle();
    this.element.classList.add('ripple-container');
    this.element.addEventListener(
      'pointerdown',
      this.startAnimation.bind(this)
    );
  }

  public destroy() {
    this.element.classList.remove('ripple-container');
    this.element.removeEventListener('pointerdown', this.startAnimation);
  }

  private startAnimation(event: PointerEvent) {
    event.stopImmediatePropagation();
    if (this.animationElement && this.options.abortAnimation) {
      this.abortAnimation();
    }
    this.createAnimationElement(event);
    const stop = () => {
      this.element.removeEventListener('pointerup', stop);
      this.element.removeEventListener('pointerleave', stop);
      this.stopAnimation(this.animationElement);
    };
    this.element.addEventListener('pointerup', stop);
    this.element.addEventListener('pointerleave', stop);
  }

  private stopAnimation(animationElement: HTMLElement) {
    animationElement.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'opacity') {
        animationElement.remove();
      }
    });
    animationElement.style.opacity = '0';
  }

  private abortAnimation() {
    this.animationElement.remove();
  }

  private createAnimationElement(event: PointerEvent) {
    this.animationElement = document.createElement('div');
    this.animationElement.classList.add('ripple');
    this.element.appendChild(this.animationElement);
    const startTransition = `${this.options.startDuration} ${this.options.startTimingFunction} 0s`;
    const stopTransition = `${this.options.stopDuration} ${this.options.stopTimingFunction} 0s`;
    const style = this.animationElement.style;
    style.position = 'absolute';
    style.width = style.maxWidth = style.paddingBottom = '0%';
    style.height = '0';
    style.transform = 'translate(-50%, -50%)';
    style.borderRadius = '50%';
    style.backgroundColor = this.options.color;
    style.opacity = '1';
    style.pointerEvents = 'none';
    style.transition =
      `width ${startTransition},` +
      `max-width ${startTransition},` +
      `padding-bottom ${startTransition},` +
      `opacity ${stopTransition}`;

    const { clientX: x, clientY: y } = event;
    const {
      width,
      height,
      top,
      left,
      right,
      bottom,
    } = this.element.getBoundingClientRect();
    let targetWidth: number;
    if (this.options.centered) {
      style.top = '50%';
      style.left = '50%';
      targetWidth = 2 * Math.sqrt(50 ** 2 + 50 ** 2);
    } else {
      const topPercent = ((y - top) / height) * 100;
      const bottomPercent = ((bottom - y) / height) * 100;
      const leftPercent = ((x - left) / width) * 100;
      const rightPercent = ((right - x) / width) * 100;
      style.top = `${topPercent}%`;
      style.left = `${leftPercent}%`;
      targetWidth =
        2 *
        Math.sqrt(
          Math.max(leftPercent, rightPercent) ** 2 +
            Math.max(topPercent, bottomPercent) ** 2
        );
    }
    // force reflow
    this.animationElement.offsetWidth;
    style.width = style.maxWidth = style.paddingBottom = `${targetWidth}%`;
  }

  private injectContainerStyle() {
    if (document.head.querySelector('style.ripple-container') !== null) {
      return;
    }
    const style = document.createElement('style');
    style.classList.add('ripple-container');
    style.innerHTML = `
      .ripple-container {
        position: relative;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }
}

export default function ripple(node: HTMLElement, options: RippleOptions = {}) {
  const ripple = new Ripple(node, options);
  return {
    destroy() {
      ripple.destroy();
    },
  };
}
