import Shipper from '../Shipper';
import {ShipData, Packager} from '../../consts';

export class AirEast extends Shipper {
    constructor(shipData: ShipData, packager: Packager) {
        super(shipData, packager);
    }

    protected getPackagePrice = () => {
        const packageList = {
            [Packager.Letter]: 0.39,
            [Packager.Package]: 0.25,
            [Packager.OverSized]: 10.25,
        }
        return packageList[this.packager];
    }
}
