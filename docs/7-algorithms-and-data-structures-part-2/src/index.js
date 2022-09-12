"use strict";
exports.__esModule = true;
var edge_1 = require("./edge");
var vertex_1 = require("./vertex");
var weighted_graph_1 = require("./weighted-graph");
var dijkstra_1 = require("./dijkstra");
var vertex1 = new vertex_1.Vertex('1');
var vertex2 = new vertex_1.Vertex('2');
var vertex3 = new vertex_1.Vertex('3');
var vertex4 = new vertex_1.Vertex('4');
var vertex5 = new vertex_1.Vertex('5');
var vertices = [vertex1, vertex2, vertex3, vertex4, vertex5];
var edges = [
    new edge_1.Edge(vertex1, vertex4, 3),
    new edge_1.Edge(vertex1, vertex2, 5),
    new edge_1.Edge(vertex1, vertex3, 4),
    new edge_1.Edge(vertex2, vertex4, 6),
    new edge_1.Edge(vertex2, vertex3, 5),
];
var graph = new weighted_graph_1.WeightedGraph();
vertices.forEach(function (verticle) { return graph.addVertex(verticle); });
edges.forEach(function (edge) { return graph.addEdge(edge.from, edge.to, edge.weight); });
console.log(graph);
var dijkstra = new dijkstra_1.Dijkstra(graph);
console.log('findShortestPaths', dijkstra.findShortestPath(vertex4, vertex3));
console.log('findAllShortestPaths', dijkstra.findAllShortestPaths(vertex4));
