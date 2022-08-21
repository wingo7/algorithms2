import {ShipData, Packager} from '../consts';

class Shipper {
    constructor(protected shipData: ShipData, protected packager: Packager) {
    }

    protected getPackagePrice: () => number;
    getCost = () => {
        return this.getPackagePrice() * this.shipData.weight;
    }
}

export default Shipper;
