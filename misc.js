


// D3

d3.csv("file.csv").then(function(data) {
  console.log(data);
});


d3.csv("file.csv").then(data => console.log(data))



// Starting with d3 version 5, promises are built in.

d3.csv("file.csv").then(function(data) {
  console.log(data);
});


// If you use async/await you can do this:

const data = await d3.csv("file.csv");
console.log(data);













// bar plot

import * as d3 from "https://cdn.skypack.dev/d3";

// set the dimensions and margins of the graph
const margin = { top: 20, right: 30, bottom: 55, left: 70 },
	width = document.querySelector("body").clientWidth-100,
	height = 500;

const svg = d3.select("#d3_demo").attr("viewBox", [0, 0, width, height]);

// add title
svg
	.append("text")
	.attr("x", width / 2)
	.attr("y", margin.top + 2)
	.attr("text-anchor", "middle")
	.style("font-size", "22px")
	.style("text-decoration", "underline")
	.text("Nigeria States Population");

const x_scale = d3
	.scaleBand()
	.range([margin.left, width - margin.right])
	.padding(0.1);

const y_scale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

let x_axis = d3.axisBottom(x_scale);

let y_axis = d3.axisLeft(y_scale);
d3
	.json(
		"https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria-states.json"
	)
	.then((data) => {
		data.forEach((d) => (d.Population = +d.info.Population));

		// Scale the range of the data in the domains
		x_scale.domain(data.map((d) => d.Name));
		y_scale.domain([0, d3.max(data, (d) => d.Population)]);

		// append the rectangles for the bar chart
		svg
			.selectAll("rect")
			.data(data)
			.join("rect")
			.attr("class", "bar")
			.attr("x", (d) => x_scale(d.Name))
			.attr("y", (d) => y_scale(d.Population))
			.attr("width", x_scale.bandwidth())
			.attr("height", (d) => height - margin.bottom - y_scale(d.Population));

		// append x axis
		svg
			.append("g")
			.attr("transform", `translate(0,${height - margin.bottom})`)
			.call(x_axis)
			.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".5em")
			.attr("transform", "rotate(-65)");

		// add y axis
		svg.append("g").attr("transform", `translate(${margin.left},0)`).call(y_axis);
	});









// world map

import "./styles.css";

// import * as d3 from "https://cdn.skypack.dev/d3";
import * as d3 from "d3";

// set the dimensions and margins of the graph
const margin = { top: 5, right: 5, bottom: 5, left: 5 },
  width = document.querySelector("body").clientWidth,
  height = 610;

console.log(width);

const svg = d3.select("#d3_demo").attr("viewBox", [0, 0, width+600, height]);

const svg = d3.select("#flow-legend").attr("viewBox", [0, 0, width+600, height]);


let projection = d3.geoEquirectangular().center([0, 0]);

const pathGenerator = d3.geoPath().projection(projection);

// let g = svg.append("g");

d3.json(
  "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/countries-110m.geojson"
).then((data) => {
  svg
    .append("g")
    .selectAll("path")
    .data(data.features)
    .join("path")
    .attr("d", pathGenerator);
});







// Use Multiple Datasets in D3.js

// By adding all the D3 data loading methods d3.json() inside the Promise.all, 
// the .then() callback will only get called when all the data have finished loading, 
// although if one of the data file fails to load the callback will not be called 
// and would result in an error.


Promise.all([
	d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria_state_boundaries.geojson"),
	d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria-states.json")
]).then(([geoJSONdata, countryData]) => {
    console.log(geoJSONdata)
    console.log(countryData)
});


D3 Tutorial:
https://www.freecodecamp.org/news/d3js-tutorial-data-visualization-for-beginners/



// Nigeria map with annotated state/city name

import "./styles.css";

// import * as d3 from "https://cdn.skypack.dev/d3";
import * as d3 from "d3";

// set the dimensions and margins of the graph
const margin = { top: 5, right: 5, bottom: 5, left: 5 },
  width = document.querySelector("body").clientWidth,
  height = document.querySelector("body").clientHeight;

const svg = d3.select("#d3_demo").attr("viewBox", [0, 0, width, height + 800]);

let projection = d3.geoEquirectangular().center([0, 0]);
const pathGenerator = d3.geoPath().projection(projection);

