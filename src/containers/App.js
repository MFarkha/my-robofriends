import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }
    onSearchChange = (event) => {
        this.setState( { searchField: event.target.value } );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }
    render() {
        const { robots, searchField } = this.state
        if (robots.length===0) {
            return <h1>Loading</h1>;
        } else {
            const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            });
            return (
            <div className='tc'>
                <h1 className='f1'>My Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        }
    }
}

export default App;