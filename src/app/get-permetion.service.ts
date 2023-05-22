import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { userTech,UserTechService } from './userTech'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPermetionService {

  constructor(private sessionStorage: SessionStorageService,private UserTechService: UserTechService) { }
   user = this.sessionStorage.retrieve('userTech');

  getPerm() {
  this.getPermetion(this.user.id).subscribe(
    (per: any[]) => {
      const rolesJSON = JSON.stringify(per);
      localStorage.setItem('userRoles', rolesJSON);
      console.log("permetion ----///*****"+per[0].name)
    })
  }

  getPermetion(id: number): Observable<any[]> {
    return this.UserTechService.GetPermetion(id);
  }
}
