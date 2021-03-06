import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private flashMessages: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.authService.logout();
    this.flashMessages.show('you are logged out now',{
      cssClass: 'alert-success',timeout: 5000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
