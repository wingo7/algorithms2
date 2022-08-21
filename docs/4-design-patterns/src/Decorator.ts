import Shipment from './Shipment';

export interface MarkerDecorator {
    getInstance: () => Shipment;
    ship: () => string;
}

abstract class Decorator implements MarkerDecorator {
    protected shipment;

    protected constructor(protected decorator: Shipment) {
        this.shipment = this.decorator.getInstance();
    };

    abstract ship;
    getInstance = () => this.shipment;
}

export default Decorator;
