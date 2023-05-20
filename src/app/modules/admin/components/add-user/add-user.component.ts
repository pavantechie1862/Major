import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminService } from '../..';
  
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent {
  firstName!: string;
  middleName!: string;
  lastName!: string;
  displayName!: string;
  phone!: string;
  email!: string;
  inviteToCorporateClub!:boolean;

  addUserForm!: FormGroup;
  submitted:boolean=false;

  clubList = ["English", "Telugu", "Hindi", "Maths", "Physics" ];
  matchedClubList=this.clubList;
  selectedClubList:Array<String>=[];

  constructor(public modalReference: BsModalRef, 
              public modalService: BsModalService, 
              private formBuilder: FormBuilder, 
              private adminService: AdminService) 
  {
    this.addUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      displayName: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      inviteToCorporateClub: [false],
      clubs:['']
    });
  }

  onSubmit() {
    this.adminService.addNewUser(this.addUserForm.value).subscribe(data =>{
      console.log("This is returned by the api: \n", data);
    })
    console.log("This is printed by me: \n",this.adminService.createNewUser(this.addUserForm.value));
  }

  onClubInput() {
    let searchInput=this.addUserForm.get('clubs')!.value.toLowerCase();
    console.log("searchInput",searchInput);
    this.matchedClubList=this.clubList.filter(a=>a.toLowerCase().includes(searchInput));
    console.log('MatchedList',this.matchedClubList);
    
  }

  onClubClick(club:string) {
    if(!(this.selectedClubList.includes(club))) {
      this.selectedClubList.push(club);
    }
    this.matchedClubList=this.clubList;
    this.addUserForm.get('clubs')!.reset();
    console.log(this.selectedClubList);
  }

  deleteClub(i:number) {
    this.selectedClubList.splice(i,1);
  }

}
