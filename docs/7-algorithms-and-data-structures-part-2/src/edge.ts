import {Vertex} from './vertex';

export class Edge {
    from = ''
    to = ''

    constructor(
        from: Vertex = null,
        to: Vertex = null,
        public weight: number = null
    ) {
        this.from = from.vertice
        this.to = to.vertice
    }
}
