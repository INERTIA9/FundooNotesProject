import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signupform = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm: ['', [Validators.required, Validators.minLength(6)]],
      service:['advance']

    });
  }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.signupform.value);
    if (this.signupform.valid) {
      let reqData={
       service:this.signupform.value.service,
        firstName:this.signupform.value.firstName,
        lastName:this.signupform.value.lastName,
        email:this.signupform.value.email,
        password:this.signupform.value.password
      }
      console.log("valid");
      this.userService.registration(reqData).subscribe((response: any) => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    }
    else {
      console.log("invalid");
    }
  }
}

