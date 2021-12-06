import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplaycardsComponent } from './Components/displaycards/displaycards.component';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { GetarchivedlistComponent } from './Components/getarchivedlist/getarchivedlist.component';
import { GettrashlistComponent } from './Components/gettrashlist/gettrashlist.component';
import { IconsComponent } from './Components/icons/icons.component';
import { RemindersComponent } from './Components/reminders/reminders.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthGuard } from './services/Authorisationservices/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'resetpassword/:token', component: ForgetpasswordComponent },
  { path: 'forgetemail', component: ForgetemailComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'notes', component: GetallnotesComponent },
      { path: 'gettrash', component: GettrashlistComponent },
      {path:'getarchive',component:GetarchivedlistComponent},
      { path: 'reminders',component:RemindersComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
