import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CardAction from '../../../src/renderer/components/card/cardaction.jsx'

function setupStandard() {
    const renderer = ReactTestRenderer.create(
        <CardAction actions={[{ title: 'link 1', url: 'link url 1' }, { title: 'link 2', url: 'link url 2' }]} />
    );
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Card - Card action component', () => {
    it('should be of type div', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('div');
    });

    it('should have only the class "card-action"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('card-action');
    });

    it('There should be 2 children', () => {
        const { component } = setupStandard();
        expect(component.children.length).toBe(2);
    });

    it('Both children should be of type <a>', () => {
        const { component } = setupStandard();
        expect(component.children[0].type).toBe('a');
        expect(component.children[1].type).toBe('a');
    });

    it('Both children should have text', () => {
        const { component } = setupStandard();
        expect(component.children[0].children[0]).toBe('link 1');
        expect(component.children[1].children[0]).toBe('link 2');
    });

    it('Both children should have a link', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.href).toBe('link url 1')
        expect(component.children[1].props.href).toBe('link url 2')
    });


    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
