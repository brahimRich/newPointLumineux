
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { techniciennes,techniciennesService} from '../techniciennes';
import { ActivatedRoute } from '@angular/router';
import { GetPermetionService } from '../get-permetion.service';

import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-liste-tech',
  templateUrl: './liste-tech.component.html',
  styleUrls: ['./liste-tech.component.css']
})
export class ListeTechComponent {
  errorMessageMarque='';
  ListeTechn :any []=[];
  ngOnInit() {
    this.GetPermetionService.getPerm();
      this.techniciennesService.getAllUser().subscribe(
        data => {
          this.ListeTechn=data;
        }, 
        error => {
          console.log(error);
        }
      );
  }

    constructor(private GetPermetionService: GetPermetionService,private techniciennesService: techniciennesService,private route: ActivatedRoute,private formBuilder: FormBuilder,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location) { 
    }

    updateErrorMessagee() {
      if (this.errorMessageMarque=='') {
        console.log('erreur vide')
      } 
    }

    Modifiertech(id:number){
      this.router.navigate(['/technicienne-update', id]);
    }
}
