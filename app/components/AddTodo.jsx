var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    handleAddTodo: function (e) {
        let {dispatch} = this.props;
        e.preventDefault();
        let todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
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

export default connect()(AddTodo);