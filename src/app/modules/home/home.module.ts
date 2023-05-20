import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MythreadsComponent } from './pages/my-threads/my-threads.component';
import { MyclubsComponent } from './pages/my-clubs/my-clubs.component';
import { ClubListComponent } from './components/club-list/club-list.component';
import { ClubChatComponent } from './components/club-chat/club-chat.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClubInfoComponent } from './components/club-info/club-info.component';
import { FormsModule } from '@angular/forms';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { ThreadChatComponent } from './components/thread-chat/thread-chat.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgpSortModule } from "ngp-sort-pipe";
// import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import  {  NgxEmojModule  }  from  'ngx-emoj';




@NgModule({
  declarations: [
    HomeComponent,
    MythreadsComponent,
    MyclubsComponent,
    ClubListComponent,
    ClubChatComponent,
    ClubInfoComponent,
    ThreadListComponent,
    ThreadChatComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgpSortModule,
    // NgxEmojiPickerModule,
    NgxEmojModule
    
  ]
})
export class HomeModule { }
