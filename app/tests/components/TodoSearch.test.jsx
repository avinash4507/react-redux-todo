var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    describe('handleSearch', () => {
        it('should dispatch SET_SEARCH_TEXT action on valid search data', () => {
            let searchText = 'dog';
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText
            }
            let spy = expect.createSpy();
            let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
            let $el = $(ReactDOM.findDOMNode(todoSearch));
            todoSearch.refs.searchText.value = searchText;
            TestUtils.Simulate.change(todoSearch.refs.searchText);

            expect(spy).toHaveBeenCalledWith(action);
        })

        it('should dispatch TOGGLE_SHOW_COMPLETED action when checkbox checked', () => {
            let spy = expect.createSpy();
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            }
            let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
            let $el = $(ReactDOM.findDOMNode(todoSearch));
            todoSearch.refs.showCompleted.checked = true;
            TestUtils.Simulate.change(todoSearch.refs.showCompleted);

            expect(spy).toHaveBeenCalledWith(action);
        })
    })
})