import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar-tech',
  templateUrl: './top-bar-tech.component.html',
  styleUrls: ['./top-bar-tech.component.css']
})
export class TopBarTechComponent {





  
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

}
