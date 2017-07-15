import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import FixedButton from '../../../src/renderer/components/button/fixedbutton'

function testFunction() {
    // DO NOTHING

    return "";
}

function setupStandard() {
    const renderer = ReactTestRenderer.create(<FixedButton onClick={testFunction} className='testClass'>Test button text</FixedButton>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Button - FixedButton component', () => {
    it('should be of type div', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('div');
    });

    it('should have only the classes "btn-fixed', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('fixed-action-btn');
    });

    it('first child should have only the classes "btn-floating" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.className).toBe('btn-floating testClass');
    });

    it('first child should have an onClick function', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.onClick).toBe(testFunction);
    });

    it('children should be the text "Test content"', () => {
        const { component } = setupStandard();
        expect(component.children[0].children[0]).toBe('Test button text');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
