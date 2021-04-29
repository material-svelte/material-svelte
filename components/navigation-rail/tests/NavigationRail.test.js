import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import NavigationRail from '../src/NavigationRail.svelte';

chai.use(chaiDom);

describe('<NavigationRail>', () => {
  it('renders', () => {
    const { container } = render(html` <${NavigationRail} /> `);
    const element = container.querySelector('div');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
