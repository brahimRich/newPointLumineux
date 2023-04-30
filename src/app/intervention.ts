import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { PointLumineux } from './products';


export interface Intervention {
    id_Intervention: number;
    type : string,
    intitule_Intervention : string;
    dure_Intervention : number;
    etat_intervention : number;
    date_intervention : Date;
    techniciennes : techniciennes[];
    PointLumineux : PointLumineux[];
    interventionList : null;
}

export interface techniciennes{
    id : number;
    nom : string;
    prenom : string;
    cin : string;
}

@Injectable({
    providedIn: 'root'
})

export class InterventionService {
    constructor(private http: HttpClient) {}

    private getURL = 'http://localhost:4200/api/Intervention/getAll';
    private deleteURL= 'http://localhost:4200/api/Intervention/delete';
    private AddURL= 'http://localhost:4200/api/Intervention/add';
    private UpdateURL= 'http://localhost:4200/api/Intervention/update';

      getAllIntervention(): Observable<any> {
        return this.http.get<any>(this.getURL);
      } 
      
      deleteIntervention(id: number) {
        const url = `${this.deleteURL}/${id}`;
        return this.http.delete(url); 
      }

    AddIntervention(Intervention: Intervention) {
        let InterventionJson = JSON.stringify(Intervention);
        console.log('ajout de j ********************'+InterventionJson);
         this.http.post<Intervention>(this.AddURL, InterventionJson )
        .subscribe(
          (response) => {
            console.log('Réponse de la requête POST :', response);
          },
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

}





