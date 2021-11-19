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
  resetPasswordform!: FormGroup;
  submitted = false;
  token: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordform = this.formBuilder.group({
      Confirm: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.token = this.activatedRoute.snapshot.paramMap.get('token');
  }

  onSubmit() {
    console.log(this.resetPasswordform.value);
    if (this.resetPasswordform.valid) {
      let reqData = {
        newPassword: this.resetPasswordform.value.password,
      }
      console.log("data is in forgot password", reqData);
      console.log(this.token);
      
      this.userService.resetPasswordForm(reqData,this.token).subscribe((response: any) =>{console.log(response)}
      )

    } else {
      console.log("enter valid data");

    }

  }

}