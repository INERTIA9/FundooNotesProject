import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  forgotPasswordform: any;
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
  login(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.postSevice('user/login', reqData, false, headers)
  }
  encode(reqData: any) {
    const formBody = [];
    for (const property in reqData) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(reqData[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  resetPassword(reqData: any, token: any) {
    let headers = {
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': this.token
      })
    }
    return this.httpService.postSevice('user/reset-password', this.encode(reqData), true, headers)

  }

}
