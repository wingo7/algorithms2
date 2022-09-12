"use strict";
exports.__esModule = true;
exports.Dijkstra = void 0;
var priority_queue_1 = require("./priority-queue");
var Dijkstra = /** @class */ (function () {
    function Dijkstra(graph) {
        this.graph = graph;
        this.pathCost = {};
        this.prev = {};
        this.priorityQueue = new priority_queue_1.PriorityQueue();
        this.allShortestPaths = {};
    }
    Dijkstra.prototype.findShortestPath = function (vertex1, vertex2) {
        var vertex1Key = vertex1.vertice;
        var vertex2Key = vertex2.vertice;
        var current;
        var result = [];
        for (var vertex in this.graph.adjustedList) {
            if (vertex === vertex1Key) {
                this.pathCost[vertex] = 0;
                this.priorityQueue.enqueue(vertex, 0);
            }
            else {
                this.pathCost[vertex] = Infinity;
            }
            this.prev[vertex] = null;
        }
        while (this.priorityQueue.queue.length) {
            current = this.priorityQueue.dequeue();
            if (current === vertex2Key) {
                while (this.prev[current]) {
                    result.push(current);
                    current = this.prev[current];
                }
                break;
            }
            for (var neighbor in this.graph.adjustedList[current]) {
                var costToNeighbor = this.pathCost[current] + this.graph.adjustedList[current][neighbor];
                if (costToNeighbor < this.pathCost[neighbor]) {
                    this.pathCost[neighbor] = costToNeighbor;
                    this.prev[neighbor] = current;
                    this.priorityQueue.enqueue(neighbor, costToNeighbor);
                }
            }
        }
        return {
            path: result.concat(current).reverse(),
            distance: this.pathCost[vertex2Key]
        };
    };
    Dijkstra.prototype.findAllShortestPaths = function (vertexStart) {
        var _this = this;
        var vertexsList = this.graph.getVertexList();
        vertexsList.forEach(function (vertexEnd) {
            if (vertexStart != vertexEnd) {
                _this.allShortestPaths[vertexEnd.vertice] = _this.findShortestPath(vertexStart, vertexEnd);
            }
        });
        return this.allShortestPaths;
    };
    return Dijkstra;
}());
exports.Dijkstra = Dijkstra;
