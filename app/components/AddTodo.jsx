var React = require('react');

var AddTodo = React.createClass({
    handleAddTodo: function (e) {
        e.preventDefault();
        let todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.handleAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div className="container-footer">
                <form onSubmit={this.handleAddTodo}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button primary expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;