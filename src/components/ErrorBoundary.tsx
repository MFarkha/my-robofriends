import { ReactNode, Component, ErrorInfo } from "react";

interface IErrorProps {
    children?: ReactNode
};

interface IErrorState {
    hasError: boolean
};

class ErrorBoundary extends Component<IErrorProps, IErrorState> {
    state: IErrorState = {
        hasError: false
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ hasError: true });
        // console.log("Uncaught", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. Something weird happened.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;