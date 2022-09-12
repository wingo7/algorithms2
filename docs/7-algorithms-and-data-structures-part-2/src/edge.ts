import {Vertex} from './vertex';

export class Edge {
    from = ''
    to = ''

    constructor(
        from: Vertex,
        to: Vertex,
        public weight: number
    ) {
        this.from = from.vertice
        this.to = to.vertice
    }
}
