import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';



export interface Armoire {
    Id_Armoire: number;
    MarqueSectionneur : string;
  }


  @Injectable({
    providedIn: 'root'
  })

  export class ArmoireService {
    constructor(private http: HttpClient) {}

    private getURL = 'http://localhost:4200/api/Armoire/getAll';
    private deleteURL= 'http://localhost:4200/api/Armoire/delete';
    private AddURL= 'http://localhost:4200/api/Armoire/add';
    private UpdateURL= 'http://localhost:4200/api/Armoire/update';

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
         this.http.post<Armoire>(this.AddURL, ArmoireJson )
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
          map(Armoires => Armoires.find((Armoire: Armoire) => Armoire.Id_Armoire === id))
        );
      }

      updateArmoire(Armoire: Armoire){
        const url = `${this.UpdateURL}/${Armoire.Id_Armoire}`;
        console.log("updddddddddddddddddddddate "+Armoire.MarqueSectionneur);  
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