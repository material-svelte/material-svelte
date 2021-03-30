import { render } from '@testing-library/svelte';
import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';
import html from 'svelte-htm';
import Typography from '../src/Typography.svelte';

chai.use(chaiDom);

describe('<Typography>', () => {
  it('renders variant: h1', () => {
    const { container } = render(html` <${Typography} variant="h1" /> `);
    const element = container.querySelector('h1');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('h1');
  });
  it('renders variant: h2', () => {
    const { container } = render(html` <${Typography} variant="h2" /> `);
    const element = container.querySelector('h2');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('h2');
  });
  it('renders variant: h3', () => {
    const { container } = render(html` <${Typography} variant="h3" /> `);
    const element = container.querySelector('h3');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('h3');
  });
  it('renders variant: h4', () => {
    const { container } = render(html` <${Typography} variant="h4" /> `);
    const element = container.querySelector('h4');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('h4');
  });
  it('renders variant: h5', () => {
    const { container } = render(html` <${Typography} variant="h5" /> `);
    const element = container.querySelector('h5');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('h5');
  });
  it('renders variant: h6', () => {
    const { container } = render(html` <${Typography} variant="h6" /> `);
    const element = container.querySelector('h6');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('h6');
  });
  it('renders variant: subtitle1', () => {
    const { container } = render(html` <${Typography} variant="subtitle1" /> `);
    const element = container.querySelector('h6');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('subtitle1');
  });
  it('renders variant: subtitle2', () => {
    const { container } = render(html` <${Typography} variant="subtitle2" /> `);
    const element = container.querySelector('h6');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('subtitle2');
  });
  it('renders variant: body1', () => {
    const { container } = render(html` <${Typography} variant="body1" /> `);
    const element = container.querySelector('p');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('body1');
  });
  it('renders variant: body2', () => {
    const { container } = render(html` <${Typography} variant="body2" /> `);
    const element = container.querySelector('p');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('body2');
  });
  it('renders variant: caption', () => {
    const { container } = render(html` <${Typography} variant="caption" /> `);
    const element = container.querySelector('span');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('caption');
  });
  it('renders variant: button', () => {
    const { container } = render(html` <${Typography} variant="button" /> `);
    const element = container.querySelector('span');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('button');
  });
  it('renders variant: overline', () => {
    const { container } = render(html` <${Typography} variant="overline" /> `);
    const element = container.querySelector('span');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('overline');
  });
  it('renders component override', () => {
    const { container } = render(
      html` <${Typography} variant="h1" component="button" /> `
    );
    const element = container.querySelector('span');
    expect(element).to.not.be.null;
    expect(document.body).to.contain(element);
    expect(element).to.have.class('h1');
  });
});
