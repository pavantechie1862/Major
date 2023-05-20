import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { InactiveClubsComponent } from './pages/inactive-clubs/inactive-clubs.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { InactiveClubListComponent } from './components/inactive-club-list/inactive-club-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminComponent } from './pages/admin.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { AgGridModule } from 'ag-grid-angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InactiveClubsActionComponent } from './components/inactive-clubs-action/inactive-clubs-action.component';
import { UsersListActionComponent } from './components/users-list-action/users-list-action.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AdminComponent,
    AllUsersComponent,
    InactiveClubsComponent,
    UserListComponent,
    InactiveClubListComponent,
    AddUserComponent,
    InactiveClubsActionComponent,
    UsersListActionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModalModule.forRoot(),
    AgGridModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent,
    AllUsersComponent,
    InactiveClubsComponent,
    UserListComponent,
    InactiveClubListComponent,
    AddUserComponent
  ]
})
export class AdminModule { }
