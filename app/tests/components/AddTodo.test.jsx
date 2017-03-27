var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    describe('handleAddTodo', () => {
        it('should call add handleAddTodo prop with valid data', () => {
            let todoText = 'check email'
            let spy = expect.createSpy();
            let addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
            let $el = $(ReactDOM.findDOMNode(addTodo));

            addTodo.refs.todoText.value = todoText;
            TestUtils.Simulate.submit($el.find('form')[0]);
            expect(spy).toHaveBeenCalledWith(todoText);
        });
        it('should not call add handleAddTodo prop with invalid data', () => {
            let todoText = '';
            let spy = expect.createSpy();
            let addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
            let $el = $(ReactDOM.findDOMNode(addTodo));
            addTodo.refs.todoText.value = todoText;
            TestUtils.Simulate.submit($el.find('form')[0]);
            
            expect(spy).toNotHaveBeenCalled();
        });
    });
})