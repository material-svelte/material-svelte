import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Grid from '../src/Grid.svelte';

chai.use(chaiDom);

describe('<Grid>', () => {
  it('renders', () => {
    const { container } = render(html` <${Grid} /> `);
    const element = container.querySelector('div');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
