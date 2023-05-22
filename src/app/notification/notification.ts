import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Intervention} from '../../app/intervention';
import { map } from 'rxjs/operators';


export interface TechnNotifier {
  id : number
}

export interface InterNotifier {
  id : number,
  Date_intervention : Date,
  type : String ,
  intitule_Intervention : String
}

export interface InterNotifierReponcee {
  admin : TechnNotifier,
  dure_Intervention : String,
  completeur: TechnNotifier,
  etat_intervention:String,
}

export interface InterNotifierReponce {
  id :number,
  technicienne :TechnNotifier, 
  intervention : InterNotifierReponcee
}



export interface Notification {
    topic: string;
    title: string;
    message: string;
    createdAt: Date;
    token: string;
    technicienne:TechnNotifier;
    intervention:Intervention;
  }

  export interface NotificationReponcee {
    topic: string;
    title: string;
    message: string;
    createdAt: Date;
    token: string;
    notification : InterNotifierReponce;
  }
  

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private getUrl = 'http://localhost:4200/api/notification/getAll'; 
  private getByDate = 'http://localhost:4200/api/notification/getInterBuDate'; 
  private getUrlNR="http://localhost:4200/api/notification/getAllR"
  constructor(private http: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.getUrl);
  }

  getAllNotificationsReponce(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrlNR);
  }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  getNotificationByDate(date: String): Observable<any> {
    const url = `${this.getByDate}/${date}`;
    console.log("3laaaaaah "+url)
    return this.http.get<Notification>(url);
  }
  


}


  //Notification.createdAt.getTime()==date.getTime()

  
  


 /* this.getAllNotifications().subscribe(
    notifications => {
      let datae = JSON.stringify(notifications[2]);
      console.log("intervention by date *****"+datae)
    },
    error => {
      console.log('Error retrieving notifications:', error);
    }
  );*/

