export type Breakpoints = { [key: string]: string };

export type Slice = {
  name: string;
  min?: string;
  max?: string;
};

type SliceItermediate = {
  name: string;
  value: number;
};

export type ForEachCallbackFn = (slice: Slice) => void;

export default class BreakpointSlicer {
  private slices: Slice[] = [];

  constructor(breakpoints: Breakpoints = {}) {
    this.slices = this.generateSlices(breakpoints);
  }

  private generateSlices(breakpoints: Breakpoints): Slice[] {
    let slices: Slice[] = [];
    let sortable: SliceItermediate[] = [];
    const valuePattern = /(?<value>\d*)px/;
    for (const [key, value] of Object.entries(breakpoints)) {
      const valueMatch = valuePattern.exec(value);
      if (valueMatch && valueMatch.groups) {
        sortable.push({ name: key, value: Number(valueMatch.groups.value) });
      }
    }
    sortable.sort((a: SliceItermediate, b: SliceItermediate) => {
      return a.value - b.value;
    });
    for (const [index, breakpoint] of sortable.entries()) {
      let slice: Slice = {
        name: breakpoint.name,
        min: `${breakpoint.value}px`,
      };
      if (index < sortable.length - 1) {
        const next = sortable[index + 1];
        slice.max = `${next.value - 1}px`;
      }
      slices.push(slice);
    }
    return slices;
  }

  private createMediaQueryString(
    min: string | null = null,
    max: string | null = null,
    media: string | null = null
  ): string {
    let parts: string[] = [];
    if (media !== null) {
      parts.push(media);
    }
    if (min !== null) {
      parts.push(`(min-width: ${min})`);
    }
    if (max !== null) {
      parts.push(`(max-width: ${max})`);
    }
    return parts.join(' and ');
  }

  public at(breakpointName: string, media: string | null = null): string {
    const slice = this.slices.find((e) => e.name === breakpointName);
    if (!slice) {
      throw `Breakpoint '${breakpointName}' not defined!`;
    }
    return this.createMediaQueryString(slice.min, slice.max, media);
  }

  public from(breakpointName: string, media: string | null = null): string {
    const slice = this.slices.find((e) => e.name === breakpointName);
    if (!slice) {
      throw `Breakpoint '${breakpointName}' not defined!`;
    }
    return this.createMediaQueryString(slice.min, null, media);
  }

  public to(breakpointName: string, media: string | null = null): string {
    const slice = this.slices.find((e) => e.name === breakpointName);
    if (!slice) {
      throw `Breakpoint '${breakpointName}' not defined!`;
    }
    return this.createMediaQueryString(null, slice.max, media);
  }

  public between(
    fromBreakpointName: string,
    toBreakpointName: string,
    media: string | null = null
  ): string {
    const fromSlice = this.slices.find((e) => e.name === fromBreakpointName);
    if (!fromSlice) {
      throw `Breakpoint '${fromBreakpointName}' not defined!`;
    }
    const toSlice = this.slices.find((e) => e.name === toBreakpointName);
    if (!toSlice) {
      throw `Breakpoint '${toBreakpointName}' not defined!`;
    }
    return this.createMediaQueryString(fromSlice.min, toSlice.max, media);
  }

  public forEach(callback: ForEachCallbackFn) {
    for (let i = 0; i < this.slices.length; i += 1) {
      callback(this.slices[i]);
    }
  }
}
