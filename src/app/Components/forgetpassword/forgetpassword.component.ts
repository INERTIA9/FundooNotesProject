import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgotPasswordform!: FormGroup;
  submitted = false;
  token: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.forgotPasswordform = this.formBuilder.group({
      Confirm: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.token = this.activatedRoute.snapshot.paramMap.get('token');
  }

  onSubmit() {
    console.log(this.forgotPasswordform.value);
    if (this.forgotPasswordform.valid) {
      let reqData = {
        newPassword: this.forgotPasswordform.value.password,
      }
      console.log("data is in forgot password", reqData);
      this.userService.resetPassword(reqData,this.token).subscribe((response: any) => console.log(response)
      )

    } else {
      console.log("enter valid data");

    }

  }

}