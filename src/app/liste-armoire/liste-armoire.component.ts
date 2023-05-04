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
    window.alert('supprimer le produit ?'+Armoire.id);
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
    window.alert('Modifer '+Arm.id);
    this.router.navigate(['/armoire-update', Arm.id]);
  }


  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  onSearchTermChanged() {
    this.Armoirees=this.filteredArmoires();
    if(this.searchText=='') this.ngOnInit()
  }

  filteredArmoires() {
    console.log("checheee");
    return this.Armoirees.filter(Armoire =>
      Armoire.id.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
    