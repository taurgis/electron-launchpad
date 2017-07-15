import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import FloatingButton from '../../../src/renderer/components/button/floatingbutton'

function testFunction() {
    // DO NOTHING

    return "";
}

function setupStandard() {
    const renderer = ReactTestRenderer.create(<FloatingButton onClick={testFunction} className='testClass'>Test button text</FloatingButton>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Button - FloatingButton component', () => {
    it('should be of type button', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('button');
    });

    it('should have only the classes "btn-floating" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('btn-floating testClass');
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
