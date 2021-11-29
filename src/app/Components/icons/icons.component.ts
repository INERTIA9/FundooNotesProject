import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
import { ActivatedRoute } from '@angular/router';
import { GettrashlistComponent } from '../gettrashlist/gettrashlist.component';
import { GetarchivedlistComponent } from '../getarchivedlist/getarchivedlist.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any
  @Output() iconstodisplay = new EventEmitter<string>();
  constructor(private noteservices: NoteserviceService, private activatedroute: ActivatedRoute, private _snackBar: MatSnackBar) { }
  isTrashed: boolean = false
  isArchived: boolean = false
  colorarray = ['#F44336', 'red', 'white', 'blue', 'black'];

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



changecolor(data: any) {
    let req = {
      noteIdlist: [this.noteCard.id],
      color: data
    }
    this.noteservices.changecolorservice(req).subscribe((res: any) => {
      console.log("in icon");
      console.log(res.data);
      this.iconstodisplay.emit(res)

    })
  }
  onunarchive() {
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: false,
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
}
