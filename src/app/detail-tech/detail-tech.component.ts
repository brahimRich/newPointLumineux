
import { techniciennes,techniciennesService} from '../techniciennes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { GetPermetionService } from '../get-permetion.service';
=======
>>>>>>> origin/main

import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-detail-tech',
  templateUrl: './detail-tech.component.html',
  styleUrls: ['./detail-tech.component.css']
})
export class DetailTechComponent implements OnInit {

<<<<<<< HEAD
  constructor(private GetPermetionService: GetPermetionService,private techniciennesService:techniciennesService,private ActivatedRoute: ActivatedRoute){}
=======
  constructor(private techniciennesService:techniciennesService,private ActivatedRoute: ActivatedRoute){}
>>>>>>> origin/main

  id:any;
  itemTech : any;
  

  ngOnInit(): void {
<<<<<<< HEAD
    this.GetPermetionService.getPerm();
=======
>>>>>>> origin/main
    this.ActivatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const id = +idParam;
        this.FindtechById(id);
      } else {
        // Handle the case where the id parameter is missing or null
      }
    });
  }
  
  FindtechById(id: number): void {
    this.techniciennesService.FindtechniciennesById(id).subscribe(
      res => {
        this.itemTech = res;
      },
      error => {
        // Handle the error here, e.g. by showing an error message to the user
        console.log("error");
      }
    );
  }
  
  

  // if (idParam !== null) {
  //   this.id = +idParam;
  // } else {
  //   // handle the case where the id parameter is missing or null
  //   this.id = + Number(params.get('id')) ; // Ajout d'un signe + pour convertir en nombre
  //       this.FindtechById(this.id);
  // }

} 
  