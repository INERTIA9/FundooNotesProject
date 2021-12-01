import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onSubmit() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password

      }

      this.userService.login(reqData).subscribe((result: any) => {
        console.log(result);
        localStorage.setItem('token',result.id);
        localStorage.setItem('firstName',result.firstName);
        localStorage.setItem('lastName',result.lastName);
        localStorage.setItem('email',result.email);

        this._snackBar.open("login succesfull" ,'',{
          duration:2000,
        })
        this.router.navigateByUrl('/dashboard/notes')

      }, error => {
        console.log(error);
        this._snackBar.open("Insert Valid Data",'',{
          duration:2000,
        })

      })
    } else {
      console.log("invalid");

    }

  }
  onforgetemail() {
    this.router.navigateByUrl('/forgetemail')
  }
}
