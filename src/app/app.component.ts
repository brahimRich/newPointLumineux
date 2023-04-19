import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user,UserService } from './users';
import { CartService } from './cart.service';
import { SessionStorageService } from 'ngx-webstorage';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {}
  title = 'projet_Lumineux';
  constructor(private userService: UserService,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router){}
  user = this.sessionStorage.retrieve('user');

}
