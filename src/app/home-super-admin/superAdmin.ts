import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

export interface user {
    nom: String;
    prenom: string;
    email : String;
    password : String;
    id: number;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class SuperAdminService {
    private getURL = 'http://localhost:4200/api/admin/getAll';
    private getRoleURL = 'http://localhost:4200/api/technicienne/getRoles';
    private getAllUsersURL = 'http://localhost:4200/api/technicienne/getAllUser';
    private AddRolee = 'http://localhost:4200/api/technicienne/AddRole';
    private deleteRolee = 'http://localhost:4200/api/technicienne/DelleteRole';


    constructor(private http: HttpClient) {}

    getAllAdmin(): Observable<any> {
        return this.http.get<any>(this.getURL);
      }

      getAllRoles(): Observable<any> {
        return this.http.get<any>(this.getRoleURL);
      }

      getAllUser(): Observable<any> {
        return this.http.get<any>(this.getAllUsersURL);
      }

    FindAdmin(email: String , password : String): Observable<user> {
        return this.getAllAdmin().pipe(
          map(users => users.find((user: user) => user.email === email && user.password === password))
        );
    }

    deleteRole(user:number,role : number){
        const url = `${this.deleteRolee}/${user}/${role}`;
         this.http.put<null>(url, null)
         .subscribe(
          (response) => {
            console.log('Réponse de la requête put :', response);
          },
          (error) => {
            console.error('Erreur lors de la requête put :', error);
          }
        );
    }

    AddRole(user:number,role : number){
        const url = `${this.AddRolee}/${user}/${role}`;
        this.http.put<null>(url, null)
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