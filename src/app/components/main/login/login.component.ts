import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@Input() login_type;
  public username: string;
  public password: string;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }


  login(loginform) {
   // alert('ok');
    if (this.username !== null && this.password !== null) {
      this.adminService.adminLogin(this.username, this.password)
        .subscribe(resp => {
          if (resp['status'] === 200)
          {
            localStorage.setItem('token', resp['token']);
            this.router.navigate(['/admin']);
            window.location.reload();
          } else {
            alert('username or password is incorrect');
              loginform.reset();
          }
        });
    }
  }

}
