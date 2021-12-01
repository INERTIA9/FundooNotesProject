import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
import { UserService } from 'src/app/services/userService/user.service';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  email = localStorage.getItem('email');
  collabarray: any
  noteCard: any;
  values: any;
  collabemail: any
  id: any
  userId: any;
  userlist: any
  userArray:any
  collaboratorlist:any
  collaboratordata:any


  constructor(private noteservice: NoteserviceService, private userservice: UserService,
    public dialogRef: MatDialogRef<CollaboratorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
      console.log("inside collaborator",data);
      this.collaboratordata=data
  }

  ngOnInit(): void {
    this.collaboratorlist=this.collaboratordata.collaborators
  }
  addcollab() {
    let reqPayload = {
      firstName: this.userArray.firstName,
      lastName: this.userArray.lastName,
      email: this.userArray.email,
      userId: this.userArray.userId

    }

    console.log(reqPayload);

    this.noteservice.addcollaborators(reqPayload, this.data.id).subscribe((result: any) => {
      console.log(result);
      this.collabarray = result.data.data
    }, error => {
      console.log(error);

    })

  }

  onClose() {
    this.dialogRef.close();
  }



  searchCollabs(e: any) {
    let data = {
      searchWord: e.target.value

    }
    this.userservice.serachuser(data).subscribe((res: any) => {
      console.log("users list", res);
      this.userlist = res.data.details
    })
  }

  useremail(users: any) {
    this.collabemail = users.email
    this.userArray=users
    console.log(users);
    
  }
}
