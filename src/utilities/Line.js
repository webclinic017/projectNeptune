
import data from './Stockfetcher';

import * as d3 from 'd3';


// set dimension of my graph
const MARGIN = { TOP: 10, BOTTOM: 70, LEFT: 70, RIGHT: 10 }
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.BOTTOM - MARGIN.TOP;


// parse the date / time
let parseTime = d3.timeParse("%d-%b-%y");

let x = d3.scaleTime().range([0, WIDTH]);
let y = d3.scaleLinear().range([HEIGHT, 0]);


let priceLine = d3.line()

export default class StockChart {

  constructor(element) {
    const vis = this;

    // select an element and bind an svg
    vis.svg = d3.select(element)
      .append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
      .append("g")
        .attr("transform",
        "translate(" + MARGIN.LEFT + "," + MARGIN.TOP + ")")

    console.log("svg present ", vis.svg.size())

    // determine the scales


    // set the axes 


    // bind the data 



  }



}