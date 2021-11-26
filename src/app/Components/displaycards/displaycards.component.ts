import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetallnotesComponent } from '../getallnotes/getallnotes.component';
import { IconsComponent } from '../icons/icons.component';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';


@Component({
  selector: 'app-displaycards',
  templateUrl: './displaycards.component.html',
  styleUrls: ['./displaycards.component.scss']
})
export class DisplaycardsComponent implements OnInit {
  expanddiv: boolean = false
  sentmsg: any
  constructor(public dialog: MatDialog) { }

  @Input() notesarray: any
  @Output() displaytogetallnotes = new EventEmitter<string>();
  ngOnInit(): void {

  }
  method() {
    this.expanddiv = true;
  }
  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: "600px",
      data: note


    });


    dialogRef.afterClosed().subscribe(result => {
      this.displaytogetallnotes.emit(this.sentmsg)
      console.log(`Dialog result: ${result}`);

    });
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay",$event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

  }
}




