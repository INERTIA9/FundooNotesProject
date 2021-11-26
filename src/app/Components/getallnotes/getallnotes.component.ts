import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  Notelist: any;
  note: any;
  notedata: any

  constructor(private noteservice: NoteserviceService) { }

  ngOnInit(): void {
    this.getallnotes()
  }
  getallnotes() {
    let notes = []
    this.noteservice.getallnotesservice().subscribe((result: any) => {
      console.log(result);
      this.Notelist = result.data.data
      this.Notelist.reverse()
      this.Notelist = this.Notelist.filter((notedata: any) => {
        return notedata.isDeleted === false && notedata.isArchived===false;

      })

    }, error => {
      console.log(error);

    })

  }

  receiveMessage($event: any) {
    console.log($event);
    this.getallnotes()

    // this.message = $event
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes",$event);
    this.getallnotes()
  }
}

