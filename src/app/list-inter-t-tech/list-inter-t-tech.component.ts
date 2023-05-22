import { Component , OnInit, ChangeDetectorRef} from '@angular/core';
import { InterventionService,Intervention } from '../intervention';
import { SessionStorageService } from 'ngx-webstorage';
<<<<<<< HEAD
import { GetPermetionService } from '../get-permetion.service';
=======
>>>>>>> origin/main

@Component({
  selector: 'app-list-inter-t-tech',
  templateUrl: './list-inter-t-tech.component.html',
  styleUrls: ['./list-inter-t-tech.component.css']
})
export class ListInterTTechComponent implements OnInit{

  ListeIntervention : any[]=[];
<<<<<<< HEAD
  ListeAllIntervention : any[]=[];

=======
>>>>>>> origin/main
  Tech :any ;
  searchText ='';
  Intervention: Intervention | undefined;

<<<<<<< HEAD
  constructor(private GetPermetionService: GetPermetionService,private InterventionService: InterventionService,private sessionStorage: SessionStorageService,private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.GetPermetionService.getPerm();
=======
  constructor(private InterventionService: InterventionService,private sessionStorage: SessionStorageService,private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
>>>>>>> origin/main
    this.Tech   = this.sessionStorage.retrieve('userTech');
    console.log()
    this.InterventionService.getAllInterventions(this.Tech.id).subscribe(
      data => {
        this.ListeIntervention = data;
<<<<<<< HEAD
=======
        console.log(data[0].date_intervention)
>>>>>>> origin/main
      }, 
      error => {
        console.log(error);
      }
    );
<<<<<<< HEAD

    this.InterventionService.getAllIntervention().subscribe(
      data => {
        this.ListeAllIntervention = data;
      }, 
      error => {
        console.log(error);
      }
    );
    
=======
>>>>>>> origin/main
    }
    ngAfterViewInit() {
      this.cdRef.detectChanges();
    }
    onSearchTermChanged() {
      this.ListeIntervention=this.filteredArmoires();
      if(this.searchText=='') this.ngOnInit()
    }
  
    filteredArmoires() {
      console.log("checheee");
      return this.ListeIntervention.filter(Intervention =>
        Intervention.intitule_Intervention.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    
}
