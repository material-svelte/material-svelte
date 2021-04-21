import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Breakpoint from '../src/Breakpoint.svelte';

chai.use(chaiDom);

describe('<Breakpoint>', () => {
  it('renders', () => {
    const { container } = render(html` <${Breakpoint} at="small"><div /><//>`);
    const element = container.querySelector('div');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
