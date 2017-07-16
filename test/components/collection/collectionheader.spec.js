import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CollectionHeader from '../../../src/renderer/components/collection/collectionheader'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<CollectionHeader className='testClass'>Test collection content</CollectionHeader>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('CollectionHeader component', () => {
    it('should be of type li', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('li');
    });

    it('should have only the classes "collection-header" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('collection-header testClass');
    });

    it('first child should be h4', () => {
        const { component } = setupStandard();
        expect(component.children[0].type).toBe('h4');
    });

    it('children should be the text "Test collection content"', () => {
        const { component } = setupStandard();
        expect(component.children[0].children[0]).toBe('Test collection content');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});