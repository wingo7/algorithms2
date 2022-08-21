import {Companies, companyList, ShipData, Packager} from '../consts';
import Shipper from './Shipper';

class ShipperFactory {
    constructor() {
    }

    createShipper = (shipData: ShipData, packager: Packager): Shipper => {
        const companies = [
            {
                name: Companies.AirEast,
                codes: [1, 2, 3],
            },
            {
                name: Companies.ChicagoSprint,
                codes: [4, 5, 6],
            },
            {
                name: Companies.PacificParcel,
                codes: [7, 8, 9]
            }
        ]
        const shipper = companies.find(({name, codes}) => {
            return codes.some(c => c === Number(shipData.toZipCode[0]))
        });
        if (!shipper) {
            throw new Error('Not supported!');
        }
        const ShipperCompany = companyList[shipper.name];
        return new ShipperCompany(shipData, packager)
    }
}

export default ShipperFactory;
