import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CardContent from '../../../src/renderer/components/card/cardcontent.jsx'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<CardContent>Test content</CardContent>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Card - Card content component', () => {
    it('should be of type div', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('div');
    });

    it('should have only the class "card-content"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('card-content');
    });

    it('first child should be a row', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.className).toBe('row');
    });

    it('children should be the text "Test content"', () => {
        const { component } = setupStandard();
        expect(component.children[0].children[0]).toBe('Test content');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
