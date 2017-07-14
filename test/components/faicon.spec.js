import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ReactTestRenderer from 'react-test-renderer';
import FaIcon from '../../src/renderer/components/faicon.jsx'

function setupStandard() {
  const standardRenderer = new ReactShallowRenderer();

  standardRenderer.render(<FaIcon code='home' color='#fff' className='testClass' />);
  const component = standardRenderer.getRenderOutput();

  return {
    component
  };
}


function setupSpan() {
  const spanRenderer = ReactTestRenderer.create(<FaIcon code='home' color='#fff' size={2} container='span' />);
  const spanComponent = spanRenderer.toJSON();

  return {
    spanRenderer,
    spanComponent
  };
}

describe('FaIcon component', () => {
  it('should be of type i', () => {
    const { component } = setupStandard();
    expect(component.type).toBe('i');
  });

  it('should contain no child elements (text)', () => {
    const { component } = setupStandard();
    expect(component.props.children).toBe(undefined);
  });

  it('classes should be "fa fa-home testClass"', () => {
    const { component } = setupStandard();
    expect(component.props.className).toBe("fa fa-home testClass");
  });

  it('color should be #fff', () => {
    const { component } = setupStandard();
    expect(component.props.style.color).toBe('#fff');
  });

  it('should be of type span', () => {
    const { spanComponent } = setupSpan();
    expect(spanComponent.type).toBe('span');
  });

  it('span should contain no child elements (text)', () => {
    const { spanComponent } = setupSpan();
    expect(spanComponent.props.children).toBe(undefined);
  });

  it('span classes should be "fa fa-home fa-2x"', () => {
    const { spanComponent } = setupSpan();
    expect(spanComponent.props.className).toBe("fa fa-home fa-2x");
  });

  it('Matches/Renders a snapshot', () => {
    const { component } = setupStandard();
    expect(component).toMatchSnapshot();

    const { spanComponent } = setupSpan();
    expect(spanComponent).toMatchSnapshot();
  });
});
