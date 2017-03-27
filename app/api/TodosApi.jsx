var $ = require('jQuery');
module.exports = {
    setTodo: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodo: function () {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (error) {}

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        let filteredTodos = todos;
        // filter todos on showCompleted basis
        filteredTodos = filteredTodos.filter(todo => {
            return !todo.completed || showCompleted;
        });
        // filter todos on serachText basis
        filteredTodos = filteredTodos.filter(todo => {
            let todoTask = todo.task.toLowerCase();
            if (searchText.length) {
                return todoTask.indexOf(searchText) >= 0 ? true : false;
            } else return true; 
        })
        // sort todos in non complted order first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else 
                return 0;
            }
        )
        return filteredTodos;
    }
}