import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import COMPONENT_NAME from '../src/COMPONENT_NAME.svelte';

chai.use(chaiDom);

describe('<COMPONENT_NAME>', () => {
  it('renders', () => {
    const { container } = render(html` <${COMPONENT_NAME} /> `);
    const element = container.querySelector('component');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
  });
});
