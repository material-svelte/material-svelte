import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Radio from '../src/Radio.svelte';

chai.use(chaiDom);

describe('<Radio>', () => {
  it('renders', () => {
    const { container } = render(html` <${Radio} /> `);
    const element = container.querySelector('div');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
