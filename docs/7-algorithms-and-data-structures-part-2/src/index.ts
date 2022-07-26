import {Edge} from './edge';
import {Vertex} from './vertex';
import {WeightedGraph} from './weighted-graph';
import {Dijkstra} from './dijkstra';

const vertex1 = new Vertex('1')
const vertex2 = new Vertex('2')
const vertex3 = new Vertex('3')
const vertex4 = new Vertex('4')
const vertex5 = new Vertex('5')

const vertices = [vertex1, vertex2, vertex3, vertex4, vertex5]

const edges = [
    new Edge(vertex1, vertex4, 3),
    new Edge(vertex1, vertex2, 5),
    new Edge(vertex1, vertex3, 4),
    new Edge(vertex2, vertex4, 6),
    new Edge(vertex2, vertex3, 5),
]
const graph: WeightedGraph = new WeightedGraph()

vertices.forEach(verticle => graph.addVertex(verticle))
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight))

console.log(graph)

const dijkstra: Dijkstra = new Dijkstra(graph)

console.log('findShortestPaths', dijkstra.findShortestPath(vertex4, vertex3))
console.log('findAllShortestPaths', dijkstra.findAllShortestPaths(vertex4))
