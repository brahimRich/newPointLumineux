import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {  ArmoireService ,Armoire,typeArmoire,armoireListe } from './armoire';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

<<<<<<< HEAD
export interface Ajoteur {
  id : number ;
}

export interface Depart {
    id : number ;
    observation : string;
    ajouteurUser : Ajoteur;
=======
export interface Depart {
    id : number ;
    observation : string;
>>>>>>> origin/main
    armoire : Armoire;
    caracteristiqueList : caracteristiqueList[];
}

export interface caracteristiqueList{
    id :number
    tenstion_sortie_triphase : string;
    tenstion_sortie_mono : string;
    courantA : string;
    tenstion_extrimite_triphase : string;
    tenstion_extrimite_mono : string;
    nbr_lumineux : string;
    departType : departType;
}

export interface departType{
  id_Depart : number;
    num_depart : number;
    typedepart : string;
}


@Injectable({
    providedIn: 'root'
})

export class DepartService{
    constructor(private http: HttpClient) {}

    private getURL = 'http://localhost:4200/api/depart/getAll';
    private deleteURL= 'http://localhost:4200/api/depart/delete';
    private AddURL= 'api/depart/add';
    private UpdateURL= 'http://localhost:4200/api/depart/update';

    getAllDepart(): Observable<any> {
        return this.http.get<any>(this.getURL);
    }
    

    deleteDepart(id: number) {
      const url = `${this.deleteURL}/${id}`;
      console.log("delete "+url);
        return this.http.delete(url); 
    }


    AddDepart(Depart: Depart) {
        let DepartJson = JSON.stringify(Depart);
        console.log('ajout de j ********************'+DepartJson);
         this.http.post<Depart>(this.AddURL, DepartJson,httpOptions)
        .subscribe(
          (response) => {
            console.log('Réponse de la requête POST :', response);
          },
          (error) => {
            console.error('Erreur lors de la requête POST :', error);
          }
        );
    }   


    FindById(id: number): Observable<Depart> {
        return this.getAllDepart().pipe(
          map(Departs => Departs.find((Depart: Depart) => Depart.id === id))
        );
    }

    
    updateDepart(Depart: Depart) {
      const url = `${this.UpdateURL}/${Depart.id}`;
    
      const modifiedDepart = {...Depart};
      const caractWithoutId = modifiedDepart.caracteristiqueList.map((caract) => ({
        tenstion_sortie_triphase: caract.tenstion_sortie_triphase,
        tenstion_sortie_mono: caract.tenstion_sortie_mono,
        courantA: caract.courantA,
        tenstion_extrimite_triphase: caract.tenstion_extrimite_triphase,
        tenstion_extrimite_mono: caract.tenstion_extrimite_mono,
        nbr_lumineux: caract.nbr_lumineux,
        departType: caract.departType
      }));
      
      const modifiedDepartWithoutId = {...modifiedDepart, caracteristiqueList: caractWithoutId};
      const modifiedDepartJson = JSON.stringify(modifiedDepartWithoutId);
    
      console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm "+modifiedDepartJson);
    
      this.http.put<Depart>(url, modifiedDepartWithoutId)
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