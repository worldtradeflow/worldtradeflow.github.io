class FlowMap {
  constructor({
    container,
    data,
    location,
    direction,
    display,
    topo,
    topoFeatureObject,
    color,
    x,
  }) {
    this.container = container;
    this.data = data;
    this.location = location;
    this.direction = direction;
    this.display = display;
    this.topo = topo;
    this.topoFeatureObject = topoFeatureObject;
    this.color = color;
    this.x = x;
    this.resize = this.resize.bind(this);
    this.init();
  }

  init() {
    this.topoWidth = 975;
    this.topoHeight = 610;

    // this.projection = d3.geoAlbersUsa();
    // this.projection = d3.geoAlbersUsa().scale(1280);
    // this.projection = d3.geoEqualEarth();
    // this.projection = d3.geoEquirectangular();
    // this.projection = d3.geoMercator();
    this.projection = d3.geoNaturalEarth1();
    this.path = d3.geoPath(this.projection);

    this.container.classed("flow-map", true);
    this.svg = this.container.append("svg");
    this.defs = this.svg.append("defs");
    this.defs.append("marker");
    this.defineMarker();
    this.defs.append("g").attr("class", "gradients-defs");
    this.defs.append("g").attr("class", "flows-defs");
    this.defs.append("g").attr("class", "labels-defs");
    this.svg.append("g").attr("class", "locations-g");
    this.svg.append("g").attr("class", "flow-flows-g");
    this.svg.append("g").attr("class", "flow-arrows-g");
    this.svg.append("g").attr("class", "flow-hits-g");
    this.svg.append("g").attr("class", "labels-g");

    this.tooltip = new FlowTooltip({
      container: this.container,
      color: this.color,
    });

    this.wrangleData();
    this.resize();
    window.addEventListener("resize", this.resize);
  }

  wrangleData() {
    // Simplify topojson
    const simplified = topojson.presimplify(this.topo);
    const minWeight = topojson.quantile(simplified, 0.2);
    this.topo = topojson.simplify(simplified, minWeight);
    this.merged = topojson.mesh(this.topo);

    this.featureCollection = topojson.feature(
      this.topo,
      this.topo.objects[this.topoFeatureObject]
    );
    const featureById = new Map(
      this.featureCollection.features.map((feature) => [feature.id, feature])
    );
    this.locations = this.data.nodes.map((d) =>
      Object.assign(
        {
          feature: featureById.get(d.id),
        },
        d
      )
    );
    
    console.log("this.locations:\n", this.locations)

    this.locationById = new Map(this.locations.map((d) => [d.id, d]));
  }

  resize() {

    console.log("this.container:\n", this.container);
    console.log("this.container.node().clientWidth:\n", 
                this.container.node().clientWidth);
    
    this.width = this.container.node().clientWidth;
    this.height = Math.min(
      this.topoHeight,
      Math.ceil((this.width / this.topoWidth) * this.topoHeight)
    );

    this.projection.fitSize([this.width, this.height], this.featureCollection);

    this.svg.attr("viewBox", [0, 0, this.width, this.height]);

    this.updateData();
  }

  updateData() {
    
    this.locations.forEach((d) => {
      [d.x, d.y] = this.path.centroid(d.feature);
      
      // let regions = ['USA', 'AUS'];   
      // amend label geo-location for some regions
      if (d.abbr == 'AUS') {
        d.x += 20;
        d.y += 50;
      } else if (d.abbr == 'USA') {
        d.x += 12;
        d.y += 15;
      } else if (d.abbr == 'CAN') {
        d.x -= 25;
      } else if (d.abbr == 'MAC') {
        d.x += 7;
        d.y += 8;
      }

    });

    const location = this.locationById.get(this.location);

    console.log('location:\n', location);

    // let flows = [];
    // if (this.direction === "both") {
    //   flows = [...location.inbounds, ...location.outbounds];
    // } else {
    //   flows = location[`${this.direction}s`];
    // }
    // flows.sort((a, b) => d3.descending(a.value, b.value));

    // split flows into outflows and inflows
    let flows = [];
    if (this.direction !== "both") {      // outflow or inflow
      flows = location[`${this.direction}s`];
      flows.sort((a, b) => d3.descending(a.value, b.value));
      
      // top inflows / outflows
      if (this.display === "top10") {
        flows = flows.slice(0, 10);
      } else if (this.display === "top5") {
        flows = flows.slice(0, 5);
      }


    } else {                              // both direction
      let inflows = location.inbounds;
      let outflows = location.outbounds;
      inflows.sort((a, b) => d3.descending(a.value, b.value));
      outflows.sort((a, b) => d3.descending(a.value, b.value));
      
      // top inflows and outflows
      if (this.display === "top10") {
        inflows = inflows.slice(0, 10);
        outflows = outflows.slice(0, 10);
      } else if (this.display === "top5") {
        inflows = inflows.slice(0, 5);
        outflows = outflows.slice(0, 5);
      }
      
      flows = [...inflows, ...outflows]     // merge two list
      
      console.log('inflows:\n', inflows);
      console.log('outflows:\n', outflows);

    }
    
    // sort flows but not by inflow/outflow group
    // if (this.display === "top10") {
    //   flows = flows.slice(0, 10);
    // } else if (this.display === "top5") {
    //   flows = flows.slice(0, 5);
    // }

    // // filter flows which have no geo-info in mapdata
    // flows.filter((d) => {
    //   return d;
    // })

    console.log('flows:\n', flows)
    
    this.flows = flows.map((d) => ({
      id: `${d.source}-${d.target}`,
      source: this.locationById.get(d.source),
      target: this.locationById.get(d.target),
      value: d.value,
    }));

    console.log('this.flows:\n', this.flows);

    
    // [add] labels to render [0516]
    // no need to render all labels, only render core (ego/alter) labels
    
    let sources = flows.map((d) => d.source);     // source nodes
    let targets = flows.map((d) => d.target);     // target nodes
    let nodes = [...sources, ...targets];         // merge nodes
    let uniqueNodes = [...new Set(nodes)];        // remove duplicates
    
    this.labels = uniqueNodes.map((d) => ({
      id:    d,
      name:  this.locationById.get(d).name,
      x:     this.locationById.get(d).x,
      y:     this.locationById.get(d).y
    }));
  

    console.log('sources:\n', sources);     
    console.log('targets:\n', targets);
    console.log('unique nodes:\n', uniqueNodes);
    console.log('this.labels (labels to render):\n', this.labels);

    
    this.render();
  }

  render() {
    this.defineGradients();
    this.defineFlows();
    this.defineLabels();
    this.renderLocations();
    this.renderFlowFlows();
    this.renderFlowArrows();
    this.renderFlowHits();
    this.renderLabels();
  }

  defineMarker() {
    this.defs
      .select("marker")
      .attr("id", "flow-arrowhead")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 10)
      .attr("refY", 5)
      .attr("markerWidth", 5)
      .attr("markerHeight", 5)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .append("path")
      .attr("d", "M0,0L10,5L0,10");
  }

  defineGradients() {
    this.defs
      .select(".gradients-defs")
      .selectAll("linearGradient")
      .data(this.flows, (d) => d.id)
      .join((enter) =>
        enter
          .append("linearGradient")
          .attr("id", (d) => `flow-gradient-${d.id}`)
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", 1)
          .attr("y2", 0)
      )
      .attr("gradientTransform", (d) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const angle = Math.round((Math.atan2(dy, dx) * 180) / Math.PI);
        // const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        // console.log('angle:\n', angle, dx, dy, d);
        return `rotate(${angle}, 0.5, 0.5)`;
      })
      .selectAll("stop")
      .data(this.color.domain())
      .join("stop")
      .attr("stop-color", (d) => this.color(d))
      .attr("offset", (d, i) => (i ? "100%" : "25%"));
  }

  defineFlows() {
    this.defs
      .select(".flows-defs")
      .selectAll("g")
      .data(this.flows, (d) => d.id)
      .join((enter) =>
        enter
          .append("g")
          .call((g) =>
            g
              .append("path")
              .attr("class", "flow-arrow-path")
              .attr("id", (d) => `flow-arrow-path-${d.id}`)
              .attr("marker-end", "url(#flow-arrowhead)")
          )
          .call((g) =>
            g.append("path").attr("id", (d) => `flow-flow-path-${d.id}`)
          )
      )
      .each((d, i, ns) => {
        const points = this.calculateBezierCurvePoints(
          d.source.x,
          d.source.y,
          d.target.x,
          d.target.y
        );
        
        // console.log("points:\n", points)

        const curve = new bezier.Bezier(...points);
        const length = curve.length();

        const offset = 12;
        const flowRadius = this.x(d.value) / 2;
        const arrowOffset = 4;

        const arrowCurve = curve.split(
          (length - offset - arrowOffset) / length
        ).left;
        const arrowPath = this.bezierToString(arrowCurve.points, true);

        const flowCurve = curve.split(
          (length - offset - flowRadius) / length
        ).left;
        const flowOutline = flowCurve.outline(0, 0, flowRadius, flowRadius);
        const flowTangent = flowCurve.derivative(1);
        const hypot = Math.hypot(flowTangent.x, flowTangent.y);
        flowTangent.x /= hypot;
        flowTangent.y /= hypot;
        const flowCapIndex = Math.ceil(flowOutline.curves.length / 2);
        const flowPath = flowOutline.curves
          .map((segment, i) => {
            if (i === flowCapIndex) {
              let { x: x1, y: y1 } = segment.points[0];
              let { x: x2, y: y2 } = segment.points[3];
              const offsetX = (flowTangent.x * flowRadius * Math.PI) / 2;
              const offsetY = (flowTangent.y * flowRadius * Math.PI) / 2;
              x1 += offsetX;
              y1 += offsetY;
              x2 += offsetX;
              y2 += offsetY;
              segment.points[1] = { x: x1, y: y1 };
              segment.points[2] = { x: x2, y: y2 };
            }
            return this.bezierToString(segment.points, i === 0);
          })
          .join("");

        const g = d3.select(ns[i]);
        g.select(`#flow-arrow-path-${d.id}`).attr("d", arrowPath);
        g.select(`#flow-flow-path-${d.id}`).attr("d", flowPath);
      });
  }

  defineLabels() {
    this.defs
      .select(".labels-defs")
      .selectAll("g")
      // .data(this.locations, (d) => d.id)
      .data(this.labels, (d) => d.id)
      .join((enter) =>
        enter
          .append("g")
          .attr("id", (d) => `label-${d.id}`)
          .call((g) =>
            g
              .append("text")
              .attr("class", "label-text label-text--halo")
              .attr("text-anchor", "middle")
              .attr("dy", "0.32em")
              // .text((d) => d.feature.properties.abbr)
              // .text((d) => d.feature.properties.name)
              .text((d) => d.name)
          )
          .call((g) =>
            g
              .append("text")
              .attr("class", "label-text")
              .attr("text-anchor", "middle")
              .attr("dy", "0.32em")
              // .text((d) => d.feature.properties.abbr)
              // .text((d) => d.feature.properties.name)
              .text((d) => d.name)
          )
      )
      .attr("transform", (d) => `translate(${d.x},${d.y})`);
  }


  
  // render ego and alters (in ego network) only
  renderLabels() {
    this.svg
      .select(".labels-g")
      .selectAll(".label-use")
      // .data(this.locations, (d) => d.id)
      .data(this.labels, (d) => d.id)
      .join((enter) =>
        enter
          .append("use")
          .attr("class", "label-use")
          .attr("href", (d) => `#label-${d.id}`)
      );
  }



  renderLocations() {
    console.log('this.locations:\n', this.locations)
    console.log('this.merged:\n', this.merged)
    console.log('this.featureCollection:\n', this.featureCollection)
    

    this.svg
      .select(".locations-g")
      .selectAll(".locations-features-path")
      // .data([0])
      .data(this.featureCollection.features)
      .join((enter) =>
        enter.append("path").attr("class", "locations-features-path")
        // .attr('fill', 'red')
      )
      .filter( (d) => {
        return d.properties.name !== 'Antarctica';    // filter Antarctica
      })
      .attr("d", this.path)    // fill is also enabled now

      // .attr("d", this.path(this.merged))    // topojson.mesh object
      // .attr('fill', 'red')
      ;
  }

  renderFlowFlows() {
    this.svg
      .select(".flow-flows-g")
      .selectAll(".flow-flow-use")
      .data(this.flows, (d) => d.id)
      .join((enter) =>
        enter
          .append("use")
          .attr("class", "flow-flow-use")
          .attr("href", (d) => `#flow-flow-path-${d.id}`)
          .attr("fill", (d) => `url(#flow-gradient-${d.id})`)
        
      );
  }

  renderFlowArrows() {
    this.svg
      .select(".flow-arrows-g")
      .selectAll(".flow-arrow-use")
      .data(this.flows, (d) => d.id)
      .join((enter) =>
        enter
          .append("use")
          .attr("class", "flow-arrow-use")
          .attr("href", (d) => `#flow-arrow-path-${d.id}`)
      );
  }

  renderFlowHits() {
    this.svg
      .select(".flow-hits-g")
      .selectAll(".flow-hit-use")
      .data(this.flows, (d) => d.id)
      .join((enter) =>
        enter
          .append("use")
          .attr("class", "flow-hit-use")
          .attr("href", (d) => `#flow-arrow-path-${d.id}`)
          .on("mouseover", (event, d) => {
            this.highlightFlows(d);
            this.tooltip.show(d);
          })
          .on("mouseout", (event, d) => {
            this.resetHighlightFlows();
            this.tooltip.hide();
          })
          .on("mousemove", (event, d) => {
            this.tooltip.move(event);
          })
      );
  }



  // renderLabels() {
  //   this.svg
  //     .select(".labels-g")
  //     .selectAll(".label-use")
  //     .data(this.locations, (d) => d.id)
  //     .join((enter) =>
  //       enter
  //         .append("use")
  //         .attr("class", "label-use")
  //         .attr("href", (d) => `#label-${d.id}`)
  //     );
  // }

  highlightFlows(d) {
    this.svg
      .select(".flow-flows-g")
      .selectAll(".flow-flow-use")
      .style("opacity", (e) => (e === d ? 1 : 0.15));
    this.svg
      .select(".flow-arrows-g")
      .selectAll(".flow-arrow-use")
      .style("opacity", (e) => (e === d ? 1 : 0.15));
  }

  resetHighlightFlows() {
    this.svg
      .select(".flow-flows-g")
      .selectAll(".flow-flow-use")
      .style("opacity", 1);
    this.svg
      .select(".flow-arrows-g")
      .selectAll(".flow-arrow-use")
      .style("opacity", 1);
  }

  calculateBezierCurvePoints(x1, y1, x2, y2) {
    const r = Math.hypot(x1 - x2, y1 - y2);
    const curves = SVGArcToCubicBezier({
      px: x1,
      py: y1,
      cx: x2,
      cy: y2,
      rx: r,
      ry: r,
      xAxisRotation: 0,
      largeArcFlag: 0,
      sweepFlag: 0,
    });
    const curve = curves[0];
    return [
      { x: x1, y: y1 },
      { x: curve.x1, y: curve.y1 },
      { x: curve.x2, y: curve.y2 },
      { x: x2, y: y2 },
    ];
  }

  bezierToString(points, first) {
    let commands = [];
    if (first) {
      commands.push("M", points[0].x, points[0].y);
    }
    switch (points.length) {
      case 3:
        commands.push("Q", points[1].x, points[1].y, points[2].x, points[2].y);
        break;
      case 4:
        commands.push(
          "C",
          points[1].x,
          points[1].y,
          points[2].x,
          points[2].y,
          points[3].x,
          points[3].y
        );
        break;
    }
    return commands.join(" ");
  }

  onLocationChange(location) {
    this.location = location;
    this.updateData();
  }

  onDirectionChange(direction) {
    this.direction = direction;
    this.updateData();
  }

  onDisplayChange(display) {
    this.display = display;
    this.updateData();
  }
}
