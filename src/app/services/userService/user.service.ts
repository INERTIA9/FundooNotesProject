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
        // Authorization: this.token
      })

    }
    return this.httpService.postService('user/userSignUp', reqPayload, false, headers)
  }
  login(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization: this.token
      })
    }
    return this.httpService.postService('user/login', reqData, false, headers)
  }
  encode(data:any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
//change pass-function of forgetpassword component
resetPasswordForm(data: any,token:any) {
  console.log("data is in user service",data);
  let options = {
    headers: new HttpHeaders({
      'Authorization':token,
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  return this.httpService.postService('user/reset-password', this.encode(data), true, options);
}

  //to send email function of forget email
  forgetpassword(reqData: any) {

    let headers = {
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      })
    }
    return this.httpService.postService('user/reset', reqData,false, headers)
  }

serachuser(reqData:any){
      let headers = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          Authorization: this.token
        })
      }
      return this.httpService.postService('user/searchUserList',reqData,true,headers)
    }
  }

