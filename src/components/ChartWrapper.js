import React, { Component } from 'react'
import D3Chart from '../utilities/D3BarChart'
import BarChartV2 from '../utilities/D3V2BarChart'
import LineChartV1 from '../utilities/Line';

export default class ChartWrapper extends Component {

  componentDidMount(){
    // create an instance of d3 chart
    // new D3Chart(this.refs.chart);
    new BarChartV2(this.refs.V2Bar);

    new LineChartV1(this.refs.line)

  }

  render() {
    return (
      <div className="">
        {/* <div ref ="chart"></div>  */}
        <div ref ="V2Bar"> </div>
        <div ref = "line"></div>
      </div>
      
    
      
      
    )
  }
}
