import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
import { ActivatedRoute } from '@angular/router';
import { GettrashlistComponent } from '../gettrashlist/gettrashlist.component';
import { GetarchivedlistComponent } from '../getarchivedlist/getarchivedlist.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any
  @Output() iconstodisplay = new EventEmitter<string>();
  note: any;
  constructor(private noteservices: NoteserviceService, private activatedroute: ActivatedRoute, private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  isTrashed: boolean = false
  isArchived: boolean = false

  colorarray = ['#F28B82', '#FBBC05', '#FFF475', '#CCFF90', '#A7FFEB', '#CBF0F8', '#AECBFA', '#D7AEFB', '#FDCFE8', '#E6C9A8', '#E8EAED'];

  ngOnInit(): void {
    let com = this.activatedroute.snapshot.component;

    if (com == GettrashlistComponent) {
      this.isTrashed = true;
      console.log(this.isTrashed);
    }
    let som = this.activatedroute.snapshot.component;

    if (som == GetarchivedlistComponent) {
      this.isArchived = true;
      console.log(this.isTrashed);
    }




  }
  ondelete() {
    // console.log(this.noteCard.id);

    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.noteservices.trashnoteservice(req).subscribe((res: any) => {
      console.log("inside icon calling trash ", res.data);
      this._snackBar.open("Note Trashed", 'Undo', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      this.iconstodisplay.emit(res)
    }, error => {
      console.log(error);

    })

  }
  onarchive() {
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.noteservices.archivedservice(req).subscribe((res: any) => {
      console.log((res.data));
      this._snackBar.open("Note Archived", 'Undo', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      this.iconstodisplay.emit(res)
    }, error => {
      console.log(error);

    })
  }
  ondeleteforever() {
    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.noteservices.deleteforever(req).subscribe((res: any) => {
      console.log((res.data));
      this._snackBar.open("Note deleted", 'Undo', {
        duration: 2000,
      })
      this.iconstodisplay.emit(res)
    }, error => {
      console.log(error);

    })
  }



  setColor(color: any) {
    console.log('color', color);
    console.log(this.noteCard);

    this.noteCard.color = color;
    console.log('color', color);
    let data = {
      color: color,
      noteIdList: [this.noteCard.id],
    }
    console.log(data);
    this.noteservices.changecolorservice(data).subscribe(
      (response: any) => {

        console.log('Response of setColour', response);
        this.iconstodisplay.emit(color)
      },
      (error: any) => {
        console.log('archive Error at icons methods', error);

      }
    );

  }


  onunarchive() {
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: false,
    }
    this.noteservices.archivedservice(req).subscribe((res: any) => {
      console.log((res.data));
      this._snackBar.open("Note UnArchived", 'Undo', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      this.iconstodisplay.emit(res)
    }, error => {
      console.log(error);

    })
  }
  onRestore() {
    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.noteservices.trashnoteservice(req).subscribe((res: any) => {
      console.log((res.data));
      this._snackBar.open("Note Restored", 'Undo', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      this.iconstodisplay.emit(res)
    }, error => {
      console.log(error);

    })
  }

  openDialogcollab() {
    const dialogRef = this.dialog.open(CollaboratorsComponent, {
      width: "600px",
      data: this.noteCard


    });


    dialogRef.afterClosed().subscribe(result => {
      // this.displaytogetallnotes.emit(this.sentmsg)
      console.log(`Dialog result: ${result}`);

    });
  }
}
function color(arg0: string, color: any) {
  throw new Error('Function not implemented.');
}