// add title
svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", `${height / 1}`)
  .style("font-size", "20x")
  .style("text-decoration", "underline")
  .text("Map of Nigeria and it's states ");

let g = svg.append("g");

Promise.all([
  d3.json(
    "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria_state_boundaries.geojson"
  ),
  d3.json(
    "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria-states.json"
  )
]).then(([geoJSONdata, countryData]) => {
  countryData.forEach((d) => {
    d.info.Longitude = +d.info.Longitude;
    d.info.Latitude = +d.info.Latitude;
  });

  projection.fitSize([width + 100, height + 100], geoJSONdata);

  g.selectAll("path")
    .data(geoJSONdata.features)
    .join("path")
    .attr("class", "country")
    .attr("d", pathGenerator);

  g.selectAll("circle")
    .data(countryData)
    .join("circle")
    .attr("cx", (d) => projection([d.info.Longitude, d.info.Latitude])[0])
    .attr("cy", (d) => projection([d.info.Longitude, d.info.Latitude])[1])
    .attr("r", 5)
    .style("fill", "green");

  g.selectAll("text")
    .data(countryData)
    .join("text")
    .attr("x", (d) => projection([d.info.Longitude, d.info.Latitude])[0])
    .attr("y", (d) => projection([d.info.Longitude, d.info.Latitude])[1])
    .attr("dy", -7)
    .style("fill", "black")
    .attr("text-anchor", "middle")
    .text((d) => d.Name);
});




// with zooming event


import "./styles.css";

// import * as d3 from "https://cdn.skypack.dev/d3";
import * as d3 from "d3";

// set the dimensions and margins of the graph
const margin = { top: 0, right: 0, bottom: 0, left: 0 },
  width = document.querySelector("body").clientWidth,
  height = document.querySelector("body").clientHeight;

const svg = d3.select("#d3_demo").attr("viewBox", [0, 0, width, height]);

let projection = d3.geoEquirectangular().center([0, 0]);
const pathGenerator = d3.geoPath().projection(projection);

// add title
svg
  .append("text")
  .attr("x", width / 1.4)
  .attr("y", `${height - 20}`)
  .style("font-size", "20x")
  .style("text-decoration", "underline")
  .text("Map of Nigeria and it's states ");

let g = svg.append("g");

Promise.all([
  d3.json(
    "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria_state_boundaries.geojson"
  ),
  d3.json(
    "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria-states.json"
  )
]).then(([topoJSONdata, countryData]) => {
  countryData.forEach((d) => {
    d.info.Longitude = +d.info.Longitude;
    d.info.Latitude = +d.info.Latitude;
  });
  projection.fitSize([width, height], topoJSONdata);
  g.selectAll("path")
    .data(topoJSONdata.features)
    .join("path")
    .attr("class", "country")
    .attr("d", pathGenerator);

  g.selectAll("circle")
    .data(countryData)
    .join("circle")
    .attr("cx", (d) => projection([d.info.Longitude, d.info.Latitude])[0])
    .attr("cy", (d) => projection([d.info.Longitude, d.info.Latitude])[1])
    .attr("r", 5)
    .style("fill", "green");

  g.selectAll("text")
    .data(countryData)
    .join("text")
    .attr("x", (d) => projection([d.info.Longitude, d.info.Latitude])[0])
    .attr("y", (d) => projection([d.info.Longitude, d.info.Latitude])[1])
    .attr("dy", -7)
    .style("fill", "black")
    .style("font-size", "18px")
    .attr("text-anchor", "middle")
    .text((d) => d.Name);

  let zooming = d3
    .zoom()
    .scaleExtent([1, 8])
    .on("zoom", (event) => {
      // console.log(event.transform.k);
      g.selectAll("path").attr("transform", event.transform);
      g.selectAll("circle")
        .attr("transform", event.transform)
        .attr("r", 5 / event.transform.k);
      g.selectAll("text")
        .attr("transform", event.transform)
        .style("font-size", `${18 / event.transform.k}`)
        .attr("dy", -7 / event.transform.k);
    });

  svg.call(zooming);
});




// map with zooming and tooltip

<!-- 
MIT License

Copyright (c) [2021] [Spruce Emmanuel]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this d3.js Example(s), to use without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Project, and to permit persons to whom the Project is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Project.
-->

