import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionsComponent } from './pages/my-connections.component';

const routes: Routes = [
  {path:'',component:ConnectionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyConnectionsRoutingModule { }
