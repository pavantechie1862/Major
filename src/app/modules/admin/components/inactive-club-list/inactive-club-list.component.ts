import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit  } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { InactiveClubsActionComponent } from '../inactive-clubs-action/inactive-clubs-action.component';
import { InactiveClub } from 'src/app/shared/models/inactive-clubs-list';
import { AdminService } from '../../services';
import { Filter } from 'src/app/shared/models/filter.model';


@Component({
  selector: 'app-inactive-club-list',
  templateUrl: './inactive-club-list.component.html',
  styles: [
  ]
})
export class InactiveClubListComponent implements OnInit {
  headerHeight = 30;
  rowHeight = 70;
  rowData!:InactiveClub[];
  filters!:Filter[];
  inactiveClubSearch="";
  filteredData!:InactiveClub[];

  constructor(@Inject(LOCALE_ID) private locale: string,public adminService:AdminService) { }

  gridOptions: GridOptions = {
    columnDefs: [
      {
        headerName: 'Club Title', field: 'clubTitle',
        cellRenderer: function (params: any) {
          return params.data.clubTitle + '<br/>' + `<p class="text-secondary">` + (params.data.clubDescription) + `</p>`;
        }
      },
      {
        headerName: 'Created By', field: 'createdBy',
        cellRenderer: (params: any) => {
          let date = new Date(params.data.createdOn);
          let createdDate = formatDate(date, 'dd MMM YYYY', this.locale);
          return params.data.createdBy + '<br/>' + `<p class="text-secondary">` + (createdDate) + `</p>`;
        }
      },
      { headerName: 'Club Type', field: 'clubType',
        cellRenderer:(params:any)=> {
          if(params.data.clubType==1) {
            return `<p>Public - Open Club</p>`; 
          }
          else if(params.data.clubType==2) {
            return `<p>Public - Closed Club</p>`;
          }
          else {
            return `<p>Private Club</p>`;
          }
        }
      },
      {
        headerName: 'Deactivated By', field: 'deactivatedBy',
        cellRenderer: (params: any)=> {
          let date = new Date(params.data.deactivatedOn);
          let deactivatedDate = formatDate(date, 'dd MMM YYYY', this.locale);
          return params.data.deactivatedBy + '<br/>' + `<p class="text-secondary">` + (deactivatedDate) + `</p>`;
        }   
      },
      {
        headerName: 'Reason', field: 'reason',
        cellRenderer: function (params: any) {
          let reason = params.data.reason;
          return `<p class="text-truncate">`+ (reason) +`</p>`;
        },
      },
      { headerName: 'Actions', field: 'actions', cellRenderer: InactiveClubsActionComponent  }
    ],
    pagination:true,
    paginationPageSize:5
  }

  ngOnInit() {
    this.filters=this.adminService.getFilters(false);
  }
  
  fun() {
    this.gridOptions.api?.sizeColumnsToFit();
    this.adminService.getInactiveClubsData().subscribe(
      (data)=>{
              this.rowData=data;
              this.gridOptions.api?.setRowData(this.rowData);
      }
    )
  }

  search() {
    this.gridOptions.api?.setQuickFilter(this.inactiveClubSearch);
  }

  resetSearch() {
    this.inactiveClubSearch="";
    this.gridOptions.api?.setRowData(this.rowData);
    this.filters=this.adminService.getFilters(true);
    this.search();
  }

  getType(x:number,y:number) {
    this.filters[x].name=this.filters[x].filters[y];
      this.filteredData=this.rowData.filter((item)=> item.clubType==y+1);
      this.gridOptions.api?.setRowData(this.filteredData);
  }
}