<body id="svg_wrapper">
  <div
    class="btn-group-vertical"
    role="group"
    aria-label="..."
    id="float-button-group"
  >
    <button class="btn-default" id="zoomIn">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <title>Zoom In</title>
        <path
          fill="none"
          d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
        ></path>
      </svg>
    </button>
    <button class="btn-default" id="zoomOut">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <title>Zoom Out</title>
        <path
          fill="none"
          d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"
        ></path>
      </svg>
    </button>
    <button class="btn-default" id="resetZoom">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <title>Reset Zoom</title>
        <path
          d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403"
        ></path>
      </svg>
    </button>
  </div>
  <svg id="d3_demo"></svg>
</body>





import "./styles.css";

// import * as d3 from "https://cdn.skypack.dev/d3";
import * as d3 from "d3";

// set the dimensions and margins of the graph
const margin = { top: 0, right: 0, bottom: 0, left: 0 },
  width = document.querySelector("body").clientWidth,
  height = document.querySelector("body").clientHeight;

const svg = d3.select("#d3_demo").attr("viewBox", [0, 0, width, height]);

// add title
svg
  .append("text")
  .attr("x", width / 1.4)
  .attr("y", `${height - 20}`)
  .style("font-size", "20x")
  .style("text-decoration", "underline")
  .text("Map of Nigeria and it's states ");

let projection = d3.geoEquirectangular().center([0, 0]);
const pathGenerator = d3.geoPath().projection(projection);

let g = svg.append("g");

let tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

Promise.all([
  d3.json(
    "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria_state_boundaries.geojson"
  ),
  d3.json(
    "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria-states.json"
  )
]).then(([topoJSONdata, countryData]) => {
  countryData.forEach((d) => {
    d.info.Longitude = +d.info.Longitude;
    d.info.Latitude = +d.info.Latitude;
  });
  projection.fitSize([width, height], topoJSONdata);
  g.selectAll("path")
    .data(topoJSONdata.features)
    .join("path")
    .attr("class", "country")
    .attr("d", pathGenerator);

  g.selectAll("circle")
    .data(countryData)
    .join("circle")
    .attr("cx", (d) => projection([d.info.Longitude, d.info.Latitude])[0])
    .attr("cy", (d) => projection([d.info.Longitude, d.info.Latitude])[1])
    .attr("r", 5)
    .style("fill", "green")
    .on("mouseover", function (event, d) {
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip
        .html(
          `<p>Population: ${d.info.Population}</p>` + `<p>Name: ${d.Name}</p>`
        )
        .style("left", event.pageX + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });

  g.selectAll("text")
    .data(countryData)
    .join("text")
    .attr("x", (d) => projection([d.info.Longitude, d.info.Latitude])[0])
    .attr("y", (d) => projection([d.info.Longitude, d.info.Latitude])[1])
    .attr("dy", -7)
    .style("fill", "black")
    .style("font-size", "18px")
    .attr("text-anchor", "middle")
    .text((d) => d.Name);

  let zooming = d3
    .zoom()
    .scaleExtent([1, 8])
    .extent([
      [0, 0],
      [width, height]
    ])
    .on("zoom", function (event) {
      g.selectAll("path").attr("transform", event.transform);
      g.selectAll("circle")
        .attr("transform", event.transform)
        .attr("r", 5 / event.transform.k);
      g.selectAll("text")
        .attr("transform", event.transform)
        .style("font-size", `${18 / event.transform.k}`)
        .attr("dy", -7 / event.transform.k);
    });

  svg.call(zooming);

  d3.select("#zoomIn").on("click", () => {
    svg.transition().call(zooming.scaleBy, 2);
  });
  d3.select("#zoomOut").on("click", () => {
    svg.transition().call(zooming.scaleBy, 0.5);
  });
  d3.select("#resetZoom").on("click", () => {
    svg.transition().call(zooming.scaleTo, 0);
  });
});







body {
	background: lightblue;
	position: relative;
	height: 100vh;
}
button {
	outline: 0px;
	border: 0px;
	cursor: pointer;
	outline-style: none;
}
path {
	stroke: white;
	stroke-width: 0.5px;
	fill: #ebebe0;
}

#float-button-group {
	position: absolute;
	left: 10px;
	top: 10px;
	opacity: 0.5;
	display: flex;
	flex-direction: column;
}

