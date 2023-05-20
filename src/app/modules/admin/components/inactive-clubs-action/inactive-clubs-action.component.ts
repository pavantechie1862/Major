import { Component, TemplateRef } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-inactive-clubs-action',
  templateUrl: './inactive-clubs-action.component.html',
  styles: [
  ]
})
export class InactiveClubsActionComponent {

  modalReference!: BsModalRef;

  constructor(public modalService: BsModalService){}

  agInit(params: ICellRendererParams): void {

  }
  refresh(params: ICellRendererParams) {
    return false;
  }

  openReactivateClub(modalTemplate: TemplateRef<any>){
    this.modalReference = this.modalService.show(modalTemplate, {class: 'small-modal w-700'});
  }
}
