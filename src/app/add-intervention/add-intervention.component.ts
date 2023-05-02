import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Intervention,techniciennes,InterventionService} from '../intervention'
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { PointLumineux } from '../products';

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
 
  techniciens: string[] = [];
  PointxLimineux: string[] = [];

  
  Intervention : Intervention = {
    id_Intervention : 0,
    type : '',
    intitule_Intervention : '',
    dure_Intervention : 0,
    etat_intervention : 0,
    date_intervention : new Date(2023, 3, 30),
    techniciennes : [
      {
        id : 0,
        nom : '',
        prenom : '',
        cin : '',
        interventionList : null,
      },
      {
        id : 0,
        nom : '',
        prenom : '',
        cin : '',
        interventionList : null,
      }
    ],
    PointLumineux : [
      {
        reference: 5,
        type : '',
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
      },
      {
        reference: 8,
        type : '',
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
      },
      {
        reference: 86,
        type : '',
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

  techniciennes : techniciennes = {
    id : 0,
    nom : '',
    prenom : '',
    cin : '',
    interventionList : null,
  }

 


  constructor(private http: HttpClient,private InterventionService: InterventionService,private route: ActivatedRoute,private formBuilder: FormBuilder,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location) { 
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

    // select nom from techniciens
    this.http.get<string[]>('srs ghid link').subscribe(data => {
      this.techniciens = data;
    });

    // select num from pointlimineux
    this.http.get<string[]>('srs ghid link').subscribe(dataa => {
      this.PointxLimineux = dataa;
    });
  }


updateErrorMessagee() {

  // if(this.Armoire.MarqueSectionneur=='') this.errorMessageMarque='Ce champ est obligatoire';
  // else this.errorMessageMarque='';


  if (this.errorMessageMarque=='') {
    console.log('erreur vide')
    this.boutonDesactive = false; 
  } else {
    this.boutonDesactive = true; 
  }

}

submitDepart() {
  this.InterventionService.AddIntervention(this.Intervention);
}

updateDepart(){
  window.alert("modification"+this.Intervention.id_Intervention)
  this.InterventionService.updateArmoire(this.Intervention);
}



submitIntervention() {
  this.InterventionService.AddIntervention(this.Intervention);

      const currentUrl = this.router.url;
      if(currentUrl=='/Intervention' || currentUrl==''){
        this.router.navigateByUrl('/Home', { skipLocationChange: false }).then(() => {
          window.location.reload(); 
        });
}
}


}

  