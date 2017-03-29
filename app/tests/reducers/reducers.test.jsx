let expect = require('expect');
let reducers = require('reducers');
let df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'text'
            };
            let res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText)
        })

    });

    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            let res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toBe(true);
        })
    })

    describe('todosReducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                text: 'start running'
            }
            let res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].task).toEqual(action.text);
        });

        it('should add exisiting todos', () => {
            let todos = [
                {
                    id: 123,
                    task: 'hii babby',
                    completed: false,
                    completedAt: undefined,
                    createdAt: 33000
                }
            ];
            let action = {
                type: 'ADD_TODOS',
                todos
            };
            let res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toBe(1);
            expect(res[0]).toEqual(todos[0]);
        })

        it('should toggle todo', () => {
            let todos = [
                {
                    id: 1,
                    task: 'running',
                    completed: true,
                    createdAt: 123,
                    completedAt: 124
                }
            ]
            let action = {
                type: 'TOGGLE_TODO',
                id: 1
            }
            let res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        })
    })
})