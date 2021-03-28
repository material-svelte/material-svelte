import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import html from 'svelte-htm';
import COMPONENT_NAME from '../src/COMPONENT_NAME.svelte';

describe('<COMPONENT_NAME>', () => {
  it('renders', () => {
    const { container } = render(html` <${COMPONENT_NAME} /> `);
    const element = container.querySelector('component');
    expect(document.body.contains(element));
  });
});
