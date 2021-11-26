import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})

export class UpdatenotesComponent implements OnInit {
  note: any;
  title: any
  description: any
  id: any
  constructor(private noteservice: NoteserviceService,
    public dialogRef: MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    this.title = data.title
    this.description = data.description
    this.id = data.id
  }


  ngOnInit(): void {

  }
  onupdate() {
    this.id
    let data = {
      title: this.title,
      description: this.description,
      noteId: this.id
    }
   
    this.noteservice.updatenoteservice(data).subscribe((result:any) => {
      console.log(result);
      this.title = ''
      this.description = ''
      this.dialogRef.close(result)
    })
  }

}
