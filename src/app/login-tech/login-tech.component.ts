import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user,UserService } from '../users';
import { CartService } from '../cart.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-tech',
  templateUrl: './login-tech.component.html',
  styleUrls: ['./login-tech.component.css']
})
export class LoginTechComponent implements OnInit {

  constructor(private userService: UserService,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location){}
  email: string='';
  password: string='';
  errorMessageN='';
  errorMessageLo='';
  errorLogin='';

  
  user: user = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    password: ''
  };

  ngOnInit() {
   
  }

  loadData() {
    const user = this.sessionStorage.retrieve('user');
  }

  
  onSubmit() {
        this.sessionStorage.store('user', this.user);
        this.loadData();
        const currentUrl = this.router.url;
        if(currentUrl=='/' || currentUrl==''){
          this.router.navigateByUrl('/Home', { skipLocationChange: false }).then(() => {
            window.location.reload(); 
          });
        }
  }
  
  updateErrorMessagee() {
    console.log("rrrrr")
    if(this.email=='') this.errorMessageN='Le champ email est obligatoire';
    else this.errorMessageN='';
    if(this.password=='') this.errorMessageLo='Le champ Password est obligatoire';
    else this.errorMessageLo='';
  }
 
}
   