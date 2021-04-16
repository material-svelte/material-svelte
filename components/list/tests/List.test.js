import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import List from '../src/List.svelte';

chai.use(chaiDom);

describe('<List>', () => {
  it('renders', () => {
    const { container } = render(html` <${List} /> `);
    const element = container.querySelector('ul');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
