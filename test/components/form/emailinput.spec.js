import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import EmailInput from '../../../src/renderer/components/form/emailinput'

function onChangeTest() {
    return "called";
}

function setupStandard() {
    const renderer = ReactTestRenderer.create(<EmailInput className='testClass' id='testid' name='testname' value='testvalue' placeholder='testplaceholder' onChange={onChangeTest} />);
    const component = renderer.toJSON();

    return {
        component
    };
}

describe('Collection component', () => {
    it('should be of type div', () => {
        const { component } = setupStandard();
        expect(component.type).toBe('div');
    });

    it('should have only the classes "input-field" and "testClass"', () => {
        const { component } = setupStandard();
        expect(component.props.className).toBe('input-field testClass');
    });

    it('first child should be the input field', () => {
        const { component } = setupStandard();
        expect(component.children[0].type).toBe('input');
    });

    it('first child should be of type email', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.type).toBe('email');
    });


    it('first child should have name="testname"', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.name).toBe('testname');
    });

    it('first child should have placeholder="testplaceholder"', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.placeholder).toBe('testplaceholder');
    });

    it('first child should have an onChange function', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.onChange()).toBe("called");
    });


    it('first child should have value="testvalue"', () => {
        const { component } = setupStandard();
        expect(component.children[0].props.value).toBe('testvalue');
    });

    it('Matches/Renders a snapshot', () => {
        const { component } = setupStandard();
        expect(component).toMatchSnapshot();
    });
});
