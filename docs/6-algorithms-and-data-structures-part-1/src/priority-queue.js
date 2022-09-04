"use strict";
exports.__esModule = true;
exports.PriorityQueue = void 0;
var priority_node_1 = require("./priority-node");
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
    }
    PriorityQueue.prototype.enqueue = function (value, priority) {
        var node = new priority_node_1.PriorityNode(value, priority);
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            var previous = this.head;
            if (previous.priority < priority) {
                node.next = previous;
                this.head = node;
                return node;
            }
            var next = previous === null || previous === void 0 ? void 0 : previous.next;
            while (previous && next) {
                if (next.priority < priority) {
                    node.next = next;
                    previous.next = node;
                    return node;
                }
                previous = previous.next;
                next = next.next;
            }
            this.tail.next = node;
            this.tail = node;
        }
        console.log("Value ".concat(value, " has been added with priority ").concat(priority));
        return node;
    };
    PriorityQueue.prototype.dequeue = function () {
        if (!this.head) {
            return;
        }
        var oldHead = this.head;
        this.head = oldHead.next;
        return oldHead;
    };
    PriorityQueue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.head == null;
    };
    PriorityQueue.prototype.getData = function () {
        var values = [];
        var head = this.head;
        while (head) {
            values.push(head.value);
            head = head.next;
        }
        return values;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
