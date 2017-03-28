var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');

import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
import {configure} from 'store';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        let todos = [
            {
                id: 1,
                task: 'hii',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }, {
                id: 2,
                task: 'bii',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];
        let store = configure({todos});
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList></ConnectedTodoList>
            </Provider>
        )
        let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todoComponents.length).toBe(todos.length);
    })
    it('should render empty message if no todos', () => {
        let todos = [];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container-message').length).toBe(1);
    })
})