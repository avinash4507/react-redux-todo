var React = require('react');
import Todo from 'Todo';
var TodosApi = require('TodosApi');
var {connect} = require('react-redux');

export var TodoList = React.createClass({
    render: function () {
        let {todos, showCompleted, searchText} = this.props;
        let renderTodos = () => {
            if(todos.length === 0) {
                return <p className="container-message">Nothing To Do</p>
            }
            return TodosApi.filterTodos(todos, showCompleted, searchText).map(todo => {
                return <Todo key={todo.id} {...todo}></Todo>
            })
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

export default connect(
    state => {
        return state;
    }
)(TodoList);