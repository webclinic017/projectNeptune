import * as d3 from 'd3';

let url = "https://udemy-react-d3.firebaseio.com/ages.json"

export default class D3BarChart {
  constructor(element) {
    // write d3 code inside of constructor
    // this builds the chart each time a new instance is created
    const svg = d3.select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500)

    d3.json(url).then(agesData => {
      const rects = svg.selectAll("rect")
        .data(agesData)
      // append multiple bars on the dom
      rects.enter()
        .append("rect")
        .attr("x", (data, index) => index * 100)
        .attr("y", 50)
        .attr("width", 50)
        .attr("height", data => data.age * 10)
        .attr("fill", data => {
          // return data.name == "Tony" ? "red" : "grey"
          if(data.age > 10){
            return "maroon"
          } 
          return "grey"
        })
    })

  }
}



