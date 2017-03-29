var React = require('react');
var expect = require('expect');
var TodosApi = require('TodosApi');

describe('TodosApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    })
    it('should exist', () => {
        expect(TodosApi).toExist();
    });

    describe('setTodos', () => {
        it('should set todos in localstorage if valid', () => {
            let todo = [
                {
                    id: 1,
                    task: 'hunter',
                    completed: false
                }
            ];
            TodosApi.setTodo(todo);
            let expectedTodo = JSON.parse(localStorage.getItem('todos'));
            expect(expectedTodo).toEqual(todo);
        });

        it('should not set invalid todos array', () => {
            let todo = {
                a: 'a'
            };
            TodosApi.setTodo(todo);
            let expectedTodo = JSON.parse(localStorage.getItem('todos'));
            expect(expectedTodo).toBe(null);
        })
    });
    describe('getTodos', () => {
        it('should get empty todos fropm localstorage if no data', () => {
            let expectedTodo = JSON.parse(localStorage.getItem('todos'));
            expect(expectedTodo).toEqual(null);
        });

        it('should get todos array if valid data', () => {
            let todo = [
                {
                    id: 1,
                    task: 'hunter',
                    completed: false
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todo));
            let expectedTodo = TodosApi.getTodos();
            expect(expectedTodo).toEqual(todo);
        })
    });

    describe('filterTodos', () => {
        let todos = [
            {
                id: 1,
                task: 'some text here',
                completed: true
            }, {
                id: 2,
                task: 'other text here',
                completed: false
            }, {
                id: 3,
                task: 'some text here',
                completed: true
            }
        ];
        it('should return all todos if showCompleted is true', () => {
            let expectedTodos = TodosApi.filterTodos(todos, true, '');
            expect(expectedTodos.length).toBe(3);
        });
        it('should not return all todos if showCompleted is false', () => {
            let expectedTodos = TodosApi.filterTodos(todos, false, '');
            expect(expectedTodos.length).toBe(1);
        });
        it('should sort by completed status', () => {
            let expectedTodos = TodosApi.filterTodos(todos, true, '');
            expect(expectedTodos[0].completed).toBe(false);
        });
        it('should filter todos by search text', () => {
            let expectedTodos = TodosApi.filterTodos(todos, true, 'other');
            expect(expectedTodos.length).toBe(1);
        });
        it('should return all todos if search text is empty', () => {
            let expectedTodos = TodosApi.filterTodos(todos, true, '');
            expect(expectedTodos.length).toBe(3);
        });
        
    })
})