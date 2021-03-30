import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import html from 'svelte-htm';
import TopAppBar from '../src/TopAppBar.svelte';

describe('<TopAppBar>', () => {
  it('renders', () => {
    const { container } = render(html` <${TopAppBar} /> `);
    const element = container.querySelector('component');
    expect(document.body.contains(element));
  });
});
