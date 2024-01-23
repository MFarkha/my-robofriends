import { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './MainPage.css'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }
    filterRobots = () => {
        const { robots, searchField } = this.props;
        try {
            return robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            });
        } catch(err) {
            this.setState({error: err});
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