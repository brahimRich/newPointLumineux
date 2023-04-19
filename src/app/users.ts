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
  export class UserService {
    private getURL = 'http://localhost:4200/api/admin/getAll';
    constructor(private http: HttpClient) {}

    getAllAdmin(): Observable<any> {
        return this.http.get<any>(this.getURL);
      }

    FindAdmin(email: String , password : String): Observable<user> {
        return this.getAllAdmin().pipe(
          map(users => users.find((user: user) => user.email === email && user.password === password))
        );
    }
     
  }