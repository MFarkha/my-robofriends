import ErrorBoundary from './ErrorBoundary';
import { mount } from 'enzyme';

describe("ErrorBoundary", () => {
    it("should display an ErrorMessage if wrapped component throws", () => {
        const InnerComponent = () => <div>Successful render</div>;
        const wrapper = mount(
        <ErrorBoundary>
            <InnerComponent/>
        </ErrorBoundary>
        );
        const error = new Error("some error");
        wrapper.find(InnerComponent).simulateError(error);
        expect(wrapper.state('hasError')).toBeTruthy();
        expect(wrapper.find(ErrorBoundary)).toMatchSnapshot();
    });
});