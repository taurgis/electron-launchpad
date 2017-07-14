import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CardImage from '../../../src/renderer/components/card/cardimage.jsx'

function setupStandard() {
    const renderer = ReactTestRenderer.create(<CardImage image='testimage' title='title'>Test content</CardImage>);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Card - Card image component', () => {
    it('should be of type span', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('div');
    });

    it('should have only the class "card-image"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('card-image');
    });

    it('component should have 3 children', () => {
        const { component } = setupStandard();
        expect(component.children.length).toBe(3);
    });

    it('component should have an image with src', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.src).toBe('testimage');
    });

    it('component should have an title', () => {
        const { component } = setupStandard();
        expect(component.children[1].children[0]).toBe('title');
    });

    it('component should have extra content', () => {
        const { component } = setupStandard();
        expect(component.children[2]).toBe('Test content');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
