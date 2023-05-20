import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUserComponent } from './pages/about-user/about-user.component';
import { UserClubsComponent } from './pages/user-clubs/user-clubs.component';
import { UserFavouritesComponent } from './pages/user-favourites/user-favourites.component';
import { UserProfileComponent } from './pages/user-profile.component';
UserProfileComponent

const routes: Routes = [
  { path: '', component: UserProfileComponent,
    children: [
      { path: 'about-user', component: AboutUserComponent },
      { path: 'user-clubs', component: UserClubsComponent },
      { path: 'user-favourites', component: UserFavouritesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
