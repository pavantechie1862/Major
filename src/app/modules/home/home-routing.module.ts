import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { MyclubsComponent } from './pages/my-clubs/my-clubs.component';
import { MythreadsComponent } from './pages/my-threads/my-threads.component';
import { ClubChatComponent } from './components/club-chat/club-chat.component';
import { ClubInfoComponent } from './components/club-info/club-info.component';
import { ThreadChatComponent } from './components/thread-chat/thread-chat.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'my-clubs',component:MyclubsComponent,children:
    [
      {path:':id/club-detail',component:ClubChatComponent},
      {path:':id/club-info',component:ClubInfoComponent}
    ]},
    {path:'my-threads',component:MythreadsComponent,children:[
      {path:':id/chat-detail',component:ThreadChatComponent}
    ]
    }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
