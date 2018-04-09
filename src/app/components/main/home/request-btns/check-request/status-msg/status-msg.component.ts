import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../../../../services/request.service';
import {AuthService} from '../../../../../../services/auth.service';

@Component({
  selector: 'app-status-msg',
  templateUrl: './status-msg.component.html',
  styleUrls: ['./status-msg.component.css']
})
export class StatusMsgComponent implements OnInit {
  status;
  refNo: number;
  password: string;
  isLogged = false;
  constructor(private requestService: RequestService, private authService: AuthService) {
    this.status = 10;
  }

  ngOnInit() {
    this.status = 10;
  }
  login(body) {
    this.authService.login(body)
      .subscribe( response => {
        if (response['isLogged']) {
          this.isLogged = true;
          localStorage.setItem('token', response['token']);
          this.status = this.authService.get_status();
        }
      });
  }
  logout() {
    this.authService.logout();
  }
  /*getStatus() {
    this.requestService.get_status(this.refNo, this.password)
      .subscribe(response => {
        if (response['msg'][0]) {
          this.status = response['msg'][0]['status'];
        } else {
          this.status = 5;
        }
      });
  }*/
}
