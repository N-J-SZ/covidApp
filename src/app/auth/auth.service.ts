import { Injectable } from '@angular/core';
import { User } from '../auth/models/user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  private _currentUser = new BehaviorSubject<User | undefined>(undefined);
  private readonly loggedInUserKey = 'loggedInUser';
 
  constructor(private router: Router) { 
    const user = localStorage.getItem(this.loggedInUserKey);
    if (user){
      this._currentUser.next(JSON.parse(user));
    }
  }

  registration(name: string, email: string, password: string){

    let usr: User = {name, email, password}
    this.storeUserAfterLogin(usr);
    this._currentUser.next(usr);
    return true;
  }

  private storeUserAfterLogin(user: User){
    return localStorage.setItem(this.loggedInUserKey, JSON.stringify(user));
  }

  private clearLocalStorage(){
    localStorage.removeItem(this.loggedInUserKey);
  }

  isLoggedIn(){
    return this._currentUser.getValue() !== undefined;
  }

  get currentUser(){
    return this._currentUser.asObservable();
  }

  logout(){
    this.clearLocalStorage();
    this._currentUser.next(undefined);
    this.router.navigateByUrl('/home');
  }

}
