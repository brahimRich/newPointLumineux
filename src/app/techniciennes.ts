import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';  
import { SessionStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


  export interface techniciennes{
    id: number;
	  nom : string;
    prenom : string ;
	  cin : string;
    email : string;
    password : string;
<<<<<<< HEAD
    dtype : String;
    tele : String
=======
>>>>>>> origin/main
  }

  @Injectable({
    providedIn: 'root'
  })

  export class techniciennesService {

    private getURL = 'http://localhost:4200/api/technicienne/getAll';
<<<<<<< HEAD
    private getURLUsers = 'http://localhost:4200/api/technicienne/getAllUser';

=======
>>>>>>> origin/main
    private deleteURL= '/api/technicienne/delete';
    private AddURL= '/api/technicienne/add';
    private UpdateURL= '/api/technicienne/update';
    
  
    constructor(private http: HttpClient,private sessionStorage: SessionStorageService,private router: Router,private location: Location) {}

    getAlltechniciennes(): Observable<any> {
      console.log("get all techn");
<<<<<<< HEAD
        return this.http.get<any>(this.getURLUsers);
    } 

    getAllUser(): Observable<any> {
      console.log("get all user");
        return this.http.get<any>(this.getURLUsers);
=======
        return this.http.get<any>(this.getURL);
>>>>>>> origin/main
    } 


    FindtechniciennesById(id : number): Observable<techniciennes> {
      return this.getAlltechniciennes().pipe(
        map(technicienness => technicienness.find((techniciennes: techniciennes) => techniciennes.id === id))
      );
    }

    Findtechniciennes(nom: String , prenom : String): Observable<techniciennes> {
        return this.getAlltechniciennes().pipe(
          map(technicienness => technicienness.find((techniciennes: techniciennes) => techniciennes.nom === nom && techniciennes.prenom === prenom))
        );
    }


    deletetechniciennes(id: number) {
      const url = `${this.deleteURL}/${id}`;
      return this.http.delete(url); 
    }

    Addtechniciennes(techniciennes: techniciennes) {
      let techniciennesJson = JSON.stringify(techniciennes);
      console.log('ajout de j ********************'+techniciennesJson);
       this.http.post<techniciennes>(this.AddURL, techniciennesJson, httpOptions)
      .subscribe(
        (response) => {
          console.log('Réponse de la requête POST :', response);
        },
        (error) => {
          console.error('Erreur lors de la requête POST :', error);
        }
      );
    }

    updatetechniciennes(techniciennes: techniciennes){
      const url = `${this.UpdateURL}/${techniciennes.id}`;
       this.http.put<techniciennes>(url, techniciennes)
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