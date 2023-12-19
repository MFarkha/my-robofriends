import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    }, []);

    if (robots.length===0) {
        return <h1>Loading</h1>;
    } else {
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
        <div className='tc'>
            <h1 className='f1'>My Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
        );
    }
}

export default App;