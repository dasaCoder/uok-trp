import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarOpen = false;
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private location: Location
    ) {

  }

  ngOnInit() {
    if(this.location.path().split('/')[1] === 'admin') {
      this.isAdmin = true;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


}
