
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { techniciennes,techniciennesService} from '../techniciennes';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { GetPermetionService } from '../get-permetion.service';
=======
>>>>>>> origin/main

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
<<<<<<< HEAD
  selectedType: any=null;

  ListeTypes : any []=[{
    type :'Admin'
  },{
    type : 'Technicienne'
  }];
=======
>>>>>>> origin/main

  techniciennes : techniciennes = 
    {
      id: 0,
      nom : '',
      prenom : '' ,
      cin : '',
      email : '',
      password : '',
<<<<<<< HEAD
      dtype : '',
      tele :''
    }

  ngOnInit() {
    this.GetPermetionService.getPerm();
=======
    }

  ngOnInit() {
>>>>>>> origin/main
    const routeParams = this.route.snapshot.paramMap;
    const technicienne = Number(routeParams.get('technicienne'));
    if(technicienne){
      this.Mofifer=true;
      this.boutonDesactive = false;
    this.techniciennesService.FindtechniciennesById(technicienne).subscribe(
      technicienne => {
        this.techniciennes = technicienne;
<<<<<<< HEAD
        this.selectedType=technicienne.dtype;
=======
>>>>>>> origin/main
      },
      error => {
        console.error(error);
      }
    );
    }
  }
 
<<<<<<< HEAD
    constructor(private GetPermetionService: GetPermetionService,private techniciennesService: techniciennesService,private route: ActivatedRoute,private formBuilder: FormBuilder,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location) { 
=======
    constructor(private techniciennesService: techniciennesService,private route: ActivatedRoute,private formBuilder: FormBuilder,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location) { 
>>>>>>> origin/main
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

    submitProduct(){
      this.techniciennesService.Addtechniciennes(this.techniciennes);
    }

    updatePoint(){
      this.techniciennesService.updatetechniciennes(this.techniciennes);
    }


    updateErrorMessagee() {
      if (this.errorMessageMarque=='') {
        console.log('erreur vide')
        this.boutonDesactive = false; 
      } else {
        this.boutonDesactive = true; 
      }
    }
<<<<<<< HEAD

    ajouterType(){
      this.techniciennes.dtype=this.selectedType;
      this.selectedType=this.selectedType;
      console.log('le type de utiliateur '+this.selectedType)
    }
=======
>>>>>>> origin/main
}
 