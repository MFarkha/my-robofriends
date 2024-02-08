"use client";
import React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import Scroll from "./_components/Scroll";
import SearchBox from "./_components/SearchBox";
import ErrorBoundary from "./_components/ErrorBoundary";
import CardList from "./_components/CardList";
import Header from "./_components/Header";

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export default function Home() {
  const initialRobots: Array<IRobot> = [];
  const [robots, setRobots] = useState(initialRobots);
  const [searchField, setSearchField] = useState("");
  const [error, setError] = useState("");

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users))
      .catch((err) => setError(err));
  }, []);

  if (robots.length === 0) {
    return <h1>Loading</h1>;
  } else {
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} error={error} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
