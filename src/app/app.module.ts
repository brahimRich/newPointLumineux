import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { SessionStorageService } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddPointLumineuxComponent } from './add-point-lumineux/add-point-lumineux.component';
import { AddArmoireComponent } from './add-armoire/add-armoire.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddDepartComponent } from './add-depart/add-depart.component';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';
import { AddTechniciennesComponent } from './add-techniciennes/add-techniciennes.component';
import { DetailTechComponent } from './detail-tech/detail-tech.component';
import { ListeArmoireComponent } from './liste-armoire/liste-armoire.component';
import { LoginTechComponent } from './login-tech/login-tech.component';
import { InterventionFormComponent } from './intervention-form/intervention-form.component';
import { environment } from "../environments/environment";
import { initializeApp } from "firebase/app";
<<<<<<< HEAD

initializeApp(environment.firebase);
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { PermissionGuard } from './permission.guard';
=======
initializeApp(environment.firebase);
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
>>>>>>> origin/main

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeTechComponent } from './home-tech/home-tech.component';
import { ListInterTTechComponent } from './list-inter-t-tech/list-inter-t-tech.component';
import { NotificationComponent } from './notification/notification.component';
import { TopBarTechComponent } from './top-bar-tech/top-bar-tech.component';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { DatePipe } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { HomeSuperAdminComponent } from './home-super-admin/home-super-admin.component';
import { TopBarSuperAdminComponent } from './top-bar-super-admin/top-bar-super-admin.component';
import { PermissionComponent } from './permission/permission.component';
import { Eror404Component } from './eror404/eror404.component';
import { NotificationAdminComponent } from './notification-admin/notification-admin.component';
import { ListeDepartComponent } from './liste-depart/liste-depart.component';
import { ListeTechComponent } from './liste-tech/liste-tech.component';

@NgModule({
  
=======

@NgModule({
>>>>>>> origin/main
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
<<<<<<< HEAD
    PowerBIEmbedModule,
=======
>>>>>>> origin/main
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot({prefix: 'my-app', separator: '-', caseSensitive: true}),
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.
    forRoot([
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'ListeProducts', component: ProductListComponent },
      { path: 'ListeProducts/:productId', component: ProductListComponent },
      { path: 'AddPointLumineux', component: AddPointLumineuxComponent },
      { path: 'product-update/:pointLumineux', component: AddPointLumineuxComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Home', component: HomeComponent },
      { path: 'Homet', component: HomeTechComponent },
      { path: '', component: HomeComponent },
      { path: '', component: ProductListComponent },
<<<<<<< HEAD
      { path: 'ListInterT', component: ListInterTTechComponent ,canActivate: [PermissionGuard], data: { requiredPermissions: ['liste des Interventions'] } },
      { path: 'AddArmoire', component: AddArmoireComponent , canActivate: [PermissionGuard], data: { requiredPermissions: ['Ajout un Armoire'] } }, 
      { path: 'AddDepart', component: AddDepartComponent ,canActivate: [PermissionGuard], data: { requiredPermissions: ['Ajout un depart'] } },  
      { path: 'ListeArmoire', component: ListeArmoireComponent , canActivate: [PermissionGuard], data: { requiredPermissions: ['Lister les Armoires'] } }, 
      { path: 'ListeDepart', component: ListeDepartComponent , canActivate: [PermissionGuard], data: { requiredPermissions: ['Lister les departs'] } }, 
      { path: 'armoire-update/:armoire', component: AddArmoireComponent },
      { path: 'depart-update/:depart', component: AddDepartComponent },
      { path: 'Intervention', component: AddInterventionComponent , canActivate: [PermissionGuard], data: { requiredPermissions: ['Ajout un Intervention'] } }, 
      { path: 'Addtechnicienne', component: AddTechniciennesComponent }, 
      { path: 'ListeTech', component: ListeTechComponent }, 
=======
      { path: 'ListInterT', component: ListInterTTechComponent },

      { path: 'AddArmoire', component: AddArmoireComponent }, 
      { path: 'AddDepart', component: AddDepartComponent },  
      { path: 'ListeArmoire', component: ListeArmoireComponent }, 
      { path: 'armoire-update/:armoire', component: AddArmoireComponent },
      { path: 'depart-update/:depart', component: AddDepartComponent },
      { path: 'Intervention', component: AddInterventionComponent }, 
      { path: 'Addtechnicienne', component: AddTechniciennesComponent }, 
>>>>>>> origin/main
      { path: 'technicienne-update/:technicienne', component: AddTechniciennesComponent },
      {path : 'technicien/:id',component : DetailTechComponent},
      {path : 'LoginTech',component : LoginTechComponent},
      {path : 'notification',component : NotificationComponent},
      {path : 'form' , component:InterventionFormComponent},
<<<<<<< HEAD
      {path : 'Db' , component:DashboardComponent},
      {path : 'Roles' , component:HomeSuperAdminComponent},
      {path : 'error' , component:Eror404Component}


=======
      {path : 'DetailsDialogComponent' , component : DetailsDialogComponent},
>>>>>>> origin/main
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    AddPointLumineuxComponent,
    LoginComponent,
    HomeComponent,  
    AddArmoireComponent,
    AddDepartComponent,
    AddInterventionComponent,
    AddTechniciennesComponent,
    DetailTechComponent,
    ListeArmoireComponent,
    LoginTechComponent,
    NotificationComponent,
    HomeTechComponent,
    TopBarTechComponent,
    ListInterTTechComponent,
    DetailsDialogComponent,
<<<<<<< HEAD
    DashboardComponent,
    HomeSuperAdminComponent,
    TopBarSuperAdminComponent,
    PermissionComponent,
    Eror404Component,
    NotificationAdminComponent,
    ListeDepartComponent,
    ListeTechComponent,
  ],
   providers: [AsyncPipe,DatePipe,PermissionGuard],
=======
    InterventionFormComponent,
  ],
   providers: [AsyncPipe,DatePipe],
>>>>>>> origin/main

  bootstrap: [
    AppComponent
  ], 
})
export class AppModule { }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/