var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    describe('handleAddTodo', () => {
        it('should dispatch ADD_TODO when valid todo text', () => {
            let todoText = 'check email'
            let action = {
                type: 'ADD_TODO',
                text: todoText
            }
            let spy = expect.createSpy();
            let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
            let $el = $(ReactDOM.findDOMNode(addTodo));

            addTodo.refs.todoText.value = todoText;
            TestUtils.Simulate.submit($el.find('form')[0]);
            expect(spy).toHaveBeenCalledWith(action);
        });
        it('should not dispatch ADD_TODO with invalid data', () => {
            let todoText = '';
            let action = {
                type: 'ADD_TODO',
                text: todoText
            }
            let spy = expect.createSpy();
            let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
            let $el = $(ReactDOM.findDOMNode(addTodo));
            addTodo.refs.todoText.value = todoText;
            TestUtils.Simulate.submit($el.find('form')[0]);
            
            expect(spy).toNotHaveBeenCalled();
        });
    });
})