import { Component } from '@angular/core';
import { LeftNavModel } from 'src/app/shared';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styles: [
  ]
})
export class LeftNavComponent {
  leftNavItems: LeftNavModel[] = [
    {
      icon: "ki-home",
      title: "My Home",
      slug:"home",
    },
    {
      icon: "ki-address-book",
      title: "Connections",
      slug:"connections"
    },
    {
      icon: "ki-bank",
      title: "Clubs",
      slug:"clubs"
    },
    {
      icon: "ki-user-tie",
      title: "Admin",
      slug:"admin"
    }
  ];
}
