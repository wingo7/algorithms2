"use strict";
exports.__esModule = true;
exports.Edge = void 0;
var Edge = /** @class */ (function () {
    function Edge(from, to, weight) {
        this.weight = weight;
        this.from = '';
        this.to = '';
        this.from = from.vertice;
        this.to = to.vertice;
    }
    return Edge;
}());
exports.Edge = Edge;
