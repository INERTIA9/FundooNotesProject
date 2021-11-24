import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;
  submitted = false;
  snackbar: any;
  hide: boolean = true;
  nameControl = new FormControl('');

  constructor(private formBuilder: FormBuilder, private userService: UserService,private router: Router) {
    this.signupform = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('[A-Za-z]*')]],
      lastName: ['', [Validators.required,Validators.pattern('[A-Za-z0-9]*')]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm: ['', [Validators.required, Validators.minLength(6)]],
      service: ['advance']

    });
    
  }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.signupform.value);
    if (this.signupform.valid) {
      let reqData = {
        service: this.signupform.value.service,
        firstName: this.signupform.value.firstName,
        lastName: this.signupform.value.lastName,
        email: this.signupform.value.email,
        password: this.signupform.value.password
      }
      // this.matsnackbar.open('Registration succesfull', '', { duration: 1500 });
      console.log("valid");
      this.userService.registration(reqData).subscribe((response: any) => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    }
    else {
      console.log("invalid");
      // this.matsnackbar.open('Registration failed', '', { duration: 1500 });
    }
  }

showPassword(){
    this.hide= !this.hide;
  }
  onsignin(){
    this.router.navigateByUrl('/signin')
  }
}

