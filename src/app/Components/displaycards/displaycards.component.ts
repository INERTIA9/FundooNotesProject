import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetallnotesComponent } from '../getallnotes/getallnotes.component';
import { IconsComponent } from '../icons/icons.component';


@Component({
  selector: 'app-displaycards',
  templateUrl: './displaycards.component.html',
  styleUrls: ['./displaycards.component.scss']
})
export class DisplaycardsComponent implements OnInit {
  expanddiv: boolean = false
  note: any;
  constructor(public dialog: MatDialog) { }

  @Input() notesarray: any
  ngOnInit(): void {

  }
  method() {
    this.expanddiv = true;
  }
  openDialog(note: any) {
    const dialogRef = this.dialog.open(GetallnotesComponent,{
      width:"600px",
      height:"300px",
      
     
    } );
    dialogRef.componentInstance.note= note.title;
    dialogRef.componentInstance.note = note.description;
     
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}




