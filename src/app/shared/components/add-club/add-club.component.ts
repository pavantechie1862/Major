import { Component, ElementRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { clubMember } from '../../models/clubMember.model';
import { NewClub } from '../../models/newClub.mode';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styles: [
  ]
})

export class AddClubComponent {
  clubMembers:clubMember[] = [
    {
      userId:"11",
      userName:"sreeja",
      userJobTitle:"employee 1",
      userProfilePicture:""
    },
    {
      userId:"12",
      userName:"jahnavi",
      userJobTitle:"employee 2",
      userProfilePicture:""
    },
    {
      userId:"13",
      userName:"praveen",
      userJobTitle:"employee 3",
      userProfilePicture:""
    },
    {
      userId:"14",
      userName:"narendra",
      userJobTitle:"employee 4",
      userProfilePicture:""
    },
    {
      userId:"15",
      userName:"abhigna",
      userJobTitle:"employee 5",
      userProfilePicture:""
    },
    {
      userId:"16",
      userName:"rakesh",
      userJobTitle:"employee 6",
      userProfilePicture:""
    },
    {
      userId:"17",
      userName:"manoj",
      userJobTitle:"employee 7",
      userProfilePicture:""
    }
  ];
  isClubPrivate: boolean = false;
  addClubForm!:FormGroup;
  matchedClubAdmins:clubMember[]=this.clubMembers;
  matchedClubMembers:clubMember[]=this.clubMembers
  selectedClubAdmins:clubMember[]=[];
  selectedClubMembers:clubMember[]=[];

  @ViewChild("clubForm") clubForm!:ElementRef;

  constructor(public modalReference: BsModalRef, public modalService: BsModalService){ 
    this.addClubForm = new FormGroup( {
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      isPublic: new FormControl('1'),
      clubType: new FormControl('3'),
      clubAdmins: new FormControl(''),
      clubMembers: new FormControl('')
    })
  }

  toggleClubAvailability(){
    this.isClubPrivate = !this.isClubPrivate;
  }

  onClubAdminInput() {
    let searchInput=this.addClubForm.get('clubAdmins')!.value.toLowerCase();
    console.log("searchInput",searchInput);
    this.matchedClubAdmins=this.clubMembers.filter(a=>a.userName.toLowerCase().includes(searchInput));
    console.log('MatchedList',this.matchedClubAdmins);
  }

  onClubAdminClick(club:clubMember) {
    let isDuplicate= this.selectedClubAdmins.find(a=>a.userId==club.userId);
    if(!isDuplicate) {
      this.selectedClubAdmins.push(club);
    }
    this.matchedClubAdmins=this.clubMembers;
    this.addClubForm.get('clubAdmins')!.reset();
  }

  onClubMemberInput() {
    let searchInput=this.addClubForm.get('clubMembers')!.value.toLowerCase();
    console.log("searchInput",searchInput);
    this.matchedClubMembers=this.clubMembers.filter(a=>a.userName.toLowerCase().includes(searchInput));
    console.log('MatchedList',this.matchedClubMembers);
  }

  onClubMemberClick(club:clubMember) {
    
    let isDuplicate= this.selectedClubMembers.find(a=>a.userId==club.userId);
    if(!isDuplicate) {
      this.selectedClubMembers.push(club);
    }
    this.matchedClubMembers=this.clubMembers;
    this.addClubForm.get('clubMembers')!.reset();
  }

  deleteClub(i:number,selectedClubList:clubMember[]) {
    selectedClubList.splice(i,1);
  }

  onSubmit() {
    if(this.addClubForm.invalid) {
      this.clubForm.nativeElement.classList.add("was-validated");
    }
    else {
      this.modalReference.hide();
      console.log("the given data in the form is");
      let clubType:number=3;
      if(this.addClubForm.get('isPublic')?.value)
      {
        clubType=3
      }
      else {
        clubType=this.addClubForm.get('clubType')?.value;
      }
      let newClub:NewClub={
        name: this.addClubForm.get('name')?.value,
        description: this.addClubForm.get('description')?.value,
        profilePicture: '',
        clubType: clubType,
        clubAdmins:this.selectedClubAdmins,
        clubMembers:this.selectedClubMembers
      }
      console.log("The new club is",newClub)
    } 
  }
}
