import React from 'react';
import './App.css';
import {GoalList} from './components/GoalsList';
import data from './containers/Stockfetcher';

const App = () => {
  return (
    <div>
      <div className="container">
        <h2> Welcome to project neptune </h2>
        <GoalList  />
      </div>
    </div>
  )
}

export default App;
