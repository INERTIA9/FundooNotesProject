import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  panelOpenState = false;
  div1: boolean = true;
  div2: boolean = false;
  span1: boolean = false;
  title: any;
  description: any;
  constructor(private noteservice: NoteserviceService) { }

  ngOnInit(): void {
  }

  @Output() messageEvent = new EventEmitter<string>();

  expansiondiv() {
    this.div1 = false;
    this.span1 = true;
    this.div2 = true;
  }
  closeexpansiondiv() {
    this.div1 = true;
    this.span1 = false;
  }
  onclose() {
    this.span1 = false;
    this.div1 = true;
    this.panelOpenState = false;
    this.div2 = false;
    let data = {
      'title': this.title, 'description': this.description
    }
    this.title = ''
    this.description = ''
    this.noteservice.createnoteservice(data).subscribe((result: any) => {
      console.log(result);

      this.messageEvent.emit(result)

    }, error => {
      console.log(error);
    })
  }
}
