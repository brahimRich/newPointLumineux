import { Component } from '@angular/core';
<<<<<<< HEAD
import { SessionStorageService } from 'ngx-webstorage';
=======
>>>>>>> origin/main

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

<<<<<<< HEAD
  constructor(private sessionStorage: SessionStorageService){}

  storedRoles :any[]=[];
   user = this.sessionStorage.retrieve('userTech');

  ngOnInit(): void {
    const storedRolesJSON = localStorage.getItem('userRoles');
    if (storedRolesJSON !== null) {
      console.log("rrrrrrrrrrr "+storedRolesJSON)
      this.storedRoles = JSON.parse(storedRolesJSON);
      //console.log("rrrrrrrrrrr "+this.storedRoles[0])
    }
  }

  RechechestoredRoles(page : String){
    for(let i = 0; i < this.storedRoles.length; i++){
        if(this.storedRoles[i].name==page)return true;
    }
    return false;
  }

  GetRoleUserCourant(){
    return this.user.dtype;
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
=======
>>>>>>> origin/main
}