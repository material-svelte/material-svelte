import { SvelteComponent, SvelteElement } from 'svelte';
import { createPopper } from '@popperjs/core';
import type { Instance as PopperInstance, Placement } from '@popperjs/core';
import TooltipComponent from './Tooltip.svelte';

interface TooltipOptions {
  arrow?: boolean;
  component?: SvelteComponent;
  enterDelay?: number;
  leaveDelay?: number;
  placement?: Placement;
  props?: { [key: string]: any };
  text?: string;
}

const TooltipDefaults: TooltipOptions = {
  arrow: false,
  component: TooltipComponent,
  enterDelay: 0,
  leaveDelay: 0,
  placement: 'bottom',
  props: {},
  text: '',
};

class Tooltip {
  private options: TooltipOptions;
  private referenceElement: HTMLElement;
  private componentElement: SvelteElement;
  private popperInstance: PopperInstance;
  private enterTimeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor(element: HTMLElement, options: TooltipOptions | string) {
    this.referenceElement = element;
    if (typeof options === 'string') {
      this.options = { ...TooltipDefaults };
      this.options.props.text = options;
    } else {
      this.options = {
        ...TooltipDefaults,
        props: { text: options.text, arrow: options.arrow },
        ...options,
      };
    }
    this.referenceElement.addEventListener(
      'mouseenter',
      this.attachTooltip.bind(this)
    );
  }

  public destroy() {
    this.referenceElement.removeEventListener('mouseenter', this.attachTooltip);
    this.referenceElement.removeEventListener('mouseleave', this.removeTooltip);
  }

  private attachTooltip() {
    this.enterTimeoutId = setTimeout(() => {
      this.enterTimeoutId = null;
      this.componentElement = new this.options.component({
        target: document.body,
        props: this.options.props,
      });
      this.popperInstance = createPopper(
        this.referenceElement,
        this.componentElement.popperElement,
        {
          strategy: 'fixed',
          placement: this.options.placement,
          modifiers: this.componentElement.popperModifiers || [],
        }
      );
      this.popperInstance.update();
    }, this.options.enterDelay);
    this.referenceElement.addEventListener(
      'mouseleave',
      this.removeTooltip.bind(this)
    );
  }

  private removeTooltip() {
    if (this.enterTimeoutId) {
      clearTimeout(this.enterTimeoutId);
    } else {
      setTimeout(() => {
        this.componentElement.$destroy();
      }, this.options.leaveDelay);
    }
  }
}

export default function tooltip(
  node: HTMLElement,
  options: TooltipOptions | string
) {
  const tooltip = new Tooltip(node, options);
  return {
    destroy() {
      tooltip.destroy();
    },
  };
}
