import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import Collection from '../../../src/renderer/components/collection/collection'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<Collection className='testClass'>Test collection content</Collection>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Collection component', () => {
    it('should be of type ul', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('ul');
    });

    it('should have only the classes "collection" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('collection testClass');
    });

    it('children should be the text "Test card content"', () => {
        const { component } = setupStandard();
        expect(component.children[0]).toBe('Test collection content');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
