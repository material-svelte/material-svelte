import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Tooltip from '../src/Tooltip.svelte';

chai.use(chaiDom);

describe('<Tooltip>', () => {
  it('renders', () => {
    const { container } = render(html` <${Tooltip} /> `);
    const element = container.querySelector('div');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
