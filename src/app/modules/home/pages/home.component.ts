import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { navItem } from 'src/app/shared/models/navItem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  constructor(private route:Router)
  {

  }

  ngOnInit(): void {
  }

  topNavItems:navItem[]=[
    {title:"My Clubs",slug:"my-clubs"},
    {title:"My Threads",slug:"my-threads"}

  ];

}
