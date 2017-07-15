import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CollectionItem from '../../../src/renderer/components/collection/collectionitem.jsx'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<CollectionItem className='testClass'>Test collection content</CollectionItem>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('CollectionItem component', () => {
    it('should be of type li', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('li');
    });

    it('should have only the classes "collection-item" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('collection-item testClass');
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
