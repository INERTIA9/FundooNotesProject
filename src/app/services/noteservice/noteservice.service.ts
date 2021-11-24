import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  token: any
  forgotPasswordform: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

createnoteservice(reqPayload: any) {

    console.log(reqPayload);

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/addNotes', reqPayload, true, headers)
  }

  getallnotesservice() {


    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.getSevice('notes/getNotesList',true,headers)
  }
  getreminderservice() {


    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.getSevice('notes/getReminderNotesList',true,headers)
  }

  
}