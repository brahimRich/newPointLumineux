import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

    
export interface typeArmoire {
  nom : string;
}

export interface armoireListe {
  marque : string;
  calibre : string;
  nombre : number;
  typeArmoire:typeArmoire;
}

export interface Armoire {
  id: number;
  armoireListe : armoireListe[],
}

/*
export interface Armoire {
    Id_Armoire: number;
    MarqueSectionneur : string;
    calibreSectionneur : string;
    nombreSectionneur : number;
    marquePorteFusible : string;
    calibrePorteFusible : string;
    nombrePorteFusible : number;
    marqueRepartiteur : string;
    calibreRepartiteur : string;
    nombreRepartiteur : number;
    marqueContacteur : string;
    calibreContacteur : string;
    nombreContacteur : number;
    marqueHorloge : string;
    calibreHorloge : String;
    nombreHorloge : number;
    marqueDisjunicC2 : String;
    calibreDisjunicC2 : String;
    nombreDisjunicC2 : number;
    marqueBornes : String;
    calibreBornes : String;
    nombreBornes : number;
    marqueCablage : String;
    calibreCablage : String;
    nombreCablage : number;
  }
*/

 
  @Injectable({
    providedIn: 'root'
  })

  export class ArmoireService {
    constructor(private http: HttpClient) {}

    private getURL = 'http://localhost:4200/api/armoire/getAll';
    private deleteURL= 'http://localhost:4200/api/armoire/delete';
    private AddURL= 'http://localhost:4200/api/armoire/add';
    private UpdateURL= 'http://localhost:4200/api/armoire/update';

      getAllArmoire(): Observable<any> {
        return this.http.get<any>(this.getURL);
      } 
      
      deleteArmoire(id: number) {
        const url = `${this.deleteURL}/${id}`;
        return this.http.delete(url); 
      }

    AddArmoire(Armoire: Armoire) {
        let ArmoireJson = JSON.stringify(Armoire);
        console.log('ajout de j ********************'+ArmoireJson);
         this.http.post<Armoire>(this.AddURL, ArmoireJson ,httpOptions)
        .subscribe(
          (response) => {
            console.log('Réponse de la requête POST :', response);
          },
          (error) => {
            console.error('Erreur lors de la requête POST :', error);
          }
        );
      }
  
      FindById(id: number): Observable<Armoire> {  
        return this.getAllArmoire().pipe(
          map(Armoires => Armoires.find((Armoire: Armoire) => Armoire.id === id))
        );
      }

      updateArmoire(Armoire: Armoire){
        const url = `${this.UpdateURL}/${Armoire.id}`;
         this.http.put<Armoire>(url, Armoire)
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