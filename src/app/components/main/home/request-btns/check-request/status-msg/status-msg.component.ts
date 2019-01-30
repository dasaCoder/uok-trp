import {Component, OnDestroy, OnInit} from '@angular/core';
import {RequestService} from '../../../../../../services/request.service';
import {AuthService} from '../../../../../../services/auth.service';

@Component({
  selector: 'app-status-msg',
  templateUrl: './status-msg.component.html',
  styleUrls: ['./status-msg.component.css']
})
export class StatusMsgComponent implements OnInit, OnDestroy {
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
    this.status = 6;

    body['refNo'] = body['refNo'].substr(4); // remove 'TRD/' part

    this.refNo = body['refNo'];

    this.authService.login(body)
      .subscribe( response => {
        //console.log(response['isLogged']);
        if (response['isLogged'] === 1) {
          this.isLogged = true;
          localStorage.setItem('token', response['token']);
          this.status = this.authService.get_status();
          // console.log(this.status);

        } else {
          this.status = 5;
        }
        console.log(response);
      });
  }

  logout() {
    this.authService.logout();
  }
  reset() {
    this.status = 100;
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

  ngOnDestroy() {
    //alert('dilusha');
  }

}
