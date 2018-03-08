import { Injectable } from '@angular/core';
import {Request} from '../classes/request';
import { StatusEnum} from '../classes/status';

@Injectable()
export class RequestService {
  requests: Request[] = [
    {
      refNo: 2,
      lecturer: 'Dr.gamini',
      dep_unit: 'sciect',
      position: 'head',
      num_passangers: 3,
      purpose: 'official',
      status: {
        isAccepted: StatusEnum.NOT_CONSIDERED,
        message: 'Your message is not considered yet. pleas be patient...'
      }
    },
    {
      refNo: 3,
      lecturer: 'prof.ddss',
      dep_unit: 'art',
      position: 'head',
      num_passangers: 3,
      purpose: 'official',
      vehicleType: 'car'
    }
  ];
  constructor() { }
  getALLRequests() {
    return this.requests;
  }
  getOneRequest(id: number) {
    for (let x = 0; x < this.requests.length; x++) {
      if ( this.requests[x].refNo == id ) {
        return this.requests[x];
      }
    }
  }
  addRequest(request: Request) {
    this.requests.push(request);
  }
}
