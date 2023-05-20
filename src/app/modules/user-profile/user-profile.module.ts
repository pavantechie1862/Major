import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { EditPersonalDetailsComponent } from './components/edit-personal-details/edit-personal-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { EditContactDetailsComponent } from './components/edit-contact-details/edit-contact-details.component';
import { ProfessionalSummaryComponent } from './components/professional-summary/professional-summary.component';
import { EditProfessionalSummaryComponent } from './components/edit-professional-summary/edit-professional-summary.component';
import { AboutUserComponent } from './pages/about-user/about-user.component';
import { UserClubsComponent } from './pages/user-clubs/user-clubs.component';
import { UserFavouritesComponent } from './pages/user-favourites/user-favourites.component';
import { UserProfileComponent } from './pages/user-profile.component';
import { UserClubListComponent } from './components/user-club-list/user-club-list.component';
import { UserFavouritesListComponent } from './components/user-favourites-list/user-favourites-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileHeaderComponent,
    PersonalDetailsComponent,
    EditPersonalDetailsComponent,
    ContactDetailsComponent,
    EditContactDetailsComponent,
    ProfessionalSummaryComponent,
    EditProfessionalSummaryComponent,
    AboutUserComponent,
    UserClubsComponent,
    UserFavouritesComponent,
    UserClubListComponent,
    UserFavouritesListComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class UserProfileModule { }
