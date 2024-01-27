import { Component, ChangeEventHandler } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './MainPage.css'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import { AppState, IRobot } from '../app/store';


interface IMainPageProps extends AppState {
    onRequestRobots: () => void,
    onSearchChange: ChangeEventHandler<HTMLInputElement>,
};

class MainPage extends Component<IMainPageProps> {
    componentDidMount() {
        this.props.onRequestRobots();
    }
    filterRobots = () => {
        const { robots, searchField, error } = this.props;
        if (error.length!==0) {
            return []
        } else {
            return (robots as Array<IRobot>).filter(robot => (
                robot.name.toLowerCase().includes((searchField as string).toLowerCase())
            ))
        }
    }
    render() {
        const { onSearchChange, isPending, error } = this.props;
        if (isPending) {
            return <h1>Loading</h1>;
        } else {
            return (
            <div className='tc'>
                <Header/>
                <SearchBox searchChange={ onSearchChange }/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList error={ error } robots={ this.filterRobots() }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        }
    }
}

export default MainPage;