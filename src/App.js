import React from 'react';
import './App.css';
// import {GoalList} from './components/GoalsList';
// import data from './utilities/Stockfetcher';
import ChartWrapper from './components/ChartWrapper';


const App = () => {
  return (
    <div>
      <div className="container">
        <h2> Welcome to project neptune </h2>
        {/* <GoalList  /> */}
        <ChartWrapper />
      </div>
    </div>
  )
}

export default App;
