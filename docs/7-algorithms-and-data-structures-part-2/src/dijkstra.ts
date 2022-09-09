import {Vertex} from './vertex';
import {WeightedGraph} from './weighted-graph';
import {PriorityQueue} from './priority-queue';
import {DijkstraInterface, Path} from "./types";

export class Dijkstra implements DijkstraInterface {
    pathCost: Record<string, any> = {}
    prev: Record<string, string> = {}
    priorityQueue = new PriorityQueue()
    allShortestPaths: Record<string, Path> = {}

    constructor(private graph: WeightedGraph) {
    }

    findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
        const vertex1Key = vertex1.vertice
        const vertex2Key = vertex2.vertice

        let current
        const result = []
        for (const vertex in this.graph.adjustedList) {
            if (vertex === vertex1Key) {
                this.pathCost[vertex] = 0
                this.priorityQueue.enqueue(vertex, 0)
            } else {
                this.pathCost[vertex] = Infinity
            }
            this.prev[vertex] = null
        }
        while (this.priorityQueue.queue.length) {
            current = this.priorityQueue.dequeue()
            if (current === vertex2Key) {
                while (this.prev[current]) {
                    result.push(current)
                    current = this.prev[current]
                }
                break
            }
            for (const neighbor in this.graph.adjustedList[current]) {
                const costToNeighbor =
                    this.pathCost[current] + this.graph.adjustedList[current][neighbor]
                if (costToNeighbor < this.pathCost[neighbor]) {
                    this.pathCost[neighbor] = costToNeighbor
                    this.prev[neighbor] = current
                    this.priorityQueue.enqueue(neighbor, costToNeighbor)
                }
            }
        }

        return {
            path: result.concat(current).reverse(),
            distance: this.pathCost[vertex2Key],
        }
    }

    findAllShortestPaths(vertexStart: Vertex): any {
        const vertexsList = this.graph.getVertexList()
        vertexsList.forEach(vertexEnd => {
            if (vertexStart != vertexEnd) {
                this.allShortestPaths[vertexEnd.vertice] = this.findShortestPath(
                    vertexStart,
                    vertexEnd
                )
            }
        })
        return this.allShortestPaths
    }
}
