import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

import { UsersListActionComponent } from '../users-list-action/users-list-action.component';
import { Filter } from 'src/app/shared/models/filter.model';
import { AdminService } from '../../services';
import { UserListData } from 'src/app/shared/models/user-list-row-data';

import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit {
  constructor(
    @Inject(LOCALE_ID) private locale: string,
    public adminService: AdminService
  ) {}

  userListSearch: string = '';
  newRowData!: UserListData[];
  filteredData!: UserListData[];
  filters!: Filter[];

  gridOptions: GridOptions = {
    headerHeight: 30,
    rowHeight: 60,
    columnDefs: [
      {
        headerName: 'User Name',
        field: 'userName',
        cellRenderer: function (params: any) {
          return (
            `<span class="text-accent-violet">` +
            params.data.userName +
            `</span>` +
            '<br/>' +
            `<p class="text-secondary clear-margin text-small">` +
            params.data.userEmail +
            `</p>`
          );
        },
      },
      { headerName: 'Mobile Number', field: 'userMobile' },
      {
        headerName: 'Added By',
        field: 'addedBy',
        cellRenderer: (params: any) => {
          let date = new Date(params.data.addedOn);
          let addedDate = formatDate(date, 'dd MMM YYYY', this.locale);
          return (
            params.data.addedBy +
            '<br/>' +
            `<p class="text-secondary text-small">` +
            addedDate +
            `</p>`
          );
        },
      },
      {
        headerName: 'User Status',
        field: 'userStatus',
        cellRenderer: (params: any) => {
          if (params.data.userStatus == 0) {
            return `<p> Active </p>`;
          } else if (params.data.status == 1) {
            return `<p> Inactive </p>`;
          } else {
            return `<p> Blocked </p>`;
          }
        },
      },
      {
        headerName: 'User Role',
        field: 'userRole',
        cellRenderer: (params: any) => {
          if (params.data.userRole == 0) {
            return `<p> Admin </p>`;
          } else if (params.data.userRole == 1) {
            return `<p> Club Admin </p>`;
          } else {
            return `<p> Member </p>`;
          }
        },
      },
      { headerName: 'Active clubs', field: 'activeClubs' },
      {
        headerName: 'Action',
        field: 'actions',
        cellRenderer: UsersListActionComponent,
        cellRendererParams: {},
      },
    ],
    pagination: true,
    paginationPageSize: 6,
  };

  ngOnInit(): void {
    this.filters = this.adminService.getFilters(true);
  }

  fun() {
    this.gridOptions.api?.sizeColumnsToFit();
    this.adminService.getUserListRowData().subscribe((data) => {
      this.newRowData = data;
      this.gridOptions.api?.setRowData(this.newRowData);
    });
  }

  search() {
    this.gridOptions.api?.setQuickFilter(this.userListSearch);
  }

  resetSearch() {
    this.userListSearch = '';
    this.gridOptions.api?.setRowData(this.newRowData);
    this.filters = this.adminService.getFilters(true);
    this.search();
  }

  getType(x: number, y: number) {
    this.filters[x].name = this.filters[x].filters[y];
    if (x == 0) {
      this.filteredData = this.newRowData.filter((item) => item.userRole == y);
      this.gridOptions.api?.setRowData(this.filteredData);
    } else {
      this.filteredData = this.newRowData.filter(
        (item) => item.userStatus == y
      );
      this.gridOptions.api?.setRowData(this.filteredData);
    }
  }
}
