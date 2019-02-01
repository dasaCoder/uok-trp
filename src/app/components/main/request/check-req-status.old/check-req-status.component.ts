import { Component, OnInit } from '@angular/core';
import {slide} from '../../../../animations';

@Component({
  selector: 'app-check-req-status',
  templateUrl: './check-req-status.component.html',
  styleUrls: ['./check-req-status.component.css'],
  animations: [
    slide
  ]
})
export class CheckReqStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
