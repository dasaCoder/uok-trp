import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../../../../classes/vehicle';

@Component({
  selector: 'app-set-vehicle',
  templateUrl: './set-vehicle.component.html',
  styleUrls: ['./set-vehicle.component.css']
})
export class SetVehicleComponent implements OnInit {
  public vehicle_list: Vehicle[];
  constructor() { }

  ngOnInit() {
  }

}
