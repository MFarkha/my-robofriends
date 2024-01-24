import { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../app/actions';
import MainPage from '../components/MainPage';
import { RootState, AppDispatch, IAppState } from '../app/store';

type AppProps = typeof MainPage.prototype.props;

const mapStateToProps = (state: RootState) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchField(event.currentTarget.value)),
        onRequestRobots: () => dispatch(requestRobots(fetch))
    }
}
class App extends Component<AppProps, IAppState> {
    render() {
        return (
            <MainPage { ...this.props } />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);