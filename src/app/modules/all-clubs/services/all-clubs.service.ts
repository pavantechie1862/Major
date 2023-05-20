import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { club } from 'src/app/shared/models/all-clubs.model';
import { Filter } from 'src/app/shared/models/filter.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AllClubsService {

  constructor(public http:HttpClient) { };

  filters:Filter[]=[
    {
      name:"ClubType",
      filters:["Public Open","Public Closed","Private"]
    },
    {
      name:"Status",
      filters:["Active","In Active"]
    },
    {
      name:"Date Created",
      filters:["Date"]
    }
  ];

  getFilters() {
    let filterArray:Filter[] = new Array()
    this.filters.forEach(ele => {
      filterArray.push(new Filter(ele.name,ele.filters))
    })
    return filterArray;
  }


  getAllClubs() {
    return this.http.get<club[]>("https://6436ac813e4d2b4a12d8a0a2.mockapi.io/allClubs");
  }

  updateClubDetails(clubId:string,club:club) {
    return this.http.put(`https://6436ac813e4d2b4a12d8a0a2.mockapi.io/allClubs/${clubId}`,club);
  }
  
}
