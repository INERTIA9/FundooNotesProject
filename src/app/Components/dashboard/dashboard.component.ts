import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { style } from '@angular/animations';
import { MatButton } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/dataservice/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  value = '';
  mobileQuery: MediaQueryList;
  panelOpenState = false;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  token: any
  searchword: any


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private _snackBar: MatSnackBar, private dataservice: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onnote() {
    console.log("onnotemethod");
    this.router.navigateByUrl('/dashboard/notes')

  }
  logout() {
    localStorage.removeItem('token');
    this._snackBar.open("You have been Logged Out", '', {
      duration: 2000,
    })
    this.router.navigateByUrl('/signin');
  }

  ontrash() {
    console.log("ontrashmethod");
    this.router.navigateByUrl('/dashboard/gettrash')
  }
  onarchive() {
    console.log("onarchive");
    this.router.navigateByUrl('/dashboard/getarchive')

  }
  onreminder() {
    console.log("onreminders");
    this.router.navigateByUrl('/dashboard/reminders')

  }
  searchtitle(event: any) {
    console.log(event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.dataservice.changeData(Ddata)
  }
}