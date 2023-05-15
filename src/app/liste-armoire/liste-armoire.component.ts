import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { Armoire,ArmoireService } from '../armoire';

@Component({
  selector: 'app-liste-armoire',
  templateUrl: './liste-armoire.component.html',
  styleUrls: ['./liste-armoire.component.css']
})
export class ListeArmoireComponent implements OnInit {  

  Armoirees: any[] = [];
  searchText = '';

  
  constructor(private ArmoireService: ArmoireService,private router: Router,private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ArmoireService.getAllArmoire().subscribe(
      data => {
        this.Armoirees = data;
      }, 
      error => {
        console.log(error);
      }
    );
    }


    
 
    Armoire : Armoire | undefined;

  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  delete(Armoire : Armoire){
    this.Armoirees=this.filteredArmoires();
    window.alert('Voulez-vous supprimer cette armoire '+Armoire.id+' ?');
    this.ArmoireService.deleteArmoire(Armoire.id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();  
      },
      error => {
        console.log(error);
      }
    );
  }

  update(Arm : Armoire){
    window.alert('Voulez-vous update cette armoire '+Arm.armoireListe[0].marque +' de ID = '+Arm.id+' ?');
    this.router.navigate(['/armoire-update', Arm.id]);
  }


  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
 
  


onSearchTermChanged() {
  console.log("onSearchTermChanged");
  if (this.searchText === '') {
    this.ngOnInit();
  } else {
    this.Armoirees = this.filteredArmoires();
  }
}


filteredArmoires() {
console.log("filteredArmoires");
  return this.Armoirees.filter(Armoire =>
    Armoire.armoireListe[0].marque.toLowerCase().includes(this.searchText.toLowerCase())
  );

console.log("filteredArmoires sortie");
}
  
  // filteredArmoires(): Armoire[] {
  //   if (!this.Armoirees) {
  //     return [];
  //   }
  //   const filtered = this.Armoirees.filter((armoire) => {
  //     return armoire.nombre.toLowerCase().includes(this.searchText.toLowerCase());
  //   });
  //   return filtered;
  // }
}
    
