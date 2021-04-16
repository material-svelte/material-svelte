import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Checkbox from '../src/Checkbox.svelte';

chai.use(chaiDom);

describe('<Checkbox>', () => {
  it('renders', () => {
    const { container } = render(html` <${Checkbox} /> `);
    const element = container.querySelector('.checkbox');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
