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
    num_depart : 0,
    typedepart : '',
  };

  caracteristiqueList : caracteristiqueList = {
    tenstion_sortie_triphase : '',
    tenstion_sortie_mono : '',
    courantA : '',
    tenstion_extrimite_triphase : '',
    tenstion_extrimite_mono : '',
    nbr_lumineux : '',
    departType : {
      num_depart : 0,
      typedepart : '',
    }    
  };

  Depart : Depart =  {
    id: 7,
    observation: 'observation',
    Armoire: {
      id: 0,
      armoireListe: [{
        marque: '',
        calibre: '',
        nombre: 0,
        typeArmoire: {
          nom: ''
        }
      }]
    },
    caracteristiqueList: [
      {
        tenstion_sortie_triphase: 'tri1',
        tenstion_sortie_mono: 'mono1',
        courantA: 'cor1',
        tenstion_extrimite_triphase: 'ex tri1',
        tenstion_extrimite_mono: 'ext mono 1',
        nbr_lumineux: '2',
        departType: {
          num_depart: 1,
          typedepart: 'R'
        }
      },
      {
        tenstion_sortie_triphase: 'tri2',
        tenstion_sortie_mono: 'mono2',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          num_depart: 0,
          typedepart: 'S'
        }
      },
      {
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          num_depart: 0,
          typedepart: 'T'
        }
      },
      {
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          num_depart: 0,
          typedepart: 'R'
        }
      },
      {
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          num_depart: 0,
          typedepart: 'S'
        }
      },
      {
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          num_depart: 0,
          typedepart: 'T'
        }
      },
      {
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: '',
        departType: {
          num_depart: 0,
          typedepart: 'R'
        }
      },
      {
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: 'k',
        departType: {
          num_depart: 0,
          typedepart: 'S'
        }
      },
      {
        tenstion_sortie_triphase: '',
        tenstion_sortie_mono: '',
        courantA: '',
        tenstion_extrimite_triphase: '',
        tenstion_extrimite_mono: '',
        nbr_lumineux: 'jk',
        departType: {
          num_depart: 0,
          typedepart: 'T'
        }
      }
    ]
  };


  constructor(private DepartService: DepartService,private route: ActivatedRoute,private formBuilder: FormBuilder) { 
  }


  ngOnInit(): void {
   /* const routeParams = this.route.snapshot.paramMap;
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
    }/*/
   


    // recuperer 

    this.DepartService.getAllDepart().subscribe(data => {
      const jsonData = JSON.stringify(data[0]); 
      this.Depart=data[0];
      console.log(this.Depart.caracteristiqueList[0].departType.num_depart); 
      console.log(jsonData); 
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
  
  submitProduct() {
    //this.DepartService.AddDepart(this.Depart);
  }
  
    updatePoint(){
      window.alert("modification"+this.Depart.id)
      //this.DepartService.updateDepart(this.Depart);
    }

}
    