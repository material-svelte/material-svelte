import { render } from '@testing-library/svelte';
import { expect } from 'chai';
// eslint-disable-next-line no-unused-vars
import { mdiHome } from '@mdi/js';
import html from 'svelte-htm';
import Icon from '../src/Icon.svelte';

describe('<Icon>', () => {
  it('renders <i>', () => {
    const { container } = render(html` <${Icon} path="{mdiHome}" /> `);
    const element = container.querySelector('i');
    expect(document.body.contains(element));
  });
});
