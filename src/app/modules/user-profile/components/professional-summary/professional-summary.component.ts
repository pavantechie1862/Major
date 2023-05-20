import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-summary',
  templateUrl: './professional-summary.component.html',
  styles: [
  ]
})
export class ProfessionalSummaryComponent {
  professionalSummary: string = "I am super duper bright star and I do my best to keep customers excited about keka"
  displayContactDetails: boolean = true;


  changeVisibility(){
    if(this.displayContactDetails){
      this.displayContactDetails = !this.displayContactDetails
    }
    console.log(this.displayContactDetails);
  }
}
