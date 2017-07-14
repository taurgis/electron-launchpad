import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import Card from '../../../src/renderer/components/card/card.jsx'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<Card top-border-color='red' className='testClass'>Test card content</Card>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Card component', () => {
    it('should be of type div', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('div');
    });

    it('should have only the classes "card" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('card testClass');
    });

    it('children should be the text "Test card content"', () => {
        const { component } = setupStandard();
        expect(component.children[0]).toBe('Test card content');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
