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

<<<<<<< HEAD
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



=======
>>>>>>> origin/main
export interface Notification {
    topic: string;
    title: string;
    message: string;
    createdAt: Date;
    token: string;
    technicienne:TechnNotifier;
    intervention:Intervention;
  }
<<<<<<< HEAD

  export interface NotificationReponcee {
    topic: string;
    title: string;
    message: string;
    createdAt: Date;
    token: string;
    notification : InterNotifierReponce;
  }
=======
>>>>>>> origin/main
  

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private getUrl = 'http://localhost:4200/api/notification/getAll'; 
<<<<<<< HEAD
  private getByDate = 'http://localhost:4200/api/notification/getInterBuDate'; 
  private getUrlNR="http://localhost:4200/api/notification/getAllR"
=======

>>>>>>> origin/main
  constructor(private http: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.getUrl);
  }

<<<<<<< HEAD
  getAllNotificationsReponce(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrlNR);
  }

=======
>>>>>>> origin/main
  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

<<<<<<< HEAD
  getNotificationByDate(date: String): Observable<any> {
    const url = `${this.getByDate}/${date}`;
    console.log("3laaaaaah "+url)
    return this.http.get<Notification>(url);
=======
  getNotificationByDate(date: Date): Observable<any> {
    return this.getAllNotifications().pipe(
      map((notifications) =>
        notifications.filter(
          (notification: Notification) => 1===1
        )
      )
    );
>>>>>>> origin/main
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

