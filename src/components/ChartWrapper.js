import React, { Component } from 'react'
import D3Chart from '../utilities/D3BarChart'
import BarChartV2 from '../utilities/D3V2BarChart'

export default class ChartWrapper extends Component {

  componentDidMount(){
    // create an instance of d3 chart
    new D3Chart(this.refs.chart);
    new BarChartV2(this.refs.V2Bar);

  }

  render() {
    return (
      <div className="">
        {/* <div ref ="chart"></div>  */}
        <div ref ="V2Bar"> </div>
      </div>
      
    
      
      
    )
  }
}
