import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any
  @Output() iconstodisplay = new EventEmitter<string>();
  constructor(private noteservices: NoteserviceService) { }

  ngOnInit(): void {
    // console.log(this.noteCard.id);

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
  onarchive(){
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.noteservices.archivedservice(req).subscribe((res:any)=>{
      console.log((res.data));
      
    })
  }
}
