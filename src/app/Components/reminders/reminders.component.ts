import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  Notelist: any;

  constructor(private noteservice: NoteserviceService) { }

  ngOnInit(): void {
    this.getReminders
  }
  getReminders() {
    let notes = []
    this.noteservice.getreminderservice().subscribe((result: any) => {
      console.log(result);
      this.Notelist = result.data.data
      this.Notelist.reverse()


    }, error => {
      console.log(error);

    })

  }
}
