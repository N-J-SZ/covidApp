import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() title: string = "";
  isLoggedIn = true;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    
  }
  
  logout(){}
}
