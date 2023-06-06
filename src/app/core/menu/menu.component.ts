import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() title: string = "";

  isLoggedIn = this.authService.isLoggedIn();
  loggedUser: string = "";

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      
      if (user){
        this.isLoggedIn = true;
        this.loggedUser = user.name;
      }
      else
      {
        this.isLoggedIn = false;
        this.loggedUser = "";
      }
    });
  }

  logout(){
    this.loggedUser = "";
    this.authService.logout();
  }
}
