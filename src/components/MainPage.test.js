import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

var wrap;

beforeEach(() => {
    const mockProps = {
        robots: [],
        searchField: '',
        isPending: false,
        error: '',
        onRequestRobots: jest.fn()
    }
    wrap = shallow(<MainPage {...mockProps }/>);
});

it('expects to render the MainPage component without crashing', () => {
    expect(wrap).toMatchSnapshot();
});

it('filters the robots correctly with an empty searchField', () => {
    expect(wrap.instance().filterRobots([], '')).toEqual([]);
});

it('filters the robots correctly with a searchField', () => {
    const mockProps = {
        robots: [{
            id: 1,
            name: 'John Snow',
            email: 'john@example.com'
        }],
        searchField: 'Marry',
        isPending: false,
        error: '',
        onRequestRobots: jest.fn()
    }
    wrap = shallow(<MainPage {...mockProps }/>);

    expect(wrap.instance().filterRobots()).toEqual([]);
});

it('filters the robots correctly with a searchField 2', () => {
    const mockProps = {
        robots: [{
            id: 1,
            name: 'John Snow',
            email: 'john@example.com'
        }],
        searchField: 'John',
        isPending: false,
        error: '',
        onRequestRobots: jest.fn()
    }
    wrap = shallow(<MainPage {...mockProps }/>);

    expect(wrap.instance().filterRobots()).toEqual([{
        id: 1,
        name: 'John Snow',
        email: 'john@example.com'
    }]);
});
it('sets a props.error in case of undefined value of robots', () => {
    const mockProps = {
        robots: undefined,
        searchField: '',
        isPending: false,
        error: '',
        onRequestRobots: jest.fn()
    }
    wrap = shallow(<MainPage {...mockProps }/>);

    expect(wrap.instance().filterRobots()).toEqual([]);
    expect(wrap.props.error).not.toEqual('');
});
it('displays a `loading..` message when `robots` data are pending', () => {
    const mockProps = {
        robots: [],
        searchField: '',
        isPending: true,
        error: '',
        onRequestRobots: jest.fn()
    }
    wrap = shallow(<MainPage {...mockProps }/>);

    expect(wrap).toMatchSnapshot();
});

