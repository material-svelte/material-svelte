import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Paper from '../src/Paper.svelte';

chai.use(chaiDom);

describe('<Paper>', () => {
  it('renders', () => {
    const { container } = render(html` <${Paper} /> `);
    const element = container.querySelector('div');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
