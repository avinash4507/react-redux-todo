var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var TodosApi = require('TodosApi');
var actions = require('actions');
var store = require('store').configure();

store.subscribe(() => {
  let state = store.getState();
  console.log(state);
  TodosApi.setTodo(state.todos)
});

let initialTodos = TodosApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app'));
