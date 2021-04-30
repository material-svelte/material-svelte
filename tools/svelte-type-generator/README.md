# svelte-type-generator

[![Repository](https://img.shields.io/static/v1?style=for-the-badge&logo=github&label&message=svelte-type-generator)](https://github.com/material-svelte/material-svelte/tree/main/tools/svelte-type-generator)
[![Version](https://img.shields.io/npm/v/svelte-type-generator?style=for-the-badge&logo=npm&label=npm)](https://npmjs.org/package/svelte-type-generator)
[![Downloads/week](https://img.shields.io/npm/dw/svelte-type-generator?style=for-the-badge)](https://npmjs.org/package/svelte-type-generator)
[![License](https://img.shields.io/npm/l/svelte-type-generator?style=for-the-badge)](https://github.com/material-svelte/material-svelte/blob/main/tools/svelte-type-generator/package.json)

A tool to generate Typescript-Declarations for your svelte-components.

## Limitations

- this only supports `lang=ts` components

## Installation

**pnpm**

```sh
pnpm install --dev svelte-type-generator
```

**yarn**

```sh
yarn add --dev svelte-type-generator
```

**npm**

```sh
npm install --save-dev svelte-type-generator
```

## Usage

Just configure typescript in `tsconfig.json` as you normally would, eg:

```jsonc
{
  /* ... */
  "compilerOptions": {
    "declarations": true,
    "declarationDir": "types"
  },
  "include": ["src/***/*.svelte"]
  /* ... */
}
```

Then run `svelte-type-generator` eg. in a `package.json`-script

## Examples

`Button.svelte`:

```svelte
<script context="module" lang="ts">
  export type ButtonSize = 'small' | 'medium' | 'large';
</script>

<script lang="ts">
  /** button size */
  export let size: ButtonSize = 'small';
  /** whether the button is disabled */
  export let disabled = false;

  let clickCount: number = 0;

  function handleClick() {
    clickCount += 1;
  }
</script>

<button class="size-{size}" class:disabled on:click={handleClick} on:click>
  <slot />
  <slot name="named-slot" {clickCount} />
</button>
```

Resulting `Button.svelte.d.ts`:

```typescript
import { SvelteComponentTyped } from 'svelte';
export declare type ButtonSize = 'small' | 'medium' | 'large';
export default class Button extends SvelteComponentTyped<
  ButtonProps,
  ButtonEvents,
  ButtonSlots
> {}
declare const propDef: {
  props?: {
    /** button size */ size?: ButtonSize;
    /** whether the button is disabled */ disabled?: boolean;
  };
  events?: {
    click: MouseEvent;
  } & {
    [evt: string]: CustomEvent<any>;
  };
  slots?: {
    default: {};
    'named-slot': {
      clickCount: number;
    };
  };
};
export declare type ButtonProps = typeof propDef.props;
export declare type ButtonEvents = typeof propDef.events;
export declare type ButtonSlots = typeof propDef.slots;
export {};
```

## Related Work

- [svelte2tsx](https://github.com/sveltejs/language-tools/tree/master/packages/svelte2tsx)
- [svelte2dts](https://github.com/firefish5000/svelte2dts)
- [svelte-types-writer](https://github.com/micha-lmxt/svelte-types-writer)
- [sveld](https://github.com/IBM/sveld)
