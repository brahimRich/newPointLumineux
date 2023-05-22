import { Component , OnInit, ChangeDetectorRef} from '@angular/core';
import { InterventionService,Intervention } from '../intervention';
import { SessionStorageService } from 'ngx-webstorage';
<<<<<<< HEAD
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from "./../../environments/environment";
import { GetPermetionService } from '../get-permetion.service';
=======
>>>>>>> origin/main

@Component({
  selector: 'app-home-tech',
  templateUrl: './home-tech.component.html',
  styleUrls: ['./home-tech.component.css']
})
<<<<<<< HEAD


=======
>>>>>>> origin/main
export class HomeTechComponent implements OnInit {

  
  ListeIntervention : any[]=[];
  Tech :any ;
  searchText ='';
  Intervention: Intervention | undefined;
<<<<<<< HEAD
  idInterventionComplete : number =0 ;
  messageSup : String= "L'intervention est bien termener";

  constructor(private GetPermetionService: GetPermetionService,private InterventionService: InterventionService,private sessionStorage: SessionStorageService,private cdRef: ChangeDetectorRef) { }


  
  InterventionReponce : Intervention = {
    id_Intervention : 0,
    type : '',
    admin : {
      id:0,
      nom:"",
      prenom: "",
      cin:"",
      email : "",
      password : ""
    },
    intitule_Intervention : '',
    dure_Intervention : 0,
    etat_intervention : 0,
    date_intervention : new Date(2023, 3, 30),
    techniciennes : [
      
    ],
    pointLumineuxList : [
      
    ]
  }
  
  duerInter :String ="";
    etatInter : String ="";

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }

  ngOnInit(): void {
    /*const storedRolesJSON = localStorage.getItem('userRoles');
  if (storedRolesJSON !== null) {
    const storedRoles = JSON.parse(storedRolesJSON);
    console.log("55555 "+storedRoles[0].name);
  }*/
  this.GetPermetionService.getPerm();
    this.requestPermission()
    this.Tech   = this.sessionStorage.retrieve('userTech');
    console.log("iddddddd ********************************************"+this.Tech.id)
    this.InterventionService.getAllInterventions(this.Tech.id).subscribe(
      data => {
        this.ListeIntervention = data;
        console.log("data "+data[0].date_intervention)
=======

  constructor(private InterventionService: InterventionService,private sessionStorage: SessionStorageService,private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.Tech   = this.sessionStorage.retrieve('userTech');
    console.log()
    this.InterventionService.getAllInterventions(this.Tech.id).subscribe(
      data => {
        this.ListeIntervention = data;
        console.log(data[0].date_intervention)
>>>>>>> origin/main
      }, 
      error => {
        console.log(error);
      }
    );
    }
<<<<<<< HEAD

    ngAfterViewInit() {
      this.cdRef.detectChanges();
    }
    
=======
    ngAfterViewInit() {
      this.cdRef.detectChanges();
    }
>>>>>>> origin/main
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
<<<<<<< HEAD

    showPopup = false;

    closePopup() {
      this.showPopup = false;
    }

    openPopupp(id : number,duerInter :String ,etatInter : String) {
      this.idInterventionComplete=id;
      this.duerInter=duerInter;
      this.etatInter=etatInter;
      this.showPopup = true;
    }
    
    validerclosePopup() {
      this.InterventionService.AddInterventionReponce(this.idInterventionComplete,this.duerInter,this.etatInter,this.messageSup);
      window.alert("l'intervention est termener");
      this.showPopup = false;
    }
}
=======
}
>>>>>>> origin/main
