var React = require('react');

var TodoSearch = React.createClass({
    onSearch: function () {
        let searchText = this.refs.searchText.value;
        let showCompleted = this.refs.showCompleted.checked;

        this.props.handleSearch(searchText, showCompleted);
    },
    render: function () {
        return (
            <div className="container-header">
                <div>
                    <input type="text" ref="searchText" placeholder="Search Todos" onChange={this.onSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.onSearch}/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;