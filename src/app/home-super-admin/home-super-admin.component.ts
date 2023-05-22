import { Component } from '@angular/core';
import {SuperAdminService} from './superAdmin';
import { Location } from '@angular/common';
import { GetPermetionService } from '../get-permetion.service';

@Component({
  selector: 'app-home-super-admin',
  templateUrl: './home-super-admin.component.html',
  styleUrls: ['./home-super-admin.component.css']
})
export class HomeSuperAdminComponent {

  Roles : any []=[];
  Users : any []=[];

  constructor(private GetPermetionService: GetPermetionService,private SuperAdminService: SuperAdminService,private location: Location) {}

  ngOnInit(){
    this.GetPermetionService.getPerm();
    this.SuperAdminService.getAllRoles().subscribe(
      (roles: any[]) => {
        this.Roles = roles;
      },
      (error) => {
        console.error(error);
      }
    );

    this.SuperAdminService.getAllUser().subscribe(
      (Users: any[]) => {
        this.Users = Users;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  reloadPage(url: string): void {
 
  }

  AjouterRoler(u:any,r:any){
      this.SuperAdminService.AddRole(u.id,r.id);
      location.reload();

  }

  SupprimerRoles(u:any,r:any){
    this.SuperAdminService.deleteRole(u.id,r.id);
    this.reloadPage("/AddDepart");
    location.reload();
  }

  hasRole(user: any, roleId: any): boolean {
    if (user.roleList) {
      return user.roleList.some((userRole: any) => userRole.id === roleId.id);
    }
    return false;
  }
  
  
}
