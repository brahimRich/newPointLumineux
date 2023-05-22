import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { PointLumineux } from './products';
import { techniciennes } from './techniciennes';

import { environment } from "./../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { NotificationService,Notification,NotificationReponcee } from './../app/notification/notification';
//import { Message } from '@stomp/stompjs';
import { SessionStorageService } from 'ngx-webstorage';
import { NotificationComponent } from './notification/notification.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};  

export interface uer{
  id: number;
  nom : string;
  prenom : string ;
  cin : string;
  email : string;
  password : string;
}

export interface Intervention {
    id_Intervention: number;
    type : string,
    admin: uer,
    intitule_Intervention : string;
    dure_Intervention : number;
    etat_intervention : number;
    date_intervention : Date;
    techniciennes : techniciennes[];
    pointLumineuxList : PointLumineux[];
}




@Injectable({
    providedIn: 'root'
})

export class InterventionService {
    constructor(private http: HttpClient,private sessionStorage: SessionStorageService) {}

    private getURL = 'http://localhost:4200/api/intervention/getAll';
    private deleteURL= 'http://localhost:4200/api/intervention/delete';
    private AddURL= 'http://localhost:4200/api/intervention/add';
    private UpdateURL= 'http://localhost:4200/api/intervention/update';
    private AddNotiURL= 'http://localhost:4200/api/notification/data';
    private getNotByInter= 'http://localhost:4200/api/notification/getNotiByInter';
    private addrepoceNotification= 'http://localhost:4200/api/notification/dataReponce';

    private currentToken = "eXk5pREGuloIcopRIS6kCn:APA91bEatO8yhB90DApNLP2T4IOcKPV0emCxs_c952p6iV87VKscgIkPMkse8Gl8SdQqN9I9l7y6yIz4mkV1KQVQ-leAoHIxIXDSCwbp-RbLzffAWNsdJq4_fvDR4fTJZAAiBJ1u605z";
    
    Notification : Notification ={
      topic: "Topic",
      title: "intervention sur un point lumineux",
      message: "vous averz une intervention",
      createdAt: new Date(),
      token: "",
      technicienne: {
        id : 0
      },
      intervention :{
        id_Intervention : 0,
        admin :{
          id:0,
          nom:"",
          prenom: "",
          cin:"",
          email : "",
          password : ""
        },
        type : '',
        intitule_Intervention : '',
        dure_Intervention : 0,
        etat_intervention : 0,
        date_intervention : new Date(2023, 3, 30),
        techniciennes : [
          
        ],
        pointLumineuxList : [
          
        ]
    }
  }

  userTech = this.sessionStorage.retrieve('userTech');

      Notificatione : NotificationReponcee = {
        topic: "Topic",
        title: "intervention sur un point lumineux",
        message: "",
        createdAt: new Date(),
        token: "",
        notification :{
          id :0,
          technicienne : { id :0 },
          intervention :{ admin : { id :0 } , dure_Intervention : "" ,completeur: {id : 0} , etat_intervention : ""}
        }
      }

      getAllIntervention(): Observable<any> {
        return this.http.get<any>(this.getURL);
      } 

        getAllInterventions(idTech: number): Observable<any> {
        return this.getAllIntervention().pipe(
          map(Interventions => Interventions.filter((intervention: Intervention) => intervention.techniciennes.some(tech => tech.id === idTech)))
        );
      }
  
      deleteIntervention(id: number) {
        const url = `${this.deleteURL}/${id}`;
        return this.http.delete(url); 
      }

