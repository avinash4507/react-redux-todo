var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        let {id, task, completed, createdAt, completedAt} = this.props;
        let todoClassName = completed ? 'todo todo-completed' : 'todo';
        let renderDate = function () {
            let message = 'Created';
            let timeStamp = createdAt;
            if (completed) {
                message = 'Completed';
                timeStamp = completedAt;
            }
            return `${message} ${moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a')}`;
        };
        return (
            <div className={todoClassName} onClick={() => this.props.onToggle(id)}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{task}</p>
                    <p className="todo-subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;