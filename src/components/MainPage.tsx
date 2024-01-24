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
interface IMainPageState {
    error: string
};

class MainPage extends Component<IMainPageProps, IMainPageState> {
    state: IMainPageState = {
        error: ''
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }
    filterRobots = () => {
        const { robots, searchField } = this.props;
        try {
            return (robots as Array<IRobot>).filter(robot => {
                return robot.name.toLowerCase().includes((searchField as string).toLowerCase());
            });
        } catch(err) {
            this.setState( {error: err as string} );
            return [];
        }
    }
    render() {
        const { onSearchChange, isPending } = this.props;
        if (isPending) {
            return <h1>Loading</h1>;
        } else {
            return (
            <div className='tc'>
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ this.filterRobots() }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        }
    }
}

export default MainPage;