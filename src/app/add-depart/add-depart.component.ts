import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Depart,caracteristiqueList,departType,DepartService} from '../depart';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

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
 

  departType : departType = {
    id_Depart : 0,
    num_depart : 0,
    typedepart : '',
  };

  caracteristiqueList : caracteristiqueList = {
    id : 0,
    tenstion_sortie_triphase : '',
    tenstion_sortie_mono : '',
    courantA : '',
    tenstion_extrimite_triphase : '',
    tenstion_extrimite_mono : '',
    nbr_lumineux : '',
    derpar : '',
    departType : {
      id_Depart : 0,
      num_depart : 0,
      typedepart : '',
    }    
  };

  Depart : Depart =  {
    id: 7,
    observation: 'e',
    Armoire: {
      id: 0,
      armoireListe: [{
        id: 0,
        marque: '',
        calibre: '',
        nombre: 0,
        typeArmoire: {
          id: 0,
          nom: ''
        }
      }]
    },
    caracteristiqueList: [
      {
        id: 0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        derpar: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'R'
        }
      },
      {
        id: 0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        derpar: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'S'
        }
      },
      {
        id: 0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        derpar: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'T'
        }
      },
      {
        id: 0,
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        derpar: '',
        departType: {
          id_Depart: 0,
          num_depart: 0,
          typedepart: 'R'
        }
      },
    ]
  };


  constructor(private DepartService: DepartService,private route: ActivatedRoute,private formBuilder: FormBuilder) { 
  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const Depart = Number(routeParams.get('Depart'));
    if(this.Depart){
      this.Mofifer=true;
      this.errorMessageMarque='';
      this.boutonDesactive = false;
    this.DepartService.FindById(Depart).subscribe(
      Depart => {
        this.Depart = Depart;
      },
      error => {
        console.error(error);
      }  
    );
    }
   


    // recuperer 

    this.DepartService.FindByIdt().subscribe(data => {
      const jsonData = JSON.stringify(data); 
      this.Depart=data;
      console.log(this.Depart.caracteristiqueList[0].departType.num_depart); 
      console.log(jsonData); 
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
  
  submitProduct() {
      this.DepartService.AddDepart(this.Depart);
  }
  
    updatePoint(){
      window.alert("modification"+this.Depart.id)
      this.DepartService.updateDepart(this.Depart);
    }

}
    