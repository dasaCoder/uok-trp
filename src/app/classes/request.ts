import { StatusOfRequest} from './status';
import {Vehicle} from './vehicle';
import {Driver} from './driver';

export class Request {
  constructor(
    /*public id: number ,
    public title: string ,
    public name: string ,
    public faculty: string,
    public department: string,
    public destination: string,
    public start_date_time: string,
    public end_date_time: string,
    public duration: string,
    public numOfPassangers: number,
    public email: string,
    public password: string*/
  ) {  }

  refNo: number;
  lecturer?: string;
  email?: string;
  password?: string;
  dep_unit?: string; // department or unit which request is from
  position?: string; // position of the officail/lecturer
  num_passangers?: number; // number of other passangers which hoping to travel
  purpose?: string; // for what you need the vehicle
  vehicle_type?: string; // type of the vehicle
  status?: StatusOfRequest; // check whether the status is confirmed? not Reviewed ? or rejected
  isPermited?: boolean; // if this trip is permited from
  fundingWay?: string; // if this trip is not permited, how they going to find funds for this
  departure?: Trip;
  arrival?: Trip;
  vehicle?: Vehicle;
  driver?: Driver;
}


export class Trip {
  pickupPoint?: string;
  pickPointAddress?: string;
  pickupTime?: string;
  dropPoint?: string;
  dropPointAddress?: string;
  dropTime?: string;
}

