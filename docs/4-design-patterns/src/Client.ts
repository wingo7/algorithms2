import Shipment from './Shipment';
import {ShipData, Mark, MarksDecoratorList} from './consts';
import {MarkerDecorator} from './Decorator';

interface Clients {
    sendShipRequest: (params: ShipData, marks?: Mark[]) => void
}

class Client implements Clients {
    constructor() {
    }

    sendShipRequest = (data, marks: Mark[] = []): MarkerDecorator => {
        return marks.reduce<MarkerDecorator>((acc, cur) => {
            return new MarksDecoratorList[cur](acc as Shipment);
        }, new Shipment(data));
    }
}

export default Client;
