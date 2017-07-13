import { spy } from 'sinon';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import FaIcon from '../../src/renderer/comonents/faicon.jsx'

function setup() {
  const component = shallow(<FaIcon code='home' color='#fff'/>);
  return {
    component,
    actions,
    icon: component.find('span'),
  };
}

describe('FaIcon component', () => {
  it('should should not contain text', () => {
    const { icon } = setup();
    expect(icon.text()).toMatch('');
  });
});
