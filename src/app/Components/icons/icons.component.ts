import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
import { ActivatedRoute } from '@angular/router';
import { GettrashlistComponent } from '../gettrashlist/gettrashlist.component';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any
  @Output() iconstodisplay = new EventEmitter<string>();
  constructor(private noteservices: NoteserviceService,private activatedroute:ActivatedRoute) { }
  isTrashed:boolean=false
  ngOnInit(): void {
    let com = this.activatedroute.snapshot.component;

    if (com == GettrashlistComponent) {
      this.isTrashed = true;
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

      this.iconstodisplay.emit(res)
    })

  }
  onarchive() {
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.noteservices.archivedservice(req).subscribe((res: any) => {
      console.log((res.data));
      this.iconstodisplay.emit(res)
    })
  }


  ondeleteforever() {
    let req = {
      noteIdlist: [this.noteCard.id],
      isDeleted: true,
    }
    this.noteservices.deleteforever(req).subscribe((res: any) => {
      console.log("in icon");
      
      console.log(res.data);
      // this.iconstodisplay.emit(res)

    })
  }
}
