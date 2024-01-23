import Card from './Card';
import React from 'react';
import { shallow } from 'enzyme';

it('expects to render the Card component', () => {
    const { mockId, mockName, mockEmail } = {
        id: 1,
        name: "John Snow",
        email: "john@example.com"
    }
    const wrap = shallow(<Card name={mockName} email={mockEmail} id={mockId}/>);
    expect(wrap).toMatchSnapshot();
})
