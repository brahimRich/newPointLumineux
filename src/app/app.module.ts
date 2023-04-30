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

@NgModule({
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot({prefix: 'my-app', separator: '-', caseSensitive: true}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.
    forRoot([
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'ListeProducts', component: ProductListComponent },
      { path: 'ListeProducts/:productId', component: ProductListComponent },
      { path: 'AddPointLumineux', component: AddPointLumineuxComponent },
      { path: 'product-update/:pointLumineux', component: AddPointLumineuxComponent },
      //{ path: 'Login', component: LoginComponent },
      { path: 'Home', component: HomeComponent },
      //{ path: '', component: HomeComponent },
            //{ path: '', component: ProductListComponent },
      { path: 'AddArmoire', component: AddArmoireComponent }, 
      { path: 'AddDepart', component: AddDepartComponent },  

    ])
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
  ],
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