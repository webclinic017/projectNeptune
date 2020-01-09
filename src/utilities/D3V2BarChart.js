import * as d3 from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";

// define margins for axises to display
const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 }

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
      .text("The worlds tallest men can't see me");

    // y axis append label
    vis.svg.append("text")
      .attr("x", -HEIGHT / 2)
      .attr("y", -40)
      .attr("text-anchor", "middle")
      .text("Height in cm")
      .attr("transform", `rotate(-90)`)
      .attr("fill", "maroon");


    vis.xAxisGroup = vis.svg.append("g")
      .attr("transform", `translate(0, ${HEIGHT})`)


    vis.yAxisGroup = vis.svg.append("g")

    // create a promise to return all data sets
    Promise.all([
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_men.json"),
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_women.json")
    ]).then((datasets)=> {
      
      const [men, women] = datasets;

      let flag = true;

      //set intervals for automatic updates
        d3.interval(() => {
          vis.data = flag ? men : women
          vis.update()
          flag =! flag
        }, 1000)

    
    })

    // create the data loading function
    // d3.json(url)
    //   .then(data => {

    //     // set the data to my vis object
    //     vis.data = data
    //     // set intervals for automatic updates
    //     d3.interval(() => {
    //       vis.update()
    //     }, 500)

    //   })
  }

  // create a function that updates each the graph changes
  update() {

    const vis = this;

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
    vis.xAxisGroup.call(xAxisCall);

    // call to calculate the y axis
    const yAxisCall = d3.axisLeft(y)
    vis.yAxisGroup.call(yAxisCall);

    // implement the data join
    const rects = vis.svg.selectAll("rect")
      .data(vis.data);

    // create the exit selector
    rects.exit().remove();

    // create the update selector
    rects
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", d => HEIGHT - y(d.height))

    // create the enter selector
    rects.enter().append("rect")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", d => HEIGHT - y(d.height))
      .attr("fill", "grey");


    console.log(rects)

  }

}

