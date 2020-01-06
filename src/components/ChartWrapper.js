import React, { Component } from 'react'
import D3Chart from '../utilities/D3BarChart'

export default class ChartWrapper extends Component {

  componentDidMount(){
    // create an instance of d3 chart
    new D3Chart(this.refs.chart);

  }

  render() {
    return (
      <div ref ="chart">
        
      </div>
    )
  }
}
