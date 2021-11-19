import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgetemail',
  templateUrl: './forgetemail.component.html',
  styleUrls: ['./forgetemail.component.scss']
})
export class ForgetemailComponent implements OnInit {
  forgotPasswordform!: FormGroup
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.forgotPasswordform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      service: ['advance']
    });
  }

  ngOnInit(): void {

  }
  onSubmit() {
    this.submitted = true;
    if (this.forgotPasswordform.valid) {
      let reqData = {
        email: this.forgotPasswordform.value.email
      
      }
      console.log("valid");
      this.userService.forgetpassword(reqData).subscribe((response: any) => {
        console.log(response)
      }, (error: any) => {
        console.log(error);
      });
    }
    else {
      console.log("invalid");
    }
  }
}
