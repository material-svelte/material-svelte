import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Switch from '../src/Switch.svelte';

chai.use(chaiDom);

describe('<Switch>', () => {
  it('renders', () => {
    const { container } = render(html` <${Switch} /> `);
    const element = container.querySelector('div');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
