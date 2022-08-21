import Shipper from '../Shipper';
import {ShipData, Packager} from '../../consts';

export class ChicagoSprint extends Shipper {
    constructor(shipData: ShipData, packager: Packager) {
        super(shipData, packager);
    }

    protected getPackagePrice = () => {
        const packageList = {
            [Packager.Letter]: 0.42,
            [Packager.Package]: 0.20,
            [Packager.OverSized]: 0.20,
        }
        return packageList[this.packager];
    }
}