#float-button-group:hover {
	opacity: 1;
}
.svg-icon {
	width: 1.5em;
	height: 1.5em;
}
.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
	fill: #333;
}
.btn-default {
	color: #333;
	background-color: #fff;
	border-color: #ccc;
	padding: 0.4rem;
}
.tooltip {
	position: absolute;
	text-align: center;
	padding: 12px;
	font: 15px sans-serif;
	background: lightsteelblue;
	border-radius: 11px;
	border-radius: 8px;
	pointer-events: none;
}




====================================
// Africa Map with hover (mouseover)
====================================

// HTML

<div id="content">
<div class="info">Hover over a country</div>
<svg width="620px" height="600px">
  <g class="map"></g>
  <g class="bounding-box"><rect></rect></g>
  <g class="centroid"><circle r="4"></circle></g>
</svg>
</div>


// CSS

body {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  color: #333;
}

#content .info {
  height: 20px;
}

#content .map path {
  fill: #aaa;
  stroke: #fff;
}

#content .bounding-box rect {
  fill: none;
  stroke: #333;
  stroke-dasharray: 2,1;
}

#content .centroid {
  display: none;
}

#content .centroid circle {
  fill: red;
}


// Java Script

let projection = d3.geoMercator()
	.scale(400)
	.translate([200, 280])
	.center([0, 5]);

let geoGenerator = d3.geoPath()
	.projection(projection);

function handleMouseover(e, d) {
	let pixelArea = geoGenerator.area(d);
	let bounds = geoGenerator.bounds(d);
	let centroid = geoGenerator.centroid(d);
	let measure = geoGenerator.measure(d);

	d3.select('#content .info')
		.text(d.properties.name + ' (path.area = ' + pixelArea.toFixed(1) + ' path.measure = ' + measure.toFixed(1) + ')');

	d3.select('#content .bounding-box rect')
		.attr('x', bounds[0][0])
		.attr('y', bounds[0][1])
		.attr('width', bounds[1][0] - bounds[0][0])
		.attr('height', bounds[1][1] - bounds[0][1]);

	d3.select('#content .centroid')
		.style('display', 'inline')
		.attr('transform', 'translate(' + centroid + ')');
}

function update(geojson) {
  d3.select('#content g.map')
		.selectAll('path')
		.data(geojson.features)
      .join('path')
      .attr('d', geoGenerator)
      .on('mouseover', handleMouseover);

  
  
	// let u = d3.select('#content g.map')
	// 	.selectAll('path')
	// 	.data(geojson.features);

	// u.enter()
	// 	.append('path')
	// 	.attr('d', geoGenerator)
	// 	// .on('mouseover', handleMouseover);
}



// REQUEST DATA
d3.json('https://assets.codepen.io/2814973/africa.json')
	.then(function(json) {
		update(json)
	});




// =====================================

// highlights: mouse over and mouse out


<!DOCTYPE html>
<meta charset="utf-8">

<script src="https://d3js.org/d3.v4.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
<script src="https://d3js.org/d3-geo-projection.v2.min.js"></script>

<div class="map">
  <h1>World population map</h1>
  <svg id="my_dataviz" width="800" height="450"></svg></div>






body {
  background-color: #F2F3F6;
  min-height: 100%;
  font-family: "Verdana", sans-serif;
}

h1 {
  margin: 0;
  font-size: 20px;
  text-align: center;
}

#legend {
  font-size: 0.7em;
  letter-spacing: 0.1;
}

.map {
  padding: 20px;
  background-color: #FFFFFF;
  border: 1px solid #4D8DC4;
  box-shadow: 1px 1px 15px #000000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

div.tooltip {   
  position: absolute;
  padding: 7px;
  font-size: 0.8em;
  pointer-events: none;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
}  

.background {
  fill: transparent;
  pointer-evens: all;
}

.world {
  transform-origin: center;
}











// initial setup
const svg = d3.select("svg"),
	width = svg.attr("width"),
	height = svg.attr("height"),
	path = d3.geoPath(),
	data = d3.map(),
	worldmap = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson",
	worldpopulation = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv";

let centered, world;

// style of geographic projection and scaling
const projection = d3.geoRobinson()
	.scale(130)
	.translate([width / 2, height / 2]);

// Define color scale
const colorScale = d3.scaleThreshold()
	.domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
	.range(d3.schemeOrRd[7]);

// add tooltip
const tooltip = d3.select("body").append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);

