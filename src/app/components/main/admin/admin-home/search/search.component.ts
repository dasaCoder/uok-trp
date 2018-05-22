import { Component, OnInit } from '@angular/core';
import {DateModel} from '../../../home/notice/notice.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedDate = new Date();
  formatedDate;

  constructor() { }

  ngOnInit() {
  }

  picker() {
    this.formatedDate = `${this.selectedDate.getFullYear()}-${this.selectedDate.getMonth() + 1}-${this.selectedDate.getDate()}`;

    console.log(this.formatedDate);
  }


}
