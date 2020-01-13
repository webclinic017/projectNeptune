import React, { Component } from 'react'
// import D3Chart from '../utilities/D3BarChart'
import BarChartV2 from '../utilities/D3V2BarChart'
// import LineChartV1 from '../utilities/Line';

export default class ChartWrapper extends Component {

  /**
   * A bridge between my react code and my d3 code
   */

  componentDidMount(){
    // create an instance of d3 chart
    // new D3Chart(this.refs.chart);
    
    this.setState({
      chart : new BarChartV2(this.refs.V2Bar)
    })

  }

  shouldComponentUpdate(){
    // this allows me to specify when to rerender a react component
    return false
  }

  componentWillReceiveProps(nextProps){
    // trigger as new props available
    this.state.chart.update(nextProps.gender)
  }

  render() {
    return (
      <div className="">
        {/* <div ref ="chart"></div>  */}
        <div ref ="V2Bar"> </div>
        {/* <div ref = "line"></div> */}
      </div>
      
    
      
      
    )
  }
}
