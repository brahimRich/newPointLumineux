import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar-tech',
  templateUrl: './top-bar-tech.component.html',
  styleUrls: ['./top-bar-tech.component.css']
})
export class TopBarTechComponent {

  storedRoles :any[]=[];
  ngOnInit(): void {
    const storedRolesJSON = localStorage.getItem('userRoles');
    if (storedRolesJSON !== null) {
      console.log("rrrrrrrrrrr "+storedRolesJSON)
      this.storedRoles = JSON.parse(storedRolesJSON);
      console.log("rrrrrrrrrrr "+this.storedRoles[0])
    }
  }

  RechechestoredRoles(page : String){
    for(let i = 0; i < this.storedRoles.length; i++){
        if(this.storedRoles[i].name==page)return true;
    }
    return false;
  }
  
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
