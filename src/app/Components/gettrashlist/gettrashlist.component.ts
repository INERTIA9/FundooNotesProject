import { Component, Input, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-gettrashlist',
  templateUrl: './gettrashlist.component.html',
  styleUrls: ['./gettrashlist.component.scss']
})
export class GettrashlistComponent implements OnInit {

  Notelist:any

  constructor(private noteservice: NoteserviceService) { }

  ngOnInit(): void {
    this.gettrash();
  }
  gettrash() {
    this.noteservice.gettrashservice().subscribe((result: any) => {
      console.log("ongettrash", result);
      this.Notelist = result.data.data
    
      
    }, error => {
      console.log(error);

    })

  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.gettrash();
  }
}

