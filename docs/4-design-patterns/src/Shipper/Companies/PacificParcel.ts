import Shipper from '../Shipper';
import {ShipData, Packager} from '../../consts';

export class PacificParcel extends Shipper {
    constructor(shipData: ShipData, packager: Packager) {
        super(shipData, packager);
    }

    protected getPackagePrice = () => {
        const packageList = {
            [Packager.Letter]: 0.51,
            [Packager.Package]: 0.19,
            [Packager.OverSized]: 0.02,
        }
        return packageList[this.packager];
    }
}
