"use strict";
exports.__esModule = true;
exports.WeightedGraph = void 0;
var WeightedGraph = /** @class */ (function () {
    function WeightedGraph() {
        this.adjustedList = {};
        this.vertexList = [];
    }
    WeightedGraph.prototype.addVertex = function (vertex) {
        var key = vertex.vertice;
        if (!this.adjustedList[key]) {
            this.adjustedList[key] = {};
        }
        this.vertexList.push(vertex);
    };
    WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
        this.adjustedList[vertex1][vertex2] = weight;
        this.adjustedList[vertex2][vertex1] = weight;
    };
    WeightedGraph.prototype.getVertexList = function () {
        return this.vertexList;
    };
    return WeightedGraph;
}());
exports.WeightedGraph = WeightedGraph;
