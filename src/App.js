import React, {Component} from 'react';
import './App.css';
import { GoalList } from './components/GoalsList';
// import data from './utilities/Stockfetcher';
import ChartWrapper from './components/ChartWrapper';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from './components/DropdownSelector';

class App extends Component {

  state = {
    gender: "men"
  }

  genderSelected = ( gender) => this.setState({ gender })
  
  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Navbar.Brand style={{ color: "white" }}>Neptune</Navbar.Brand>
        </Navbar>
        <Container >
          <h2 className="banner"> Welcome, Meet Neptune </h2>
          <h5>A charting library with react and d3 by Michael Ballard</h5>
          {/* <GoalList  /> */}
          <Row>
            <Col xs={12}>
              <Dropdown genderSelected={this.genderSelected}/>
            </Col>
          </Row>
          <Row xs={12}>
            <div className="charty">
              <ChartWrapper gender={this.state.gender} />
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
