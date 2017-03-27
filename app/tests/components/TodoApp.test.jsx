var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add a todo to todos on clicking add todo', () => {
        let newTask = 'hii baby';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: []
        })
        todoApp.handleAddTodo(newTask);

        expect(todoApp.state.todos[0].task).toBe(newTask);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value on handleToggle called', () => {
        let todoData = {
            id: 12,
            task: 'call her',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(12);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle completed to uncompleted', () => {
        let todoData = {
            id: 12,
            task: 'call her',
            completed: true,
            createdAt: 0,
            completedAt: undefined
        };
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(12);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
})