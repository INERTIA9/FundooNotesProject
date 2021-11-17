import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl
  constructor(private httpClient: HttpClient) { }

  postSevice(url = '', reqPayload = null, token: boolean = false, headers: any = null) {
    console.log(reqPayload);
     return this.httpClient.post(this.BaseUrl + url, reqPayload, token && headers)

  }
  getSevice() {

  }
  putSevice() {

  }
  deleteSevice() {

  }
  patchSevice() {

  }
}
