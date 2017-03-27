var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        let todoData = {
            id: 199,
            task: 'call her',
            completed: false
        };
        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        let $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);
        
        expect(spy).toHaveBeenCalledWith(199);
    })
})