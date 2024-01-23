import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';

it('expects to render the Header component', () => {
    const wrap = shallow(<Header/>);
    expect(wrap).toMatchSnapshot();
});

it('is function: `shouldComponentUpdate` must always return false', () => {
    const wrap = shallow(<Header/>);
    expect(wrap.instance().shouldComponentUpdate()).toBeFalsy();
});