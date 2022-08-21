import { AirEast } from './Shipper/Companies/AirEast';
import { ChicagoSprint } from './Shipper/Companies/ChicagoSprint';
import { PacificParcel } from './Shipper/Companies/PacificParcel';
import FragileDecorator from './FragileDecorator';
import NotLeaveDecorator from './NotLeaveDecorator';
import ReturnReceiptDecorator from './ReturnReceiptDecorator';



export enum Packager {
  Letter,
  Package,
  OverSized
}

export enum Companies {
  AirEast,
  ChicagoSprint,
  PacificParcel
}

export interface ShipData {
  shipmentID: number;
  weight: number;
  fromAddress: string;
  fromZipCode: string;
  toAddress: string;
  toZipCode: string;
}

export const companyList = {
  [Companies.AirEast]: AirEast,
  [Companies.ChicagoSprint]: ChicagoSprint,
  [Companies.PacificParcel]: PacificParcel
}

export enum Mark {
  Fragile,
  DoNotLeave,
  ReturnReceiptRequested,
}

export const MarksDecoratorList = {
  [Mark.Fragile]: FragileDecorator,
  [Mark.DoNotLeave]: NotLeaveDecorator,
  [Mark.ReturnReceiptRequested]: ReturnReceiptDecorator
}
