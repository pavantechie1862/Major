import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AddClubComponent } from './components/add-club/add-club.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AddContactComponent,
    AddClubComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    AddContactComponent,
    AddClubComponent
  ]
})
export class SharedModule { }
