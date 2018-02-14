import { Component, OnInit } from '@angular/core';
import { Request } from '../../../../classes/request';
import {IntlService} from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  public source: Array<string> = [
    'software engineering',
    'department of chemistry',
    'department of mathemetics'
  ];

  public data: Array<string>;
  /*userReq = new Request(3, 'dilusha' );*/
   id: number;
   titleList = [
     'Mr',
     'Mrs' ,
     'Ms',
     'Dr',
     'Prof',
     'Ven'
   ];
   isGood = true;

  /* faculties = [
     {
       name : 'science',
       departments : [
         'software engineering',
         'department of chemistry',
         'department of mathemetics'
       ]
     },
     {
       name : 'Commerce',
       departments : [
         'department of economics',
         'department of managment'
       ]
     }
   ];*/

   formData: any = {};
   dateTime ;
   enddate ;
   endtime ;
   jstartTime;
   rePassword = '';

    formSubmit() {
      this.formData.jdatetime = `${this.intl.formatDate(this.dateTime, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.jstartTime, 't')}` ;
       /*this.formData.end_date_time = `${this.intl.formatDate(this.enddate, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.endtime, 't')}` ;*/
       console.log(this.formData);
    }

    handleFilter(value) {
      this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
  constructor(private intl: IntlService ) {
    this.data = this.source.slice();
  }
  ngOnInit() {
  }
 /* public onChange(value: Date): void {
    this.log(value);
  }

  private log( value?: Date): void {
    this.dateTime = `${this.formatValue(value)}`;
  }

  private formatValue(value?: Date): string {
    return value ? `${this.intl.formatDate(value, 'yyyy-MMM-dd')}` : '';
  }*/


}
