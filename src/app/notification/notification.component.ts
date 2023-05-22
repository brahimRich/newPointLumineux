import { Component, OnInit } from '@angular/core';
import { environment } from "./../../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { NotificationService,Notification } from './notification';
import { InterventionService,Intervention } from './../intervention';

import { SessionStorageService } from 'ngx-webstorage';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from './../details-dialog/details-dialog.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{

  constructor(private notificationService: NotificationService,private sessionStorage: SessionStorageService,private dialog: MatDialog,private InterventionService: InterventionService,private datePipe: DatePipe){
  }

  recentNotificationCount: number = 0;
  title = 'af-notification';
  message : any = null;
  notifications: Notification[] = [];
  messages : any []=[];
  usercibler : number = 0;
  user : any ;
  InterventionNotifier : any[] = [];
<<<<<<< HEAD
  data : any = null;
=======
  data : any =null;
>>>>>>> origin/main
  formattedDate: Date = new Date;
  ngOnInit(): void {
    this.requestPermission();
    this.user = this.sessionStorage.retrieve('userTech');
    this.listen();
    this.loadNotifications();
    console.log("userrr connecter "+this.user.id);
<<<<<<< HEAD
   // const d : Date =new Date("2023-05-11T11:37:47.332");
   // let datae = JSON.stringify(this.notificationService.getNotificationByDate(d));
    // console.log("bsaaaaaaahtk "+datae)
  }

=======
    const d : Date =new Date("2023-05-11T11:37:47.332");
    let datae = JSON.stringify(this.notificationService.getNotificationByDate(d));
     console.log("bsaaaaaaahtk "+datae)
  }
>>>>>>> origin/main
  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received.', payload);
<<<<<<< HEAD
      const userId ="2"// payload.data ? payload.data['userId'] : undefined;
      if(userId){
      const num = parseInt(userId, 10); // Convertit la chaîne '123' en nombre entier 123
      console.log("userId: ", this.user.id);
=======
      const userId = payload.data ? payload.data['userId'] : undefined;
      if(userId){
      const num = parseInt(userId, 10); // Convertit la chaîne '123' en nombre entier 123
      console.log("userId: ", num);
>>>>>>> origin/main
      this.usercibler=num;
      if(this.usercibler==this.user.id){
      this.message = payload;
      this.recentNotificationCount++;
      this.InterventionNotifier.push(payload);
      this.messages.push(payload.notification);
      const d = payload.data ? payload.data['TypeIn'] : undefined;
      console.log("---------------------------------------------------"+d);
      }
      }
    });
  }
  parseDate(dateString: string): Date {
    return new Date(dateString);
  }
  
<<<<<<< HEAD
  VoirPlus(data: String) {
    //const date = new Date(data);
    //console.log("Date notification "+data.getTime());
     //this.formattedDate = this.datePipe.transform(data, 'yyyy-MM-ddTHH:mm:ss.SSS');
    //console.log("Date notification "+this.formattedDate);
    //this.formattedDate = new Date(data); // Convertir la chaîne de caractères en objet Date
    this.notificationService.getNotificationByDate(data).subscribe(
      notifications => {
        console.log("/////////////////////////////////////");
        this.data=notifications
        let datae = JSON.stringify(notifications);
=======
  VoirPlus(data: Date) {
    //const date = new Date(data);
    console.log("Date notification "+data.getTime());
     //this.formattedDate = this.datePipe.transform(data, 'yyyy-MM-ddTHH:mm:ss.SSS');
    console.log("Date notification "+this.formattedDate);
    //this.formattedDate = new Date(data); // Convertir la chaîne de caractères en objet Date
    this.notificationService.getAllNotifications().subscribe(
      notifications => {
        console.log("/////////////////////////////////////");
        this.data=notifications[0]
        let datae = JSON.stringify(this.data);
>>>>>>> origin/main
        console.log("dateh**************** "+datae);
        const dialogRef = this.dialog.open(DetailsDialogComponent, {  
          data: this.data,
          width: '900px' // Ajustez la largeur selon vos besoins
        });
      },
      error => {
        console.log('Error retrieving notifications:', error);
      }
    );
    
    
  }
   

  

  loadNotifications(): void {
    this.notificationService.getAllNotifications().subscribe(
      notifications => {
        for (let i = 0; i < notifications.length; i++) {
          if (this.user.id === notifications[i].technicienne.id) {
            this.notifications.push(notifications[i]);
          }
        }        
      },
      error => {
        console.log('Error retrieving notifications:', error);
      }
    );
  }

}
