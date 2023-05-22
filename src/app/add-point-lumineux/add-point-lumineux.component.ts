import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PointLumineux ,ProductService} from '../products';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
<<<<<<< HEAD
import { GetPermetionService } from '../get-permetion.service';
=======
>>>>>>> origin/main


@Component({
  selector: 'app-add-point-lumineux',
  templateUrl: './add-point-lumineux.component.html',
  styleUrls: ['./add-point-lumineux.component.css']
})
export class AddPointLumineuxComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    Ctrl1: ['', Validators.required],
    Ctrl2: ['', Validators.required],
    Ctrl3: ['', Validators.required],
    Ctrl4: ['', Validators.required],
    Ctrl5: ['', Validators.required],
    Ctrl6: ['', Validators.required],
    Ctrl7: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    Ctrl8: ['', Validators.required],
    Ctrl9: ['', Validators.required],
    Ctrl10: ['', Validators.required],
    Ctrl11: ['', Validators.required],
    Ctrl12: ['', Validators.required],
    Ctrl13: ['', Validators.required],
    Ctrl14: ['', Validators.required],
    Ctrl15: ['', Validators.required],
  });

  
  isLinear = true;


  Mofifer : boolean = false;
  boutonDesactive: boolean = true;
  errorMessageN='';
  errorMessageLa='';
  errorMessageLo='';
  PointLumineux : PointLumineux = {
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
  };

  @Output() productAdded = new EventEmitter<PointLumineux>();

<<<<<<< HEAD
  constructor(private GetPermetionService: GetPermetionService,private _formBuilder: FormBuilder,private productService: ProductService,private route: ActivatedRoute,private formBuilder: FormBuilder) { 
=======
  constructor(private _formBuilder: FormBuilder,private productService: ProductService,private route: ActivatedRoute,private formBuilder: FormBuilder) { 
>>>>>>> origin/main
  }
 

  ngOnInit(): void {
<<<<<<< HEAD
      this.GetPermetionService.getPerm();
=======
>>>>>>> origin/main
      const routeParams = this.route.snapshot.paramMap;
      const pointLumineux = Number(routeParams.get('pointLumineux'));
      if(pointLumineux){
        this.Mofifer=true;
        this.errorMessageN='';
        this.errorMessageLa='';
        this.errorMessageLo='';
        this.boutonDesactive = false;
      this.productService.FindById(pointLumineux).subscribe(
        pointLumineux => {
          this.PointLumineux = pointLumineux;
          let pointLumineuxJson = JSON.stringify(this.PointLumineux);
          console.log("recupere "+pointLumineuxJson)

        },
        error => {
          console.error(error);
        }
      );
      }
}


updateErrorMessagee() {
  if(this.PointLumineux.type=='') this.errorMessageN='Ce champ est obligatoire';
  else this.errorMessageN='';
  if(this.PointLumineux.latitude==null || this.PointLumineux.latitude==0) this.errorMessageLa='Le champ Latitude est obligatoire';
  else this.errorMessageLa='';
  if(this.PointLumineux.longitude==null || this.PointLumineux.longitude==0) this.errorMessageLo='Le champ Longitude est obligatoire';
  else this.errorMessageLo='';
  if (this.errorMessageN=='' && this.errorMessageLa=='' && this.errorMessageLo=='') {
    console.log('eror vide')
    this.boutonDesactive = false; 
  } else {
    this.boutonDesactive = true; 
  }
}

submitProduct() {
    //this.productAdded.emit(newProduct);
    this.productService.AddPointLumineux(this.PointLumineux);
  }

  updatePoint(){
    window.alert("modification"+this.PointLumineux.type)
    this.productService.updatePointLumineux(this.PointLumineux);
  }

}