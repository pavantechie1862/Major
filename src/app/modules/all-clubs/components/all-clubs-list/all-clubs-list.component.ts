import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { club } from 'src/app/shared/models/all-clubs.model';
import { AllClubsService } from '../../services/all-clubs.service';
import { Filter } from 'src/app/shared/models/filter.model';

@Component({
  selector: 'app-all-clubs-list',
  templateUrl: './all-clubs-list.component.html',
  styles: [],
})
export class AllClubsListComponent implements OnInit {
  modalReference!: BsModalRef;
  clubs: club[] = [];
  matchedClubs: club[] = [];
  clubListSearch: string = '';
  filters: Filter[] = [];
  defaultFilters: Filter[] = [];
  constructor(
    public modalService: BsModalService,
    public clubService: AllClubsService
  ) {}

  ngOnInit(): void {
    this.clubService.getAllClubs().subscribe((data) => {
      this.clubs = data;
      this.matchedClubs = this.clubs;
      console.log(this.clubs);
      this.filters = this.clubService.getFilters();
      this.defaultFilters = [...this.filters];
    });
  }

  openTemplateModal(modalTemplate: TemplateRef<any>) {
    this.modalReference = this.modalService.show(modalTemplate, {
      class: 'small-modal w-700',
    });
  }

  exitClub(club: club) {
    club.isClubMember = false;
    club.clubParticipantsCount--;
    this.clubService.updateClubDetails(club.clubId, club).subscribe();
  }

  publicJoinClub(club: club) {
    club.isClubMember = true;
    club.clubParticipantsCount++;
    this.clubService.updateClubDetails(club.clubId, club).subscribe();
  }

  cancelRequest(club: club) {
    club.isRequested = false;
    this.clubService.updateClubDetails(club.clubId, club).subscribe();
  }

  privateJoinClub(club: club) {
    club.isRequested = true;
    this.clubService.updateClubDetails(club.clubId, club).subscribe();
  }

  getType(type: number, i: number) {
    this.matchedClubs = this.clubs.filter((item) => item.clubType == i + 1);
    this.filters[type].name = this.filters[type].filters[i];
  }

  resetSearch() {
    this.clubListSearch = '';
    this.matchedClubs = this.clubs;
    this.filters = this.filters.map((user, i) => {
      return { ...user, name: this.clubService.filters[i].name };
    });
  }
}
