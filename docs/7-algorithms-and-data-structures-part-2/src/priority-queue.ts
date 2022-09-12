import {QueueItem} from "./types";

export class PriorityQueue {
    queue: QueueItem[] = []

    getSize() {
        return this.queue.length
    }

    isEmpty() {
        return this.getSize() === 0
    }

    enqueue(val: string, priority: number) {
        const element: QueueItem = {val, priority}
        if (
            this.isEmpty ||
            element.priority >= this.queue[this.getSize() - 1].priority
        ) {
            this.queue.push(element)
        } else {
            for (const index in this.queue) {
                if (element.priority < this.queue[index].priority) {
                    this.queue.splice(+index, 0, element)
                    break
                }
            }
        }
    }

    dequeue() {
        return this.isEmpty ? null : this.queue.shift().val
    }
}
