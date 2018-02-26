import { Component, OnInit } from '@angular/core';
import {slide} from '../../../../animations';

@Component({
  selector: 'app-request-btns',
  templateUrl: './request-btns.component.html',
  styleUrls: ['./request-btns.component.css'],
  animations: [
    slide
  ]
})
export class RequestBtnsComponent implements OnInit {
  xy = 9;
  constructor() { }

  ngOnInit() {
  }


}
