import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
@Component({
  selector: 'app-getarchivedlist',
  templateUrl: './getarchivedlist.component.html',
  styleUrls: ['./getarchivedlist.component.scss']
})
export class GetarchivedlistComponent implements OnInit {
  Notelist: any

  constructor(private noteservice: NoteserviceService) { }

  ngOnInit(): void {
    this.getarchive();
  }

  getarchive() {
    this.noteservice.getarchiveservice().subscribe((result: any) => {
      console.log('ongetarchive', result);
      this.Notelist = result.data.data;

      this.Notelist = this.Notelist.filter((notedata: any) => {
        return notedata.isDeleted === false;

      })
    }, error => {
      console.log(error);

    })
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getarchive();
  }
}
