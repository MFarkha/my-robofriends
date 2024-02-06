import Header from './Header';
import { shallow } from 'enzyme';

it('expects to render the Header component', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
});
it('is function: `shouldComponentUpdate` must always return false', () => {
    const wrapper = shallow(<Header/>);
    const headerInstance = wrapper.instance() as Header;
    expect(headerInstance.shouldComponentUpdate()).toBeFalsy();
});