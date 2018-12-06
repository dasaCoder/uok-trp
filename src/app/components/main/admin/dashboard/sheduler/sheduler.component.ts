import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';

@Component({
  selector: 'app-sheduler',
  templateUrl: './sheduler.component.html',
  styleUrls: ['./sheduler.component.css']
})
export class ShedulerComponent implements OnInit {

  @Input() requests;

  events: any = [];
  options: any = [];

  constructor(private adminService: AdminService) {

  }

  ngOnInit() {

      this.events = this.requests;

      console.log("sheduler",this.requests);

      this.options = {
        weekends: true,
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        }
      };

  }

}
