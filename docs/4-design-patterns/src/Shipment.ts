import ShipmentIdGenerator from './ShipmentIdGenerator';
import {ShipData, Packager} from './consts';
import ShipperFactory from './Shipper/ShipperFactory';
import {MarkerDecorator} from './Decorator';

const DEFAULT_COST = 39;

interface Shipment extends MarkerDecorator {
    getInstance: () => Shipment;
    ship: () => string;
    getShipmentId: () => number;
}

class Shipment implements Shipment {
    private readonly wrapper: Packager;

    constructor(private shipData: ShipData) {
        if (shipData.weight < 16) {
            this.wrapper = Packager.Letter
        } else if (shipData.weight < 160) {
            this.wrapper = Packager.Package
        } else {
            this.wrapper = Packager.OverSized;
        }
    }

    getShipmentId = () => {
        if (!this.shipData.shipmentID) {
            this.shipData.shipmentID = new ShipmentIdGenerator().createId()
        }
        return this.shipData.shipmentID;
    };

    getInstance = (): Shipment => this;

    ship = () => {
        const {fromAddress, fromZipCode, toAddress, toZipCode, weight} = this.shipData;
        const baseCost = DEFAULT_COST * weight;
        const shipper = new ShipperFactory().createShipper(this.shipData, this.wrapper);
        return `Shipment with the ID ${this.getShipmentId()} will be picked up from ${fromZipCode} ${fromAddress} 
    and shipped to ${toZipCode} ${toAddress} Cost = ${baseCost + shipper.getCost()}`;
    };
}

export default Shipment;
