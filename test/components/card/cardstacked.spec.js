import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CardStacked from '../../../src/renderer/components/card/cardstacked.jsx'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<CardStacked>Test content</CardStacked>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Card - Card stacked component', () => {
    it('should be of type div', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('div');
    });

    it('should have only the class "card-stacked"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('card-stacked');
    });

    it('children should be the text "Test content"', () => {
        const { component } = setupStandard();
        expect(component.children[0]).toBe('Test content');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
