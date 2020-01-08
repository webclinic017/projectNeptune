import React from 'react';
import './App.css';
import {GoalList} from './components/GoalsList';
// import data from './utilities/Stockfetcher';
import ChartWrapper from './components/ChartWrapper';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


const App = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand style={{color:"white"}}>Neptune</Navbar.Brand>
      </Navbar>
      <Container >
        <h2 className="banner"> Welcome, Meet Neptune </h2>
        <h5>A charting library with react and d3 by Michael Ballard</h5>
        {/* <GoalList  /> */}
        <div className="charty">
          <ChartWrapper  />
        </div>
       
      </Container>
      </div>
  )
}

export default App;
