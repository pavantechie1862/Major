import { Component } from '@angular/core';
import { connection } from 'src/app/shared/models/connection.model';

@Component({
  selector: 'app-my-connection-list',
  templateUrl: './my-connection-list.component.html',
  styles: [],
})
export class MyConnectionListComponent {
  searchText: string = '';

  connectionList: connection[] = [
    {
      name: 'Pavan',
      imgUrl: 'assets/apple.png',
      about: 'I love my self',
      mutualConnections: 20,
      mail: 'user1@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Uday',
      imgUrl: 'assets/apple.png',
      about: 'I love my country',
      mutualConnections: 22,
      mail: 'user2@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Harshini',
      imgUrl: 'assets/apple.png',
      about: 'keka is awsome',
      mutualConnections: 22,
      mail: 'user3@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Sreeja',
      imgUrl: 'assets/apple.png',
      about: 'nobody cares',
      mutualConnections: 22,
      mail: 'user4@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Vijay',
      imgUrl: 'assets/apple.png',
      about: 'never give up',
      mutualConnections: 78,
      mail: 'user5@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Manoj',
      imgUrl: 'assets/apple.png',
      about: 'ilove my friends',
      mutualConnections: 22,
      mail: 'user6@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Gunashekar',
      imgUrl: 'assets/apple.png',
      about: 'I love my self',
      mutualConnections: 22,
      mail: 'user7@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Vamshi',
      imgUrl: 'assets/apple.png',
      about: 'let your mother be your first god',
      mutualConnections: 22,
      mail: 'user8@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Rahul',
      imgUrl: 'assets/apple.png',
      about: 'god is with me',
      mutualConnections: 22,
      mail: 'user9@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Anil',
      imgUrl: 'assets/apple.png',
      about: 'be patient',
      mutualConnections: 22,
      mail: 'user10@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Meghana',
      imgUrl: 'assets/apple.png',
      about: 'Trust on god',
      mutualConnections: 22,
      mail: 'user11@gmail.com',
      contact: 8374554113,
    },
    {
      name: 'Aishwarya',
      imgUrl: 'assets/apple.png',
      about: 'Keka is lub',
      mutualConnections: 22,
      mail: 'user12@gmail.com',
      contact: 8374554113,
    },
  ];

  resetSearch() {
    this.searchText = '';
  }
}
