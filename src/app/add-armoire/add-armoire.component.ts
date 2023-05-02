import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArmoireService ,Armoire,typeArmoire,armoireListe} from '../armoire';

import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';


@Component({ 
  selector: 'app-add-armoire',
  templateUrl: './add-armoire.component.html',
  styleUrls: ['./add-armoire.component.css']
})

export class AddArmoireComponent implements OnInit {
  Mofifer : boolean = false;
  boutonDesactive: boolean = true;
  errorMessageMarque='';
 



  typeArmoire : typeArmoire = {
    id:0,
    nom : '',
  };
 

  armoireListe : armoireListe = {
    id:0,
    marque : '',
    calibre : '',
    nombre : 0,
    typeArmoire :{
      id:0,
      nom : '',
    }
  };

/*
  Armoire : Armoire = {
    id:88,
    armoireListe : [{
      id:9,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:1,
        nom : 'Sectionneur',
      },
    },
    {
      id:10,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:2,
        nom : 'Porte fusible',
      },
    },
    {
      id:3,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:3,
        nom : 'Repartiteur',
      },
    },
    {
      id:4,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:4,
        nom : 'Contacteur',
      },
    }
    ,{
      id:5,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:5,
        nom : 'Horloge',
      },
    },
    {
      id:6,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:6,
        nom : 'Disj uni C32',
      },
    },{
      id:7,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:7,
        nom : 'Bornes',
      },
    },{
      id:8,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:8,
        nom : 'Cablage',
      },
    }
  ]
  };

  */

  
  Armoire : Armoire = {
    id:88,
    armoireListe : [{
      id:9,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:1,
        nom : 'Sectionneur',
      },
    },
    {
      id:10,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:2,
        nom : 'Porte fusible',
      },
    },
    {
      id:13,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:3,
        nom : 'Repartiteur',
      },
    }
  ]
  };



  constructor(private ArmoireService: ArmoireService,private route: ActivatedRoute,private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const Armoire = Number(routeParams.get('Armoire'));
      if(Armoire){
        this.Mofifer=true;
        this.errorMessageMarque='';
        this.boutonDesactive = false;
      this.ArmoireService.FindById(Armoire).subscribe(
        Armoire => {
          this.Armoire = Armoire;
        },
        error => {
          console.error(error);
        }  
      );
      }

      /* this.ArmoireService.FindById(5).subscribe(data => {
        const jsonData = JSON.stringify(data); 
        this.Armoire=data;
        console.log(this.Armoire.id); 
        console.log(jsonData); 
    });*/

    this.Armoire.id=58;
    this.ArmoireService.AddArmoire(this.Armoire);

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
    this.ArmoireService.AddArmoire(this.Armoire);
  }

  updatePoint(){
    window.alert("modification"+this.Armoire.id)
    this.ArmoireService.updateArmoire(this.Armoire);
  }

}