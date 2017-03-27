var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        let todos = [
            {   
                id: 1,
                task: 'hii'
            },
            {
                id: 2,
                task: 'bii'
            }
        ];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(todos.length);
    })
    it('should render empty message if no todos', () => {
        let todos = [];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container-message').length).toBe(1);
    })
})