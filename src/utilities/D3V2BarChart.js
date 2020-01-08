import * as d3 from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";

// define margins for axises to display
const MARGIN = {TOP: 10, BOTTOM: 50, LEFT:70, RIGHT:10}

// define width and height of the plot
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.BOTTOM - MARGIN.TOP;

export default class BarChartV2 {

  constructor(element) {
    // construct svg, set l and w
    const svg = d3.select(element)
      .append("svg")
        .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
        .attr("transform",`translate(${MARGIN.LEFT},${MARGIN.TOP})`)

    d3.json(url)
      .then(data => {
        // set the max of my data
        const max = d3.max(data, d => d.height)

        // create the y scale
        const y = d3.scaleLinear()
          .domain([
            d3.min(data, d => d.height) * .95,
             max
            ])
          .range([HEIGHT, 0])

        const x = d3.scaleBand()
          .domain(data.map(d => d.name))
          .range([0, 800])
          .padding(0.4)

        // call to create the x axis
        const xAxisCall = d3.axisBottom(x)
        svg.append("g")
          .attr("transform", `translate(0, ${HEIGHT})`)
          .call(xAxisCall)

        // call to create the y axis
        const yAxisCall = d3.axisLeft(y)
        svg.append("g")
          .call(yAxisCall)

        // x axis append label
        svg.append("text")
            .attr("x", WIDTH / 2)
            .attr("y", HEIGHT + 50)
            .attr("text-anchor","middle")
            .text("The worlds tallest men can't see me")

        // y axis append label
        svg.append("text")
            .attr("x", -HEIGHT / 2)
            .attr("y", -40)
            .attr("text-anchor","middle")
            .text("Height in cm")
            .attr("transform", `rotate(-90)`)
            .attr("fill", "maroon")

        const rects = svg.selectAll("rect")
          .data(data)

        rects.enter().append("rect")
          .attr("x", d => x(d.name))
          .attr("y", d => y(d.height))
          .attr("width", x.bandwidth)
          .attr("height", d => HEIGHT - y(d.height))
          .attr("fill", "grey")
      })
  }
}

