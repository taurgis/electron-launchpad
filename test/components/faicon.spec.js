import { spy } from 'sinon';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import FaIcon from '../../src/renderer/components/faicon.jsx'

function setup() {
  const renderer = new ReactShallowRenderer();
  renderer.render(<FaIcon code='home' color='#fff' />);
  const component = renderer.getRenderOutput();

  return {
    component
  };
}

describe('FaIcon component', () => {
  it('should be of type i', () => {
    const { component } = setup();
    expect(component.type).toBe('i');
  });

  it('should contain no child elements (text)', () => {
    const { component } = setup();
    expect(component.props.children).toBe(undefined);
  });

   it('color should be #fff', () => {
    const { component } = setup();
    expect(component.props.style.color).toBe('#fff');
  });
});
