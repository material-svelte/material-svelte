import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import TextField from '../src/TextField.svelte';

chai.use(chaiDom);

describe('<TextField>', () => {
  it('renders', () => {
    const { container } = render(html` <${TextField} /> `);
    const element = container.querySelector('component');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
