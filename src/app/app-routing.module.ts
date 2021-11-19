import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent},
  // {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'resetpassword/:token',component:ForgetpasswordComponent},
  {path:'forgetemail',component:ForgetemailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
