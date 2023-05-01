
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { techniciennes,techniciennesService} from '../techniciennes';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-add-techniciennes',
  templateUrl: './add-techniciennes.component.html',
  styleUrls: ['./add-techniciennes.component.css']
})
export class AddTechniciennesComponent implements OnInit {
  Mofifer : boolean = false;
  boutonDesactive: boolean = true;
  errorMessageMarque='';

  techniciennes : techniciennes = 
    {
      id: 1,
      nom : 'mihi',
      prenom : 'rida' ,
      cin : 'JH5454',
      interventionList : null
  }

  ngOnInit() {
   
  }
 
    constructor(private techniciennesService: techniciennesService,private route: ActivatedRoute,private formBuilder: FormBuilder,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location) { 
    }


    loadData() {
      const techniciennes = this.sessionStorage.retrieve('techniciennes');
    }

    
    onSubmit() {
          this.sessionStorage.store('techniciennes', this.techniciennes);
          this.loadData();
          const currentUrl = this.router.url;
          if(currentUrl=='/techniciennes' || currentUrl==''){
            this.router.navigateByUrl('/Home', { skipLocationChange: false }).then(() => {
              window.location.reload(); 
            });
          }

          this.techniciennesService.Addtechniciennes(this.techniciennes);
    }


    updateErrorMessagee() {
      if (this.errorMessageMarque=='') {
        console.log('erreur vide')
        this.boutonDesactive = false; 
      } else {
        this.boutonDesactive = true; 
      }
    }
}
 