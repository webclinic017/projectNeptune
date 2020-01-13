import * as d3 from 'd3';

// define margins for axises to display
const MARGIN = { TOP: 10, BOTTOM: 70, LEFT: 70, RIGHT: 10 }

// define width and height of the plot
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.BOTTOM - MARGIN.TOP;

export default class BarChartV2 {
  constructor(element) {
    // set this to this visualization
    const vis = this;

    // construct svg, set l and w
    vis.svg = d3.select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT},${MARGIN.TOP})`)

    // x axis append label
    vis.svg.append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 50)
      .attr("text-anchor", "middle")
      .text("The tallest people in the world")
      .attr("fill","maroon");

    // y axis append label
    vis.svg.append("text")
      .attr("x", -HEIGHT / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("Height in cm")
      .attr("transform", `rotate(-90)`)
      .attr("fill", "grey");


    vis.xAxisGroup = vis.svg.append("g")
      .attr("transform", `translate(0, ${HEIGHT})`)


    vis.yAxisGroup = vis.svg.append("g")

    // create a promise to return all data sets
    Promise.all([
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_men.json"),
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_women.json")
    ]).then((datasets)=> {

      // establish data attributes
      vis.menData = datasets[0];
      vis.womenData = datasets[1];
      vis.update("men");
    })

  }
  // create a function that updates each the graph changes
  update(gender) {

    const vis = this;

    // determine the data for update based on props
    vis.data = (gender === "men") ? vis.menData : vis.womenData;

    // set the initial display
    // vis.update("men");

    // create the y scale
    const y = d3.scaleLinear()
      .domain([
        d3.min(vis.data, d => d.height) * .95,
        d3.max(vis.data, d => d.height)
      ])
      .range([HEIGHT, 0])

    // create the x scale
    const x = d3.scaleBand()
      .domain(vis.data.map(d => d.name))
      .range([0, 800])
      .padding(0.4);

    // call to calculate the x axis 
    const xAxisCall = d3.axisBottom(x)
    vis.xAxisGroup.transition().duration(500).call(xAxisCall);

    // call to calculate the y axis
    const yAxisCall = d3.axisLeft(y)
    vis.yAxisGroup.transition().duration(500).call(yAxisCall);

    // implement the data join
    const rects = vis.svg.selectAll("rect")
      .data(vis.data)

    // create the exit selector
    rects.exit()
      .transition().duration(500)
      .attr("height", 0)
      .attr("y", HEIGHT)
      .remove()

    // create the update selector
    rects.transition().duration(500)
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", d => HEIGHT - y(d.height))

    // create the enter selector
    rects.enter().append("rect")
      .attr("x", d => x(d.name))
      .attr("width", x.bandwidth)
      .attr("fill", "grey")
      .attr("y",HEIGHT)
      .transition().duration(500)
        .attr("height", d => HEIGHT - y(d.height))
        .attr("y", d => y(d.height))
  }

}

