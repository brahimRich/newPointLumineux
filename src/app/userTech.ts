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

export interface userTech {
    nom: String;
    prenom: string;
    email : String;
    password : String;
    id: number;
<<<<<<< HEAD
    dtype : String
=======
>>>>>>> origin/main
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class UserTechService {
<<<<<<< HEAD
    private getURL = 'http://localhost:4200/api/technicienne/getAllUser';
    private AddURL= 'http://localhost:4200/api/technicienne/add';
    private getPermetionUserUrl= 'http://localhost:4200/api/technicienne/getRolesUser';
=======
    private getURL = 'http://localhost:4200/api/technicienne/getAll';
    private AddURL= 'http://localhost:4200/api/technicienne/add';
>>>>>>> origin/main

    constructor(private http: HttpClient) {}


    getAllAdmin(): Observable<any> {
        return this.http.get<any>(this.getURL);
    }

    FindAdmin(email: String , password : String): Observable<userTech> {
        return this.getAllAdmin().pipe(
          map(users => users.find((user: userTech) => user.email === email && user.password === password))
        );
    }
     

    AddAdminTechnicien(userTech: userTech) {
        let userTechJson = JSON.stringify(userTech);
        console.log('ajout de j ********************'+userTechJson);
         this.http.post<userTech>(this.AddURL, userTechJson , httpOptions)
        .subscribe(
          (response) => {
            console.log('Réponse de la requête POST :', response);
          },
          (error) => {
            console.error('Erreur lors de la requête POST :', error);
          }
        );
      }

<<<<<<< HEAD
      GetPermetion(id:number) : Observable<any>{
        const url = `${this.getPermetionUserUrl}/${id}`;
        return this.http.get<any>(url);
      }

=======
>>>>>>> origin/main
      getAllTechn(): Observable<any> {
        return this.http.get<any>(this.getURL);
      }

      FindTechn(email: String , password : String): Observable<userTech> {
        return this.getAllTechn().pipe(
          map(users => users.find((user: userTech) => user.email === email && user.password === password))
        );
    }

  }