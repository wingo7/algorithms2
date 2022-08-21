import Decorator from './Decorator';
import Shipment from './Shipment';

class FragileDecorator extends Decorator {
    constructor(shipment: Shipment) {
        super(shipment);
    };

    ship = () => {
        return `${this.decorator.ship()}\n **MARK FRAGILE**`;
    }
}

export default FragileDecorator;
