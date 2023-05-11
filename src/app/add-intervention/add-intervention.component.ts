import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Intervention,InterventionService} from '../intervention'
import {techniciennes,techniciennesService} from '../techniciennes'

import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { PointLumineux,ProductService } from '../products';

import { SessionStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

import { HttpClient } from '@angular/common/http';
import { environment } from "./../../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from './../details-dialog/details-dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',  
  styleUrls: ['./add-intervention.component.css']
})
export class AddInterventionComponent {
  Mofifer : boolean = false;
  boutonDesactive: boolean = true;
  errorMessageMarque='';

  PointxLimineuxs: PointLumineux[] = [];

  techniciennes: techniciennes[] = [];
  
  Intervention : Intervention = {
    id_Intervention : 0,
    type : '',
    intitule_Intervention : '',
    dure_Intervention : 0,
    etat_intervention : 0,
    date_intervention : new Date(2023, 3, 30),
    techniciennes : [
      
    ],
    pointLumineuxList : [
      
    ]
  }
  
   
  
  selectedTechniciennes: any []=[];
  selectedPoints: any[] = [];

  ajouterOption() {
    this.technicienChoisi = [...this.technicienChoisi,...this.selectedTechniciennes];
    this.Intervention.techniciennes=this.technicienChoisi;
  }

  ajouterOptionPoint() {
    this.pointlimunieuxchoisi = [...this.pointlimunieuxchoisi,...this.selectedPoints];
    this.Intervention.pointLumineuxList=this.pointlimunieuxchoisi;
  }

  
  technicienChoisi: any[] = [];
  pointlimunieuxchoisi: any[] = [];




  pointlumineuxSelectionnee: PointLumineux ;



  constructor(private http: HttpClient,private InterventionService: InterventionService,private route: ActivatedRoute,private formBuilder: FormBuilder,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location,private techniciennesService :techniciennesService,private ProductService : ProductService) { 
    this.techniciennes = [];
    this.pointlumineuxSelectionnee = this.PointxLimineuxs[0];
   
  }

  ngOnInit(): void {
    this.requestPermission()
    const routeParams = this.route.snapshot.paramMap;
      const Intervention = Number(routeParams.get('Intervention'));
      if(Intervention){
        this.Mofifer=true;
        this.errorMessageMarque='';
        this.boutonDesactive = false;
      this.InterventionService.FindById(Intervention).subscribe(
        Intervention => {
          this.Intervention = Intervention;
        },
        error => {
          console.error(error);
        }  
      );
    }

 
    this.techniciennesService.getAlltechniciennes()
    .subscribe((data: techniciennes[]) => {
      this.techniciennes = data;
      //this.Intervention.techniciennes[0]=data[0];
      console.log("tech "+data[0].nom);
    });


    this.ProductService.getAllPointLumineux()
    .subscribe((data: PointLumineux[]) => {
      this.PointxLimineuxs = data;
      //this.Intervention.pointLumineuxList[0]=data[0];
      //this.pointlimunieuxchoisi=data;
      console.log("point lu "+data[0].adresse.quertier);
    });


  }


  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }

updateErrorMessagee() {
  if (this.errorMessageMarque=='') {
    console.log('erreur vide')
    this.boutonDesactive = false; 
  } else {
    this.boutonDesactive = true; 
  }

}

updateDepart(){
  window.alert("modification"+this.Intervention.id_Intervention)
  this.InterventionService.updateArmoire(this.Intervention);
}


submitIntervention() {
  

  this.InterventionService.AddIntervention(this.Intervention);

   /*   const currentUrl = this.router.url;
      if(currentUrl=='/Intervention' || currentUrl==''){
        this.router.navigateByUrl('/Home', { skipLocationChange: false }).then(() => {
          window.location.reload(); 
        });

}*/
}




}

  