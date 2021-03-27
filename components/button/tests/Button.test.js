import { render, fireEvent } from '@testing-library/svelte';
import { expect } from 'chai';
import html from 'svelte-htm';
import Button from '../src/Button.svelte';

describe('<Button>', () => {
  it('renders <button>', () => {
    const { getByRole } = render(html` <${Button} /> `);
    const element = getByRole('button');
    expect(document.body.contains(element));
  });
  it('renders default-slot', () => {
    const { getByText } = render(html` <${Button}>click me<//> `);
    const element = getByText('click me');
    expect(document.body.contains(element));
  });
  it('handles click', async () => {
    let clicked = 0;
    const { getByRole } = render(html`
      <${Button} on:click=${() => (clicked += 1)} />
    `);
    const element = getByRole('button');
    await fireEvent.click(element);
    expect(clicked).to.equal(1);
  });
});