// Load external data and boot
d3.queue()
	.defer(d3.json, worldmap)
	.defer(d3.csv, worldpopulation, function(d) {
		data.set(d.code, +d.pop);
	})
	.await(ready);

// Add clickable background
svg.append("rect")
  .attr("class", "background")
	.attr("width", width)
	.attr("height", height)
	.on("click", click);


// ----------------------------
//Start of Choropleth drawing
// ----------------------------

function ready(error, topo) {
	// topo is the data received from the d3.queue function (the world.geojson)
	// the data from world_population.csv (country code and country population) is saved in data variable

	let mouseOver = function(d) {
		d3.selectAll(".Country")
			.transition()
			.duration(200)
			.style("opacity", .3)
			.style("stroke", "transparent");
		d3.select(this)
			.transition()
			.duration(200)
			.style("opacity", 1)
			.style("stroke", "black");
		tooltip.style("left", (d3.event.pageX + 15) + "px")
			.style("top", (d3.event.pageY - 28) + "px")
			.transition().duration(400)
			.style("opacity", 1)
			.text(d.properties.name + ': ' + Math.round((d.total / 1000000) * 10) / 10 + ' mio.');
	}

	let mouseLeave = function() {
		d3.selectAll(".Country")
			.transition()
			.duration(200)
			.style("opacity", 1)
			.style("stroke", "transparent");
		tooltip.transition().duration(300)
			.style("opacity", 0);
	}

	// Draw the map
	world = svg.append("g")
    .attr("class", "world");
	world.selectAll("path")
		.data(topo.features)
		.enter()
		.append("path")
		// draw each country
		// d3.geoPath() is a built-in function of d3 v4 and takes care of showing the map from a properly formatted geojson file, if necessary filtering it through a predefined geographic projection
		.attr("d", d3.geoPath().projection(projection))

		//retrieve the name of the country from data
		.attr("data-name", function(d) {
			return d.properties.name
		})

		// set the color of each country
		.attr("fill", function(d) {
			d.total = data.get(d.id) || 0;
			return colorScale(d.total);
		})

		// add a class, styling and mouseover/mouseleave and click functions
		.style("stroke", "transparent")
		.attr("class", function(d) {
			return "Country"
		})
		.attr("id", function(d) {
			return d.id
		})
		.style("opacity", 1)
		.on("mouseover", mouseOver)
		.on("mouseleave", mouseLeave)
		.on("click", click);
  
	// Legend
	const x = d3.scaleLinear()
		.domain([2.6, 75.1])
		.rangeRound([600, 860]);

	const legend = svg.append("g")
		.attr("id", "legend");

	const legend_entry = legend.selectAll("g.legend")
		.data(colorScale.range().map(function(d) {
			d = colorScale.invertExtent(d);
			if (d[0] == null) d[0] = x.domain()[0];
			if (d[1] == null) d[1] = x.domain()[1];
			return d;
		}))
		.enter().append("g")
		.attr("class", "legend_entry");

	const ls_w = 20,
		ls_h = 20;

	legend_entry.append("rect")
		.attr("x", 20)
		.attr("y", function(d, i) {
			return height - (i * ls_h) - 2 * ls_h;
		})
		.attr("width", ls_w)
		.attr("height", ls_h)
		.style("fill", function(d) {
			return colorScale(d[0]);
		})
		.style("opacity", 0.8);

	legend_entry.append("text")
		.attr("x", 50)
		.attr("y", function(d, i) {
			return height - (i * ls_h) - ls_h - 6;
		})
		.text(function(d, i) {
			if (i === 0) return "< " + d[1] / 1000000 + " m";
			if (d[1] < d[0]) return d[0] / 1000000 + " m +";
			return d[0] / 1000000 + " m - " + d[1] / 1000000 + " m";
		});

	legend.append("text").attr("x", 15).attr("y", 280).text("Population (Million)");
}

// Zoom functionality
function click(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = -(centroid[0] * 6);
    y = (centroid[1] * 6);
    k = 3;
    centered = d;
  } else {
    x = 0;
    y = 0;
    k = 1;
    centered = null;
  }

  world.selectAll("path")
      .classed("active", centered && function(d) { return d === centered; });

  world.transition()
      .duration(750)
      .attr("transform", "translate(" + x + "," + y + ") scale(" + k + ")" );
  
}

