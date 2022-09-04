"use strict";
exports.__esModule = true;
var priority_queue_1 = require("./priority-queue");
var MAX_PRIORITY = 1000;
var pq = new priority_queue_1.PriorityQueue();
for (var i = 0; i < 10000; i++) {
    var priority = Math.floor(Math.random() * MAX_PRIORITY) + 1;
    var value = (Math.random() + 1).toString(36).substring(7);
    pq.enqueue(value, priority);
}
// to check it works :)
setTimeout(function () {
    console.log(pq.getData());
}, 1000);
