import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CollectionLink from '../../../src/renderer/components/collection/collectionlink'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<CollectionLink url='testlink' className='testClass'>Test collection content</CollectionLink>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('CollectionLink component', () => {
    it('should be of type a', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('a');
    });

    it('should link to "testlink"', () => {
        const { component } = setupStandard();
        expect(component.props.href).toBe('testlink');
    });


    it('should have only the classes "collection-item" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('collection-item testClass');
    });

    it('children should be the text "Test collection content"', () => {
        const { component } = setupStandard();
        expect(component.children[0]).toBe('Test collection content');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
