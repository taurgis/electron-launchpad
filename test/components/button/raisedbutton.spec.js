import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import RaisedButton from '../../../src/renderer/components/button/raisedbutton'

function testFunction() {
    // DO NOTHING

    return "";
}

function setupStandard() {
    const renderer = ReactTestRenderer.create(<RaisedButton onClick={testFunction} className='testClass'>Test button text</RaisedButton>);
    const component = renderer.toJSON();
    console.log(component);
    return {
        component
    };
}

describe('Button - RaisedButton component', () => {
    it('should be of type div', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('a');
    });

    it('should have only the classes "btn" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('btn testClass');
    });

    it('should have an onClick function', () => {
        const { component } = setupStandard();
        expect(component.props.onClick).toBe(testFunction);
    });

    it('children should be the text "Test content"', () => {
        const { component } = setupStandard();
        expect(component.children[0]).toBe('Test button text');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
