import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CardPanel from '../../src/renderer/components/cardpanel.jsx'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<CardPanel className='testClass'>Test card content</CardPanel>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('CardPanel component', () => {
    it('should be of type div', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('div');
    });

    it('should have only the classes "card-panel" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('card-panel testClass');
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
