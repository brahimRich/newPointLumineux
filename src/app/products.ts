import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

export interface Adresse {
  rue: string,
  quertier :string
}

export interface Coordonnees {
  x :number,
  y :number,
}

export interface PointLumineux {
    reference: number;
    type : string;
    longitude : number;
    latitude : number;
    allume: boolean;
    numero :number;
    marque : string;
    degre_prot : string;
    puissance_max : number;
    temperature : number;
    class_electrique : string;
    date_accussition : string;
    adresse: Adresse;
    coordonnees : Coordonnees;
  }
  
   @Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    private getURL = 'api/produit/getAll';
    private deleteURL= 'http://localhost:4200/api/produit/delete';
    private AddURL= 'http://localhost:4200/api/produit/add';
    private UpdateURL= 'http://localhost:4200/api/produit/update';
    constructor(private http: HttpClient) {}

    getAllPointLumineux(): Observable<any> {  
      return this.http.get<any>(this.getURL);
    }
    
    deletePointLumineux(id: number) {
      const url = `${this.deleteURL}/${id}`;
      return this.http.delete(url);
    }
    
    AddPointLumineux(pointLumineux: PointLumineux) {
      let pointLumineuxJson = JSON.stringify(pointLumineux);
      console.log('ajout de j ********************'+pointLumineuxJson);
       this.http.post<PointLumineux>(this.AddURL, pointLumineuxJson , httpOptions)
      .subscribe(
        (response) => {
          console.log('Réponse de la requête POST :', response);
        },
        (error) => {
          console.error('Erreur lors de la requête POST :', error);
        }
      );
    }  

    FindById(idPointL: number): Observable<PointLumineux> {
      return this.getAllPointLumineux().pipe(
        map(products => products.find((PointLumineux: PointLumineux) => PointLumineux.reference === idPointL))
      );
    }

    updatePointLumineux(pointLumineux: PointLumineux){
      const url = `${this.UpdateURL}/${pointLumineux.reference}`;
      console.log("updddddddddddddddddddddate "+pointLumineux.adresse.rue);  
       this.http.put<PointLumineux>(url, pointLumineux)
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