import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor() { }

  registration(name: string, email: string, pwd: string){
    return true;
  }
}
