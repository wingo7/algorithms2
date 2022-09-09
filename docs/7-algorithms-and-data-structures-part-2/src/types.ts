import {Vertex} from "./vertex";

export interface Path {
    path: string[]
    distance: number
}

export interface QueueItem {
    val: string
    priority: number
}

export interface WeightedGraphs {
    addVertex(vertex: Vertex): void

    addEdge(vertex1: string, vertex2: string, weight: number): void
}

export interface DijkstraInterface {
    findShortestPath(vertex1: Vertex, vertex2: Vertex): Path

    findAllShortestPaths(vertex: Vertex): Record<string, Path>
}
