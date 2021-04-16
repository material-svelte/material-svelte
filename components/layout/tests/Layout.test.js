import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Layout from '../src/Layout.svelte';

chai.use(chaiDom);

describe('<Layout>', () => {
  it('renders', () => {
    const { container } = render(html` <${Layout} /> `);
    const element = container.querySelector('.layout');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
