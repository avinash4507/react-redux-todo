var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('store').configure();

store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(actions.searchTodo('name'))
store.dispatch(actions.toggleShowCompleted())
store.dispatch(actions.addTodo('running'))

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app'));
