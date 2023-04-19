import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

export interface PointLumineux {
    reference: number;
    name: string;
    longitude : number;
    latitude : number;
    allume: boolean;
  }
  
   @Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    private getURL = 'http://localhost:4200/api/produit/getAll';
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
    
    AddPointLumineux(pointLumineux: PointLumineux): Observable<PointLumineux> {
      console.log('ajout de '+pointLumineux.allume);
    return this.http.post<PointLumineux>(this.AddURL, pointLumineux)
      .pipe(
        catchError((error: any) => {
          console.error(error);
          throw error;
        })
      );
    }

    FindById(idPointL: number): Observable<PointLumineux> {
      return this.getAllPointLumineux().pipe(
        map(products => products.find((PointLumineux: PointLumineux) => PointLumineux.reference === idPointL))
      );
    }

    updatePointLumineux(pointLumineux: PointLumineux): Observable<PointLumineux> {
      const url = `${this.UpdateURL}/${pointLumineux.reference}`;
      console.log("updddddddddddddddddddddate "+url);
      return this.http.put<PointLumineux>(url, pointLumineux);
    }
    
  }