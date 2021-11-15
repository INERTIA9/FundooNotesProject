import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) {
    this.signup=this.formBuilder.group({
      
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      
    });
   }

  ngOnInit(): void {
  
  }
onSubmit(){
console.log(this.signup.value);
  if(this.signup.valid){
    console.log("valid")
  }
  else{
    console.log("invalid");
  }
}
  }

