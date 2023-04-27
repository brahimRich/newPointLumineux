import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArmoireService ,Armoire} from '../armoire';

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
 

  Armoire : Armoire = {
    Id_Armoire: 0,
    MarqueSectionneur : '',
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
}


updateErrorMessagee() {
  if(this.Armoire.MarqueSectionneur=='') this.errorMessageMarque='Le champ Marque est obligatoire';
  else this.errorMessageMarque='';


  if (this.errorMessageMarque=='') {
    console.log('eror vide')
    this.boutonDesactive = false; 
  } else {
    this.boutonDesactive = true; 
  }
}

submitProduct() {
    this.ArmoireService.AddArmoire(this.Armoire);
  }

  updatePoint(){
    window.alert("modification"+this.Armoire.Id_Armoire)
    this.ArmoireService.updateArmoire(this.Armoire);
  }

}