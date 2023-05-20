import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent {
  displayContactDetails: boolean = true;
  contactDetails = {
    workPhone: '9654300990',
    email: 'rajesh.ram@xyz.com',
    addressLine1: 'D.no: 2/4/123, F.no-201, 3rd floor',
    addressLine2: 'Viswani intellectual homes, Fayaz Nagar, Kavuri Hills',
    addressLine3: 'Hyderabad, 500031'
  }

  changeVisibility(){
    if(this.displayContactDetails){
      this.displayContactDetails = !this.displayContactDetails
    }
    console.log(this.displayContactDetails);
  }
}
