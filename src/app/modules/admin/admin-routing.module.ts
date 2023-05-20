import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { InactiveClubsComponent } from './pages/inactive-clubs/inactive-clubs.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'inactive-clubs', component: InactiveClubsComponent },
      { path: 'all-users', component: AllUsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
