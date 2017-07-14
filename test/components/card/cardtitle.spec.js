import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CardTitle from '../../../src/renderer/components/card/cardtitle.jsx'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<CardTitle>Test title</CardTitle>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Card - Card title component', () => {
    it('should be of type span', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('span');
    });

    it('should have only the class "card-title"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('card-title');
    });

    it('children should be the text "Test title"', () => {
        const { component } = setupStandard();
        expect(component.children[0]).toBe('Test title');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
