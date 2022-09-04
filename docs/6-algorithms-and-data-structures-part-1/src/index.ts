import {PriorityQueue} from "./priority-queue";

const MAX_PRIORITY = 1000;

const pq = new PriorityQueue();

for(let i = 0; i < 10000; i++) {
    const priority = Math.floor(Math.random() * MAX_PRIORITY) + 1;
    const value = (Math.random() + 1).toString(36).substring(7);
    pq.enqueue(value, priority);
}
// to check it works :)
setTimeout(() => {
    console.log(pq.getData());
}, 1000);
