import { Component } from '@angular/core';
import { NotificationService,Notification } from '../notification/notification';
import { InterventionService,Intervention } from './../intervention';
import { NotificationReponcee } from './../notification/notification';

import { environment } from "./../../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { SessionStorageService } from 'ngx-webstorage';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from './../details-dialog/details-dialog.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-notification-admin',
  templateUrl: './notification-admin.component.html',
  styleUrls: ['./notification-admin.component.css']
})
export class NotificationAdminComponent {

  constructor(private notificationService: NotificationService,private sessionStorage: SessionStorageService,private dialog: MatDialog,private InterventionService: InterventionService,private datePipe: DatePipe){
  }

  recentNotificationCount: number = 0;
  title = 'af-notification';
  message : any = null;
  notifications: any[] = [];
  messages : any []=[];
  usercibler : number = 0;
  user : any ;
  InterventionNotifier : any[] = [];
  data : any = null;
  formattedDate: Date = new Date;
  ListePointlumuneux : any []=[];
  ngOnInit(): void {
    this.requestPermission();
    this.user = this.sessionStorage.retrieve('userTech');
    this.listen();
    this.loadNotifications();
    console.log("userrr connecter "+this.user.id);
  }

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
      this.message = payload;
      this.recentNotificationCount++;
      this.InterventionNotifier.push(payload);
      this.messages.push(payload.notification);
      const d = payload.data ? payload.data['TypeIn'] : undefined;
      console.log("---------------------------------------------------"+d);   
    });
  }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }
  
  loadNotifications(): void {
    this.notificationService.getAllNotificationsReponce().subscribe(
      notifications => {
        for (let i = 0; i < notifications.length; i++) {
          console.log("hh wakha "+notifications[i].message)
            this.notifications.push(notifications[i]);
        }
        this.ListePointlumuneux[0]=notifications[0].notification.intervention.pointLumineuxList
      },
      error => {
        console.log('Error retrieving notifications:', error);
      }
    );
  }

}
