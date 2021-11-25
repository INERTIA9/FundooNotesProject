import { Component, Input, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-gettrashlist',
  templateUrl: './gettrashlist.component.html',
  styleUrls: ['./gettrashlist.component.scss']
})
export class GettrashlistComponent implements OnInit {

  notelisttrash: any

  constructor(private noteservice: NoteserviceService) { }

  ngOnInit(): void {
    this.gettrash();
  }
  gettrash() {
    this.noteservice.gettrashservice().subscribe((result: any) => {
      console.log("ongettrash", result);
      this.notelisttrash = result.data.data
      
    }, error => {
      console.log(error);

    })

  }
}

