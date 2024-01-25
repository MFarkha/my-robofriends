import { shallow } from 'enzyme';
import MainPage from './MainPage';

var wrapper: ReturnType <typeof shallow>;
var mainPageInstance: typeof MainPage.prototype;
var mockProps: typeof MainPage.prototype.props;

beforeEach(() => {
    mockProps = {
        robots: [],
        searchField: '',
        isPending: false,
        error: '',
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps }/>);
    mainPageInstance = wrapper.instance() as MainPage;
});

it('expects to render the MainPage component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters the robots correctly with an empty searchField', () => {
    expect(mainPageInstance.filterRobots()).toEqual([]);
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
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps }/>);
    mainPageInstance = wrapper.instance() as MainPage;
    expect(mainPageInstance.filterRobots()).toEqual([]);
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
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps }/>);
    mainPageInstance = wrapper.instance() as MainPage;
    expect((wrapper.instance() as MainPage).filterRobots()).toEqual([{
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
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps }/>);
    mainPageInstance = wrapper.instance() as MainPage;
    expect(mainPageInstance.filterRobots()).toEqual([]);
    expect(mainPageInstance.state.error).not.toEqual('');
});

it('displays a `loading..` message when a `robots data submission` is pending', () => {
    const mockProps = {
        robots: [],
        searchField: '',
        isPending: true,
        error: '',
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn()
    }
    wrapper = shallow(<MainPage {...mockProps }/>);
    expect(wrapper).toMatchSnapshot();
});

