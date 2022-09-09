import {WeightedGraphs} from "./types";
import {Vertex} from './Vertex'

export class WeightedGraph implements WeightedGraphs {
    adjustedList: Record<string, any> = {}
    private vertexList: Array<Vertex> = []

    addVertex(vertex: Vertex): void {
        const key = vertex.vertice
        if (!this.adjustedList[key]) {
            this.adjustedList[key] = {}
        }
        this.vertexList.push(vertex)
    }

    addEdge(vertex1: string, vertex2: string, weight: number): void {
        this.adjustedList[vertex1][vertex2] = weight
        this.adjustedList[vertex2][vertex1] = weight
    }

    getVertexList(): Vertex[] {
        return this.vertexList
    }
}
