import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {  ArmoireService ,Armoire,typeArmoire,armoireListe } from './armoire';


export interface Depart {
    id : number ;
    observation : string;
    Armoire : Armoire;
    caracteristiqueList : caracteristiqueList[];
}

export interface caracteristiqueList{
    id : number;
    tenstion_sortie_triphase : string;
    tenstion_sortie_mono : string;
    courantA : string;
    tenstion_extrimite_triphase : string;
    tenstion_extrimite_mono : string;
    nbr_lumineux : string;
    derpar : string;
    departType : departType;
}

export interface departType{
    id_Depart : number;
    num_depart : string;
    typedepart : string;
}


@Injectable({
    providedIn: 'root'
})

export class DepartService{
    constructor(private http: HttpClient) {}

    private getURL = 'http://localhost:4200/api/Depart/getAll';
    private deleteURL= 'http://localhost:4200/api/Depart/delete';
    private AddURL= 'http://localhost:4200/api/Depart/add';
    private UpdateURL= 'http://localhost:4200/api/Depart/update';

    getAllDepart(): Observable<any> {
        return this.http.get<any>(this.getURL);
    }
    
    deleteDepart(id: number) {
        const url = `${this.deleteURL}/${id}`;
        return this.http.delete(url); 
    }

    AddDepart(Depart: Depart) {
        let DepartJson = JSON.stringify(Depart);
        console.log('ajout de j ********************'+DepartJson);
         this.http.post<Depart>(this.AddURL, DepartJson )
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

    
    updateDepart(Depart: Depart){
        const url = `${this.UpdateURL}/${Depart.id}`;
         this.http.put<Depart>(url, Depart)
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