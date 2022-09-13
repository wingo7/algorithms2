"use strict";
exports.__esModule = true;
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.queue = [];
    }
    PriorityQueue.prototype.getSize = function () {
        return this.queue.length;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.getSize() === 0;
    };
    PriorityQueue.prototype.enqueue = function (val, priority) {
        var element = { val: val, priority: priority };
        if (this.isEmpty() ||
            element.priority >= this.queue[this.getSize() - 1].priority) {
            this.queue.push(element);
        }
        else {
            for (var index in this.queue) {
                if (element.priority < this.queue[index].priority) {
                    this.queue.splice(+index, 0, element);
                    break;
                }
            }
        }
    };
    PriorityQueue.prototype.dequeue = function () {
        return this.isEmpty() ? null : this.queue.shift().val;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