      requestPermission(Intervention: Intervention) {
        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (currentToken) => {
             if (currentToken) {
               console.log("Hurraaa!!! we got the token.....");
               console.log(currentToken);
               this.currentToken=currentToken;
               this.Notification.intervention=Intervention;
               this.Notification.token="eXk5pREGuloIcopRIS6kCn:APA91bEVoRb4Mci5C6jv7hiHxA7toDScbZAwUJwcAHp3oB1Bra8jpEQwHSVxqNLyPuCLeFjkYAV-9KHlckbNXIk6hx4r6PCpOox5i94Et57iJAL2C6aN5IdQx9KvCXB8x-wGZDKKaP8Z";
             } else {
               console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
      }
    
       AddIntervention(Intervention: Intervention,mesaage : String) {
        this.requestPermission(Intervention);
         let InterventionJson = JSON.stringify(Intervention);
        console.log('ajout de j ********************'+InterventionJson);
         this.http.post<Intervention>(this.AddURL, InterventionJson ,httpOptions)
        .subscribe(
          (response) => {
            console.log('Réponse de la requête POST intervention:', response);
            this.Notification.intervention.date_intervention=Intervention.date_intervention;
            this.Notification.intervention.type=Intervention.type;
            this.Notification.intervention.intitule_Intervention=Intervention.intitule_Intervention;
            this.Notification.message=mesaage.toString();
            for (let i = 0; i < Intervention.pointLumineuxList.length; i++) {
              this.Notification.intervention.pointLumineuxList.push(Intervention.pointLumineuxList[i]);
              let NotificationJson = JSON.stringify(this.Notification);
              console.log('notification ******************** '+NotificationJson);
            }

            for (let i = 0; i < Intervention.techniciennes.length; i++) {
              this.Notification.technicienne.id=Intervention.techniciennes[i].id;
              this.Notification.intervention.techniciennes.push(Intervention.techniciennes[i])
              this.Notification.intervention.admin=this.sessionStorage.retrieve('userTech');
              let NotificationJson = JSON.stringify(this.Notification);
              console.log('notification ******************** '+NotificationJson);
              this.http.post<Notification>(this.AddNotiURL, NotificationJson ,httpOptions)
              .subscribe(
                (response) => {
                  console.log('Réponse de la requête POST notification :', response);
                },
                (error) => {
                  console.error('Erreur lors de la requête POST :', error);
                }
              );
            }  

            
          }
          ,
          (error) => {
            console.error('Erreur lors de la requête POST :', error);
          }
        );
   

      }
  
      
      FindById(id: number): Observable<Intervention> {  
        return this.getAllIntervention().pipe(
          map(Interventions => Interventions.find((Intervention: Intervention) => Intervention.id_Intervention === id))
        );
      }

      updateArmoire(Intervention: Intervention){
        const url = `${this.UpdateURL}/${Intervention.id_Intervention}`;
         this.http.put<Intervention>(url, Intervention)
         .subscribe(
          (response) => {
            console.log('Réponse de la requête put :', response);
          },
          (error) => {
            console.error('Erreur lors de la requête put :', error);
          }
        );
      }

      AddInterventionReponce(interid: number,dure_Intervention: String,etat_intervention: String,messageSup : String) {
        this.getNotificationByIntervention(interid).subscribe((Notification: any) => {
          let InterventionJsonn = JSON.stringify(Notification);
          console.log("data reponce avant"+InterventionJsonn);
          this.Notificatione.notification.id = Notification.id;
          this.Notificatione.notification.technicienne.id = Notification.technicienne.id;
          this.Notificatione.notification.intervention.admin.id=Notification.intervention.admin.id;
          this.Notificatione.notification.intervention.dure_Intervention=dure_Intervention;
          this.Notificatione.notification.intervention.etat_intervention=etat_intervention;
          this.Notificatione.notification.intervention.completeur.id=this.userTech.id;
          this.Notificatione.message=messageSup.toString();

          let InterventionJson = JSON.stringify(this.Notificatione);
        console.log("data reponce "+InterventionJson);
        this.http.post<Intervention>(this.addrepoceNotification, InterventionJson ,httpOptions)
        .subscribe(
          (response) => {
            console.log('Réponse de la requête POST intervention:', response); 
          }
          ,
          (error) => {
            console.error('Erreur lors de la requête POST :', error);
          }
        );
        });
        

      }
      
      getNotificationByIntervention(id: number) {
        const url = `${this.getNotByInter}/${id}`;
        return this.http.get(url);
      }
      

}





