import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArmoireService ,Armoire,typeArmoire,armoireListe} from '../armoire';

import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

 

import { Router } from '@angular/router';

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


  Armoire : Armoire = {
    id:0,
    armoireListe : [{
      id:0,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:0,
        nom : 'Sectionneur',
      },
    },
    {
      id:0,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:0,
        nom : 'Porte fusible',
      },
    },
    {
      id:0,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:0,
        nom : 'Repartiteur',
      },
    },
    {
      id:0,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:0,
        nom : 'Contacteur',
      },
    }
    ,{
      id:0,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:0,
        nom : 'Horloge',
      },
    },
    {
      id:0,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:0,
        nom : 'Disj uni C32',
      },
    },{
      id:0,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:0,
        nom : 'Bornes',
      },
    },{
      id:0,
      marque : '',
      calibre : '',
      nombre : 0,
      typeArmoire :{
        id:0,
        nom : 'Cablage',
      },
    }
  ]
  };




  constructor(private ArmoireService: ArmoireService,private route: ActivatedRoute,private formBuilder: FormBuilder,private router: Router) { 
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

        const currentUrl = this.router.url;
        if(currentUrl=='/AddArmoire' || currentUrl==''){
          this.router.navigateByUrl('/AddDepart', { skipLocationChange: false }).then(() => {
            window.location.reload(); 
          });
  }
}

  updatePoint(){
    window.alert("modification"+this.Armoire.id)
    this.ArmoireService.updateArmoire(this.Armoire);
  }

} 