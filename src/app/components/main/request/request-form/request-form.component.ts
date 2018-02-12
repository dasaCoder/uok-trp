import { Component, OnInit } from '@angular/core';
import { Request } from '../../../../classes/request';
import {IntlService} from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

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

   faculties = [
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
   ]

   title = '';
   name = '';
   faculty = '';
   department = '';
   destination = '';
   dateTime ;
   enddate ;
   endtime ;
   end_date_time;
   jstartTime: Date = new Date(2000, 2, 10, 10, 0) ;
    jdatetime = '';
   numOfPassangers = '';
   email = '';
   password = '';
   rePassword = '';

    formSubmit() {
      this.jdatetime = `${this.intl.formatDate(this.dateTime, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.jstartTime, 't')}` ;
      this.end_date_time = `${this.intl.formatDate(this.enddate, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.endtime, 't')}` ;
    }
  constructor(private intl: IntlService ) {
  }

  ngOnInit() {
  }
  /*public onChange(value: Date): void {
    this.log(value);
  }

  private log( value?: Date): void {
    this.dateTime = `${this.formatValue(value)}`;
  }

  private formatValue(value?: Date): string {
    return value ? `${this.intl.formatDate(value, 'yyyy-MMM-dd')}` : '';
  }*/


}
