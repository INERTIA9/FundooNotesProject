import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
id:any
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
    return this.httpService.getSevice('notes/getNotesList', true, headers)
  }
  getreminderservice() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.getSevice('notes/getReminderNotesList', true, headers)
  }
  //to move to trash
  trashnoteservice(reqPayload: any) {
    console.log("in trashnoteservice", reqPayload);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/trashNotes', reqPayload, true, httpOptions)
  }
  //to get trash notes
  gettrashservice() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.getSevice('notes/getTrashNotesList', true, httpOptions)
  }
  //to move to archive
  archivedservice(reqPayload: any) {
    console.log("in trashnoteservice", reqPayload);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/archiveNotes', reqPayload, true, httpOptions)
  }

  //to get archive
  getarchiveservice() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.getSevice('notes/getArchiveNotesList', true, httpOptions)
  }

  //to update

  updatenoteservice(reqPayload: any) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/updateNotes', reqPayload, true, httpOptions)
  }

  //delete foreever

deleteforever(reqPayload:any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/deleteForeverNotes',reqPayload,true,httpOptions)
  }
changecolorservice(reqPayload:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/changesColorNotes',reqPayload,true,httpOptions)
  }


  addcollaborators(reqPayload:any,id:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/' +id +'/'+ 'AddcollaboratorsNotes',reqPayload,true,httpOptions)
  }
}


