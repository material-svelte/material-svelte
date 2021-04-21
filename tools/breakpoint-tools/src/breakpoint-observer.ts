import BreakpointSlicer from './breakpoint-slicer';
import type { Breakpoints, Slice } from './breakpoint-slicer';

type OnChangeHandlerArgs = {
  slice: Slice;
  matches: boolean;
};

type OnChangeHandler = (event: OnChangeHandlerArgs) => void;

type OnMatchHandler = (matches: boolean) => void;

interface BreakpointObserverOptions {
  breakpoints: Breakpoints;
}

export default class BreakpointObserver {
  private breakpointSlicer: BreakpointSlicer;
  private mediaQueryLists: MediaQueryList[] = [];

  constructor(options: BreakpointObserverOptions) {
    this.breakpointSlicer = new BreakpointSlicer(options.breakpoints);
  }

  private registerMatchListener(
    mediaQueryString: string,
    callback: OnMatchHandler
  ) {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    callback(mediaQueryList.matches);
    this.mediaQueryLists.push(mediaQueryList);
    mediaQueryList.onchange = (event) => {
      callback(event.matches);
    };
  }

  public onChange(callback: OnChangeHandler) {
    this.breakpointSlicer.forEach((slice: Slice) => {
      const mediaQueryString = this.breakpointSlicer.at(slice.name);
      const mediaQueryList = window.matchMedia(mediaQueryString);
      callback({ slice, matches: mediaQueryList.matches });
      this.mediaQueryLists.push(mediaQueryList);
      mediaQueryList.onchange = (event) => {
        const matches = event.matches;
        callback({ slice, matches });
      };
    });
  }

  public at(breakpointName: string, callback: OnMatchHandler) {
    const mediaQueryString = this.breakpointSlicer.at(breakpointName);
    this.registerMatchListener(mediaQueryString, callback);
  }

  public from(breakpointName: string, callback: OnMatchHandler) {
    const mediaQueryString = this.breakpointSlicer.from(breakpointName);
    this.registerMatchListener(mediaQueryString, callback);
  }

  public to(breakpointName: string, callback: OnMatchHandler) {
    const mediaQueryString = this.breakpointSlicer.to(breakpointName);
    this.registerMatchListener(mediaQueryString, callback);
  }

  public between(
    fromBreakpointName: string,
    toBreakpointName: string,
    callback: OnMatchHandler
  ) {
    const mediaQueryString = this.breakpointSlicer.between(
      fromBreakpointName,
      toBreakpointName
    );
    this.registerMatchListener(mediaQueryString, callback);
  }

  public destroy() {}
}
