import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    LeftNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LeftNavComponent
  ]
})
export class LayoutModule { }
