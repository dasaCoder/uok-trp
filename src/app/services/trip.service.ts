import { Injectable } from '@angular/core';

export class Event {
  id: string;
  start_date: string;
  end_date: string;
  text: string;
}

@Injectable()
export class TripService {

  constructor() { }
  get(): Promise<Event[]> {
    return Promise.resolve([
      {id: '1', start_date: '2018-03-01 01:00', end_date: '2018-03-01 04:00', text: 'Event 1'},
      {id: '2', start_date: '2018-03-01 05:00', end_date: '2018-03-01 06:30', text: 'Event 2'},
      {id: '3', start_date: '2018-03-03 10:00', end_date: '2018-03-04 17:00', text: 'Event 3'},
      {id: 'ref2', start_date: '2018-03-28 08:35:48.000Z', end_date: '2018-03-28 09:35:48.000Z', text: 'Event 4'},
    ]);
  }

}


