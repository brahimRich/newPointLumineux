import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import {Depart,caracteristiqueList,departType,DepartService} from '../depart';
import { Router } from '@angular/router';
import { GetPermetionService } from '../get-permetion.service';

@Component({
  selector: 'app-liste-depart',
  templateUrl: './liste-depart.component.html',
  styleUrls: ['./liste-depart.component.css']
})
export class ListeDepartComponent {
  Mofifer : boolean = false;
  boutonDesactive: boolean = true;
  errorMessageMarque='';

   ListeDepart :any []=[];
  constructor(private GetPermetionService: GetPermetionService,private DepartService: DepartService,private sessionStorage: SessionStorageService,private router: Router) { 
  }
  ngOnInit(): void {
    this.GetPermetionService.getPerm();
    this.DepartService.getAllDepart().subscribe(
      data => {
        this.ListeDepart=data;
      }, 
      error => {
        console.log(error);
      }
    );
    }
    updateErrorMessagee() {
      if (this.errorMessageMarque=='') {
        console.log('erreur vide')
        this.boutonDesactive = false; 
      } else {
        this.boutonDesactive = true; 
      }
    
    }

    ModifierDepart(id : number){
      this.router.navigate(['/depart-update', id]);
    }
}
