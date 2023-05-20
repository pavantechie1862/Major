import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateNewUser } from 'src/app/shared';
import { UserListData } from 'src/app/shared/models/user-list-row-data';
import { Filter } from 'src/app/shared/models/filter.model';
import { InactiveClub } from 'src/app/shared/models/inactive-clubs-list';
// import { AddUserComponent } from '../components/add-user/add-user.component';
// import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  formData!: CreateNewUser;

  userDataUrl = "https://642e4ce98ca0fe3352cca6f9.mockapi.io/userData";
  rowDataUrl="https://64476bf050c25337442457cf.mockapi.io";

  userFilters:Filter[]=[
    {
      name:"User Role",
      filters:["Admin","Club Admin","Member"]
    },
    {
      name:" User Status",
      filters:["Active","In Active"]
    },
  ];

  inactiveClubsFilters:Filter[]=[
    {
      name:"Club Type",
      filters:["Public-Open","Public-Closed","Private"]
    },
    {
      name:"Created By",
      filters:["Date1","Date2"]
    },
  ];

  getFilters(isUserFilter:boolean) {
    let filterArray:Filter[] = new Array()
    if(isUserFilter){
      this.userFilters.forEach(ele => {
        filterArray.push(new Filter(ele.name,ele.filters))
      })
    }
    else {
      this.inactiveClubsFilters.forEach(ele=> {
        filterArray.push(new Filter(ele.name,ele.filters))
      })
    } 
    return filterArray;
  }

  constructor(private http: HttpClient) { }

  createNewUser(formData: CreateNewUser){
    let newUser: CreateNewUser =  new CreateNewUser();
    newUser.firstName = formData.firstName;
    newUser.middleName = formData.middleName;
    newUser.lastName = formData.lastName;
    newUser.displayName = formData.displayName;
    newUser.phone = formData.phone;
    newUser.email = formData.email;
    newUser.inviteToCorporateClub = formData.inviteToCorporateClub;
    return newUser;
  }

  addNewUser(userData: CreateNewUser){
    return this.http.post(this.userDataUrl, userData);
  }

  getInactiveClubsData() {
    return this.http.get<InactiveClub[]>(`${this.rowDataUrl}/inactiveClubs-rowData`)
  }

  getUserListRowData() {
    return this.http.get<UserListData[]>(`${this.rowDataUrl}/userList-rowData`);
  }

}
