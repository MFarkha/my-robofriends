import Card from './Card';
import { shallow } from 'enzyme';

it('expects to render the Card component', () => {
    const mockRobot = {
        id: 1,
        name: "John Snow",
        email: "john@example.com"
    }
    const wrap = shallow(<Card key={mockRobot.id} robot={mockRobot}/>);
    expect(wrap).toMatchSnapshot();
})
