import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Depart,caracteristiqueList,departType,DepartService} from '../depart';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
<<<<<<< HEAD
import { userTech,UserTechService } from '../userTech'; 
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { GetPermetionService } from '../get-permetion.service';
=======
>>>>>>> origin/main

import {  ArmoireService ,Armoire,typeArmoire,armoireListe } from '../armoire';

@Component({
  selector: 'app-add-depart',
  templateUrl: './add-depart.component.html',
  styleUrls: ['./add-depart.component.css']  
})
export class AddDepartComponent implements OnInit{
  Mofifer : boolean = false;
  boutonDesactive: boolean = true;
  errorMessageMarque='';
  selectedArmoire: any []=[];

  ListeArmoires : any []=[];

  departType : departType = {
    id_Depart: 0,
    num_depart : 0,
    typedepart : '',
  };

  caracteristiqueList : caracteristiqueList = {
    id :0,
    tenstion_sortie_triphase : '',
    tenstion_sortie_mono : '',
    courantA : '',
    tenstion_extrimite_triphase : '',
    tenstion_extrimite_mono : '',
    nbr_lumineux : '',
    departType : {
      id_Depart: 0,
      num_depart : 0,
      typedepart : '',
    }    
  };

  Depart : Depart =  {
    id: 7,
    observation: 'observation',
<<<<<<< HEAD
    ajouteurUser : {
      id : 0
    },
=======
>>>>>>> origin/main
    armoire: {
      id: 9,
      armoireListe: []
    },
    caracteristiqueList: [
      {
        id :0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '2',
        departType: {
          id_Depart: 0,
          num_depart: 1,
          typedepart: 'R'
        }
      },
      {
        id :0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'S'
        }
      },
      {
        id :0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'T'
        }
      },
      {
        id :0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'R'
        }
      },
      {
        id :0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'S'
        }
      },
      {
        id :0,

        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'T'
        }
      },
      {
        id :0,

        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'R'
        }
      },
      {
        id :0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: 'k',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'S'
        }
      },
      {
        id :0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: 'jk',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'T'
        }
      }
    ]
  };


<<<<<<< HEAD
  constructor(private GetPermetionService: GetPermetionService,private DepartService: DepartService,private UserTechService: UserTechService,private route: ActivatedRoute,private formBuilder: FormBuilder,private ArmoireService: ArmoireService,private sessionStorage: SessionStorageService) { 
  }

 

  ngOnInit(): void {
    this.GetPermetionService.getPerm();
    const userTech = this.sessionStorage.retrieve('userTech');
    this.Depart.ajouteurUser.id=userTech.id;
    this.getPermetion(userTech.id).subscribe(
      (per: any[]) => {
        const rolesJSON = JSON.stringify(per);
        localStorage.setItem('userRoles', rolesJSON);
        console.log("permetion ----///*****"+per[0].name)
      }
    )

=======
  constructor(private DepartService: DepartService,private route: ActivatedRoute,private formBuilder: FormBuilder,private ArmoireService: ArmoireService) { 
  }


  ngOnInit(): void {
>>>>>>> origin/main
    const routeParams = this.route.snapshot.paramMap;
    const Depart = Number(routeParams.get('depart'));
    if(Depart){
      this.Mofifer=true;
      this.errorMessageMarque='';
      this.boutonDesactive = false;
    this.DepartService.FindById(Depart).subscribe(
      Depart => {
        const jsonData1 = JSON.stringify(Depart); 
        console.log("avant   "+ jsonData1);
        this.Depart = Depart;
        this.selectedArmoire[0]=this.Depart.armoire;
      },
      error => {
        console.error(error);
      }  
    );
    }
   


    // recuperer 

    this.DepartService.getAllDepart().subscribe(data => {
      //const jsonData = JSON.stringify(data[0]); 
      //this.Depart=data[0];
      //console.log(this.Depart.caracteristiqueList[0].departType.num_depart); 
      //console.log(jsonData); 
  });

  this.ArmoireService.getAllArmoire().subscribe(data => {
    this.ListeArmoires=data;
});


  }

  ajouterArmoire(){
    this.Depart.armoire=this.selectedArmoire[0];
    const jsonData = JSON.stringify(this.Depart.armoire); 
    console.log("------------ "+jsonData)
  }

  updateErrorMessagee() {
    if (this.errorMessageMarque=='') {
      console.log('erreur vide')
      this.boutonDesactive = false; 
    } else {
      this.boutonDesactive = true; 
    }
  
  }
  
  submitProduct() {
    const jsonData = JSON.stringify(this.Depart); 
    console.log("ajout avant "+ jsonData);
    this.DepartService.AddDepart(this.Depart);
  }
<<<<<<< HEAD

  getPermetion(id: number): Observable<any[]> {
    return this.UserTechService.GetPermetion(id);
  }
  
=======
>>>>>>> origin/main
  
    updatePoint(){
      const jsonData = JSON.stringify(this.Depart); 
      console.log("modification  "+ jsonData);
      this.DepartService.updateDepart(this.Depart);
    }

}
    