Promise.all([
d3.csv("data/2022_import_value.csv"),
d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json')
]).then(([tradedata, mapdata]) => {






const { nodes, links } = processData(tradedata, mapdata);

const color = d3
.scaleOrdinal()
.domain(["outbound", "inbound"])
.range(["#df376f", "#00aeef"])
;


const x = d3
.scaleSqrt()
.domain([1e6, d3.max(links, (d) => d.value)])
.range([1, 24]);

const dispatch = d3.dispatch(
"locationchange",
"directionchange",
"displaychange"
);

const selected = {
location: "156",    // China
direction: "outbound",
display: "top10",
};

new SelectControl({
container: d3.select("#location-control"),
label: "Focused Region",
id: "location-select",
options: nodes.map((d) => ({
value: d.id,
text: d.name,
})),
initialValue: selected.location,
onChange: (location) => {
dispatch.call("locationchange", null, location);
},
});

new RadiosControl({
container: d3.select("#direction-control"),
label: "Flow Direction",
name: "flow-direction-radio",
options: [
{ value: "inbound", text: "Importer", id: "flow-direction-inbound" },
{ value: "outbound", text: "Exporter", id: "flow-direction-outbound" },
{ value: "both", text: "Both", id: "flow-direction-both" },
],
initialValue: selected.direction,
onChange: (direction) => {
dispatch.call("directionchange", null, direction);
},
});

new RadiosControl({
container: d3.select("#display-control"),
label: "Displayed Flows",
name: "flow-display-radio",
options: [
{ value: "top5", text: "Top 5", id: "flow-display-top5" },
{ value: "top10", text: "Top 10", id: "flow-display-top10" },
{ value: "all", text: "All", id: "flow-display-all" },
],
initialValue: selected.display,
onChange: (display) => {
dispatch.call("displaychange", null, display);
},
});

new FlowLegend({
container: d3.select("#flow-legend"),
color,
x,
flowValues: [1e9, 1e10, 1e11],
tickValues: ["Exporter", "Importer"],
});

const flowMap = new FlowMap({
container: d3.select("#flow-map"),
data: { nodes, links },
location: selected.location,
direction: selected.direction,
display: selected.display,
topo: mapdata,
topoFeatureObject: "countries",
color,
x,
});

dispatch.on("locationchange", (location) => {
selected.location = location;
flowMap.onLocationChange(location);
});

dispatch.on("directionchange", (direction) => {
selected.direction = direction;
flowMap.onDirectionChange(direction);
});

dispatch.on("displaychange", (display) => {
selected.display = display;
flowMap.onDisplayChange(display);
});
});