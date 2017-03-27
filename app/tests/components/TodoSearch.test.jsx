var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    describe('handleSearch', () => {
        it('should call handleSearch with search data', () => {
            let searchText = 'dog';
            let spy = expect.createSpy();
            let todoSearch = TestUtils.renderIntoDocument(<TodoSearch handleSearch={spy}/>);
            let $el = $(ReactDOM.findDOMNode(todoSearch));
            todoSearch.refs.searchText.value = searchText;
            TestUtils.Simulate.change(todoSearch.refs.searchText);

            expect(spy).toHaveBeenCalledWith('dog', false);
        })

        it('should call handleSearch with proper checked value', () => {
            let spy = expect.createSpy();
            let todoSearch = TestUtils.renderIntoDocument(<TodoSearch handleSearch={spy}/>);
            let $el = $(ReactDOM.findDOMNode(todoSearch));
            todoSearch.refs.showCompleted.checked = true;
            TestUtils.Simulate.change(todoSearch.refs.showCompleted);

            expect(spy).toHaveBeenCalledWith('', true);
        })
    })
})