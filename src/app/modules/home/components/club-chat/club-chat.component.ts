import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { clubHistory } from 'src/app/shared/models/clubHistory.model';
import { clubList } from 'src/app/shared/models/chatClub.model';
import { HomeService } from '../../services/home.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-club-chat',
  templateUrl: './club-chat.component.html',
  styles: [],
})
export class ClubChatComponent implements OnInit {
  clubid!: string;
  club!: clubHistory;
  currentUserId: string = this.homeService.currentUserId;
  modalRef!: BsModalRef;
  message: string = '';
  toggled: boolean = false;
  isFavorite: string = '';
  isMuted: String = '';
  files: any = [];

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.clubid = String(params.get('id'));
      if (this.clubid) {
        this.homeService.getClubHistory(this.clubid).subscribe((data) => {
          this.club = data;
          console.log(this.club);
          this.club.clubInformation.isFavouriteClub == true
            ? (this.isFavorite = 'Remove as Favorite')
            : (this.isFavorite = 'Mark as Favorite');
          this.club.clubInformation.isClubMuted == true
            ? (this.isMuted = 'Unmute Notifications')
            : (this.isMuted = 'Mute Notifications');
          this.files = [];
          this.message = '';
        });
      }
    });
  }

  openSmallModal(Template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(Template, { class: 'small-modal' });
  }

  uploadFiles(event: any) {
    console.log(event.target.files);
    if (this.files.length < 3) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.files.push(event.target.files[i].name);
      }
    } else {
      window.alert('cannot upload more than 3 files');
    }
  }

  deleteFile(i: number) {
    this.files.splice(i, 1);
  }

  addMessage() {
    if (this.message.trim() != '' || this.files.length != 0) {
      this.club.messages.push({
        senderId: this.currentUserId,
        recieverId: '2',
        senderName: 'Booking Club',
        senderProfilePicture: 'assets/apple.png',
        messageBody: { message: this.message, messageType: false },
        messageAttachment: this.files,
        messageTime: String(new Date()),
      });
      this.updateList();
    }
    this.message = '';
    this.files = [];
    this.homeService.updateClubHistory(this.clubid, this.club).subscribe();
  }

  updateList() {
    let club: clubList = this.homeService.clubsList.find(
      (ob) => ob.recieverId == this.clubid
    )!;
    let clubIndex = this.homeService.clubsList.findIndex(
      (ob) => ob.recieverId == this.clubid
    );
    club.lastMessage =
      this.message == '' && this.files.length != 0
        ? 'Sent a File'
        : this.message;
    club.lastMessageTime = String(new Date());
    club.lastMessageUserId = this.currentUserId;
    club.lastMessageUserName = this.club.clubInformation.clubName;
    this.homeService.clubsList[clubIndex] = club;
    this.homeService.clubs.next(this.homeService.clubsList);
    this.homeService.updateLastMessage(this.clubid, club).subscribe();
  }

  markFavorite() {
    if (this.isFavorite == 'Remove as Favorite') {
      this.isFavorite = 'Mark as Favorite';
      this.club.messages.push({
        senderId: this.currentUserId,
        recieverId: '2',
        senderName: 'Booking Club',
        senderProfilePicture: 'assets/apple.png',
        messageBody: {
          message: 'You have Removed the club from Favorites',
          messageType: true,
        },
        messageAttachment: this.files,
        messageTime: String(new Date()),
      });
    } else {
      this.isFavorite = 'Remove as Favorite';
      this.club.messages.push({
        senderId: this.currentUserId,
        recieverId: '2',
        senderName: 'Booking Club',
        senderProfilePicture: 'assets/apple.png',
        messageBody: {
          message: 'You have added the club to Favorites ',
          messageType: true,
        },
        messageAttachment: this.files,
        messageTime: String(new Date()),
      });
    }
    this.homeService.makeFavorite(this.clubid).subscribe();
    this.club.clubInformation.isFavouriteClub =
      !this.club.clubInformation.isFavouriteClub;
    this.homeService.updateClubHistory(this.clubid, this.club).subscribe();
  }

  muteClub() {
    if (this.isMuted == 'Mute Notifications') {
      this.isMuted = 'Unmute Notifications';
      this.club.messages.push({
        senderId: this.currentUserId,
        recieverId: '2',
        senderName: 'Booking Club',
        senderProfilePicture: 'assets/apple.png',
        messageBody: {
          message: 'You have Muted Notifications ',
          messageType: true,
        },
        messageAttachment: this.files,
        messageTime: String(new Date()),
      });
    } else {
      this.isMuted = 'Mute Notifications';
      this.club.messages.push({
        senderId: this.currentUserId,
        recieverId: '2',
        senderName: 'Booking Club',
        senderProfilePicture: 'assets/apple.png',
        messageBody: {
          message: 'You have Unmuted Notifications ',
          messageType: true,
        },
        messageAttachment: this.files,
        messageTime: String(new Date()),
      });
    }
    this.club.clubInformation.isClubMuted =
      !this.club.clubInformation.isClubMuted;
    this.homeService.updateClubHistory(this.clubid, this.club).subscribe();
    this.homeService
      .getClubInfo(this.clubid)
      .pipe(
        switchMap((data) => {
          data.clubDescription.isMuted = this.club.clubInformation.isClubMuted;
          return this.homeService.updateClubInfo(this.clubid, data);
        })
      )
      .subscribe();
  }

  handleEmoji(e: any) {
    console.log('entered');
    this.message += e.char;
    console.log('Emoji Name', e.name);
  }

  changeToggle() {
    if (this.toggled) this.toggled = !this.toggled;
  }
}
