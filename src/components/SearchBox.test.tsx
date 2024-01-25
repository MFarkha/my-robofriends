import SearchBox from './SearchBox';
import { shallow } from 'enzyme';

it('expects to render the SearchBox component', () => {
    const mockSearchChange = jest.fn();
    const wrapper = shallow(<SearchBox searchChange={mockSearchChange}/>);
    expect(wrapper).toMatchSnapshot();
});