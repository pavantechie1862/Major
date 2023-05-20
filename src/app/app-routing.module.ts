import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, 
{ path: 'connections', loadChildren: () => import('./modules/my-connections/my-connections.module').then(m=>m.MyConnectionsModule) },
{ path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'user-profile', loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule) }, 
{ path: 'clubs', loadChildren: () => import('./modules/all-clubs/all-clubs.module').then(m => m.AllClubsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
