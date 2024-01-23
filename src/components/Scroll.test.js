import Scroll from './Scroll';
import React from 'react';
import { shallow } from 'enzyme';

it('expects to render the Scroll component', () => {
    const wrap = shallow(<Scroll/>);
    expect(wrap).toMatchSnapshot();
})
