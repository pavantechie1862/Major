import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-connections',
  templateUrl: './my-connections.component.html',
  styleUrls: [],
})
export class ConnectionsComponent {
  ifConnections: boolean = false;
  modalRef!: BsModalRef;

  connectionList: User[] = [
    {
      userId: 'user1',
      name: 'Pavan',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
    {
      userId: 'user2',
      name: 'Pravalika',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
    {
      userId: 'user3',
      name: 'Sreeja',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
    {
      userId: 'user4',
      name: 'Abigna',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
    {
      userId: 'user5',
      name: 'Aishwarya',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
    {
      userId: 'user6',
      name: 'Vamshi',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
    {
      userId: 'user7',
      name: 'Guna Shekar',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
    {
      userId: 'user8',
      name: 'Manoj',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
    {
      userId: 'user9',
      name: 'Rakesh',
      imgUrl: 'assets/apple.png',
      mutualClubs: 20,
      mutualConnections: 32,
    },
  ];

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'small-modal w-400',
    });
  }

  textToThisUser(user: User) {
    console.log(user);
    //make an api here
  }
}
