var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        let {todos} = this.props;
        let renderTodos = () => {
            if(todos.length === 0) {
                return <p className="container-message">Nothing To Do</p>
            }
            return todos.map(todo => {
                return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}></Todo>
            })
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

module.exports = TodoList;