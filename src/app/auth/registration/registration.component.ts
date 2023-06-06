import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  form : FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private _snackBar: MatSnackBar){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email:  new FormControl('', [Validators.required, Validators.email]),
      password1:  new FormControl('', Validators.required),
      password2:  new FormControl('', Validators.required)
    });
  }
  
  ngOnInit(): void {

  }

  registration(){
    this.isLoading = true;
    if (this.authService.registration(this.form.controls['name'].value, this.form.controls['email'].value, this.form.controls['password1'].value)){
      this.isLoading = false;
      this._snackBar.open('Sikeres regisztráció', 'Ok', {duration:3000});
     
    }
    
    /*.pipe(finalize(()=> this.isLoading = false))
    .subscribe(
      user => this._snackBar.open('Sikeres regisztráció', 'Ok', {duration:3000}),
      err => this._snackBar.open('Hiba történt a regisztráció során!', 'Ok', {duration:3000})
    );*/
  }
}
