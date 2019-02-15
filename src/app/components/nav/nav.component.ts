import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarOpen = false;
  isAdmin = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    if(localStorage.getItem('isAdmin').toLowerCase() === 'true') {
      this.isAdmin = true;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


}
