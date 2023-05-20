import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyConnectionsRoutingModule } from './my-connections-routing.module';
import { MyConnectionListComponent } from './components/my-connection-list/my-connection-list.component';
import { ConnectionsComponent } from './pages/my-connections.component';


import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    ConnectionsComponent,
    MyConnectionListComponent,
  ],
  imports: [
    CommonModule,
    MyConnectionsRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule
  ]
})
export class MyConnectionsModule { }
