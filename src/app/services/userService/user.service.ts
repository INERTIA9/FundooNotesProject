import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

  registration(reqPayload: any) {
    console.log(reqPayload);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token
      })

    }




   return this.httpService.postSevice('user/userSignUp', reqPayload, false, headers)
  }
}
