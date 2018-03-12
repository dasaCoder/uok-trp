import {Trip} from './request';

export class Vehicle {
  vehicle_no: string;
  vehicle_type: Vehicle_type; // this model not have any trip field because it already included in request
}

export enum Vehicle_type {
  CAR,
  THREE_WHEEL,
  DOUBLE_CAB,
  VAN,
  BUS
}
