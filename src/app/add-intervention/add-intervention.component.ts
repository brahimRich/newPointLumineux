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

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',  
  styleUrls: ['./add-intervention.component.css']
})
export class AddInterventionComponent {
  Mofifer : boolean = false;
  boutonDesactive: boolean = true;
  errorMessageMarque='';
  selectedPoints: PointLumineux[] = [];
  selecteTechnicienes:techniciennes[] = []

  //   {
  //     id: 1,
  //     nom : 'mihi',
  //     prenom : 'rida' ,
  //     cin : 'JH5454',
  //   },{
  //     id: 2,
  //     nom : 'rich',
  //     prenom : 'brahim' ,
  //     cin : 'JH5478',
  //   },
  //   {
  //     id: 2,
  //     nom : 'rich',
  //     prenom : 'brahim' ,
  //     cin : 'JH5478',
  //   },
  //]; 

  PointxLimineuxs: PointLumineux[] = [];

  techniciennes: techniciennes[] = [
    /*{
      id: 1,
      nom: 'mihi',
      prenom: 'rida',
      cin: 'JH5454'
    },
    {
      id: 2,
      nom: 'Doe',
      prenom: 'John',
      cin: 'AB1234'
    },
    {
      id: 3,
      nom: 'Smith',
      prenom: 'Jane',
      cin: 'CD5678'
    }*/
  ];
  
  Intervention : Intervention = {
    id_Intervention : 0,
    type : '',
    intitule_Intervention : '',
    dure_Intervention : 0,
    etat_intervention : 0,
    date_intervention : new Date(2023, 3, 30),
    techniciennes : [
      /*{
        id: 1,
        nom: 'mihi',
        prenom: 'rida',
        cin: 'JH5454'
      },
      {
        id: 2,
        nom: 'Doe',
        prenom: 'John',
        cin: 'AB1234'
      },*/
      {
        id: 3,
        nom: 'Smith',
        prenom: 'Jane',
        cin: 'CD5678'
      }
    ],
    pointLumineuxList : [
      {
        reference: 3,
        type : 'type de point',
        longitude: 0,
        latitude: 0,
        allume: true,
        numero :0,
        marque : '',
        degre_prot : '',
        puissance_max : 0,
        temperature : 0,
        class_electrique : '',
        date_accussition : '',
        adresse : {
          rue: '',
          quertier: '',
        },
        coordonnees :{
          x: 0,
          y: 0,
        }
        }
    ],
    interventionList : null,
  }
  
  
  



  technicienneSelectionnee: techniciennes = {
    id: 1,
    nom: '',
    prenom: '',
    cin: '',
  };  

  pointlumineuxSelectionnee: PointLumineux ;

/*
  afficherTechnicienneSelectionnee() {
    console.log(this.technicienneSelectionnee);
  }*/


  optionsSelectionnees: techniciennes[] = [];

  ajouterOption() {
    if (this.technicienneSelectionnee !== undefined) {
      console.log("technicienne sélectionnée :", this.technicienneSelectionnee.id);
      this.Intervention.techniciennes.push(this.technicienneSelectionnee);
    } else {
      console.log("Aucune technicienne sélectionnée.");
    }
  }
  
  ajouterOptionPoint() {
    if (this.pointlumineuxSelectionnee) {
      console.log("poucher point")
      this.Intervention.pointLumineuxList.push(this.pointlumineuxSelectionnee);
    }
  }

  constructor(private http: HttpClient,private InterventionService: InterventionService,private route: ActivatedRoute,private formBuilder: FormBuilder,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location,private techniciennesService :techniciennesService,private ProductService : ProductService) { 
    this.techniciennes = [];
    this.pointlumineuxSelectionnee = this.PointxLimineuxs[0];
  }

  ngOnInit(): void {
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
      this.Intervention.techniciennes[0]=data[0];
      console.log("tech "+data[0].nom);
    });


    this.ProductService.getAllPointLumineux()
    .subscribe((data: PointLumineux[]) => {
      this.PointxLimineuxs = data;
      this.Intervention.pointLumineuxList[0]=data[0];
      console.log("point lu "+data[0].adresse.quertier);
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

submitDepart() {
  //this.InterventionService.AddIntervention(this.Intervention);
}

updateDepart(){
  window.alert("modification"+this.Intervention.id_Intervention)
  this.InterventionService.updateArmoire(this.Intervention);
}

onPointsLumineuxSelected() {
  this.Intervention.pointLumineuxList = [...this.selectedPoints];
}

onTechnicinnesSelected(){
  this.Intervention.techniciennes = [...this.selecteTechnicienes];
}

submitIntervention() {
  /*console.log("intervention "+this.Intervention.techniciennes[0].nom)
  console.log("intervention "+this.Intervention.techniciennes[1].nom)*/
  this.InterventionService.AddIntervention(this.Intervention);

   /*   const currentUrl = this.router.url;
      if(currentUrl=='/Intervention' || currentUrl==''){
        this.router.navigateByUrl('/Home', { skipLocationChange: false }).then(() => {
          window.location.reload(); 
        });
}*/
}




}

  