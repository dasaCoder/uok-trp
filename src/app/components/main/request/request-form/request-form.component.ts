import { Component, OnInit } from '@angular/core';
import { Request } from '../../../../classes/request';

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
   dateTime = '';
   numOfPassangers = '';
   email = '';
   password = '';

    formSubmit() {
      let userReq = new Request(1, this.title , this.name, this.faculty, this.department, this.destination , this.dateTime , 5, this.email , this.password );
      console.log(userReq);
    }
  constructor() {
  }

  ngOnInit() {
  }
}
