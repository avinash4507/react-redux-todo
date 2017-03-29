var React = require('react');
var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate search todo action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'search text'
        };
        let res = actions.searchTodo(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        let action = {
            type: 'ADD_TODO',
            text: 'hii hunter'
        };
        let res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });

    it('should generate ADD_TODOS action', () => {
        let todos = [{
            id: 123,
            task: 'hii babby',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }];
        let action = {
            type: 'ADD_TODOS',
            todos
        };
        let res = actions.addTodos(todos);
        expect(res).toEqual(action);
    })

    it('should generate toggle show completed action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        let res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: '1234'
        }
        let res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    });
})