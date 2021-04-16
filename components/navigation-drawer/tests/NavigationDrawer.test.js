import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import NavigationDrawer from '../src/NavigationDrawer.svelte';

chai.use(chaiDom);

describe('<NavigationDrawer>', () => {
  it('renders', () => {
    const { container } = render(html` <${NavigationDrawer} /> `);
    const element = container.querySelector('nav');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
