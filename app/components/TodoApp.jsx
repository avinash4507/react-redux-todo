var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodosApi = require('TodosApi')

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            searchText: '',
            showCompleted: false,
            todos: TodosApi.getTodo()
        }
    },
    componentDidUpdate: function () {
        TodosApi.setTodo(this.state.todos)
    },
    handleAddTodo: function (task) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    task: task,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleSearch: function (searchText, showCompleted) {
        this.setState({
            searchText: searchText.toLowerCase(),
            showCompleted: showCompleted
        });
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodosApi.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="columns small-centered small-11 medium-6 large-4">
                        <div className="container">
                            <TodoSearch handleSearch={this.handleSearch}></TodoSearch>
                            <TodoList/>
                            <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;