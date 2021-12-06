import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
import { DataService } from 'src/app/services/dataservice/data.service';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  Notelist: any;
  note: any;
  notedata: any
  subscription: any;
  message: any;
  finaldateinfo: any;


  constructor(private noteservice: NoteserviceService, private dataservice: DataService) { }

  ngOnInit(): void {
    this.getallnotes()
    this.subscription = this.dataservice.currentMessage.subscribe(message => {
      this.message = message;
      this.getallnotes();
    });
  }

  getallnotes() {
    let notes = []
    this.noteservice.getallnotesservice().subscribe((result: any) => {
      console.log(result);
      this.Notelist = result.data.data
      this.Notelist.reverse()
      this.Notelist = this.Notelist.filter((notedata: any) => {
        return notedata.isDeleted === false && notedata.isArchived === false;

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
    console.log("insidegetallnotes", $event);
    this.getallnotes()
  }
  recievedateinfofromdisplaycard($event: any){
    console.log("dateinfofromdisplaytogetallnotes",$event);
    this.finaldateinfo = $event
    
  }
}

