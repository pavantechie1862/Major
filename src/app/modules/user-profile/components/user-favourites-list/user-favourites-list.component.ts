import { Component } from '@angular/core';

export interface UserDetails{
  profileImage: string;
  userName: string;
  userCaption: string;
  mutualConnectionCount: number;
  userEmail: string;
  userMobile: string;
}

@Component({
  selector: 'app-user-favourites-list',
  templateUrl: './user-favourites-list.component.html',
  styles: [
  ]
})
export class UserFavouritesListComponent {
  favouriteUserSearch: string="";
  favourites: UserDetails[] = [
    {
      profileImage: "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
      userName: "Rakesh Mishra",
      userCaption: "I Love Myself 💛",
      mutualConnectionCount: 56,
      userEmail: "prakash.y@blizzard.com",
      userMobile: "4569001231"
    },
    {
      profileImage: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg",
      userName: "Jaya Chandra Chilaka",
      userCaption: "Be you, Believe in you 😊",
      mutualConnectionCount: 56,
      userEmail: "prakash.y@blizzard.com",
      userMobile: "4569001231"
    },
    {
      profileImage: "https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp-1024x1024.jpg?is-pending-load=1",
      userName: "Yash Jayaraj",
      userCaption: "I'm designed ☀️",
      mutualConnectionCount: 56,
      userEmail: "prakash.y@blizzard.com",
      userMobile: "4569001231"
    },
    {
      profileImage: "https://cdn4.sharechat.com/img_467575_1b65aca1_1667174465032_sc.jpg",
      userName: "Anamika Juliot",
      userCaption: "Power of Sales 🚀",
      mutualConnectionCount: 56,
      userEmail: "prakash.y@blizzard.com",
      userMobile: "4569001231"
    },
    {
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdTSkCO3sqHgVg2ebaTLykYL0dM6F-rFfTg&usqp=CAU",
      userName: "Rakul Preeth Singh",
      userCaption: "Busy 💻",
      mutualConnectionCount: 56,
      userEmail: "prakash.y@blizzard.com",
      userMobile: "4569001231"
    },
    {
      profileImage: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
      userName: "Pravallika M",
      userCaption: "Amazing talent never come up...💪",
      mutualConnectionCount: 56,
      userEmail: "prakash.y@blizzard.com",
      userMobile: "4569001231"
    }
  ]
}
