import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})
export class DetailsDialogComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  techs: any[]= this.data.intervention.techniciennes;

<<<<<<< HEAD
=======
  
>>>>>>> origin/main
  showPopup = false;

openPopup() {
  this.showPopup = true;
}

closePopup() {
  this.showPopup = false;
}

openPopupp() {
  this.showPopup = true;
}
<<<<<<< HEAD

=======
>>>>>>> origin/main
}
