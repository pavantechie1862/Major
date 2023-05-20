import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllClubsRoutingModule } from './all-clubs-routing.module';
import { AllClubsComponent } from './pages/all-clubs.component';
import { AllClubsListComponent } from './components/all-clubs-list/all-clubs-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AllClubsComponent,
    AllClubsListComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    AllClubsRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    AllClubsComponent,
    AllClubsListComponent
  ]
})
export class AllClubsModule { }
