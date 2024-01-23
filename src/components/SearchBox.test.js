import SearchBox from './SearchBox';
import React from 'react';
import { shallow } from 'enzyme';

it('expects to render the SearchBox component', () => {
    const mockSearchChange = jest.fn();
    const wrap = shallow(<SearchBox searchChange={mockSearchChange}/>);
    expect(wrap).toMatchSnapshot();
});