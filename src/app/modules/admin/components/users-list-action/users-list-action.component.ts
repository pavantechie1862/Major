import { Component, TemplateRef } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users-list-action',
  templateUrl: './users-list-action.component.html',
  styles: [
  ]
})
export class UsersListActionComponent {
params:any;
name?:string;
  modalReference!: BsModalRef;

  constructor(public modalService: BsModalService){}

  userActive: boolean = true;
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
  refresh(params: ICellRendererParams) {
    return false;
  }
  
  openTemplateModal(modalTemplate: TemplateRef<any>){
    this.modalReference = this.modalService.show(modalTemplate, {class: 'small-modal w-700'});
    this.name = this.params.data.userName;
  }

}
