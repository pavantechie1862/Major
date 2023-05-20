import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClubsComponent } from './pages/all-clubs.component';

const routes: Routes = [{ path: '', component: AllClubsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllClubsRoutingModule { }
