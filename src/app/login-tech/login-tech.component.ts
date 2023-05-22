import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userTech,UserTechService } from '../userTech'; 
import { CartService } from '../cart.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
>>>>>>> origin/main



@Component({
  selector: 'app-login-tech',
  templateUrl: './login-tech.component.html',
  styleUrls: ['./login-tech.component.css']
})
export class LoginTechComponent implements OnInit {

  constructor(private UserTechService: UserTechService,private cartService: CartService,private sessionStorage: SessionStorageService,private router: Router,private location: Location){}
  email: string='';
  password: string='';
  errorMessageN='k';
<<<<<<< HEAD
  errorMessageLo='p';
  errorLogin='o';

  permetion : any[]=[];
=======
  errorMessageLo='p'; 
  errorLogin='o';


>>>>>>> origin/main
  userTech: userTech = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
<<<<<<< HEAD
    password: '',
    dtype :''
=======
    password: ''
>>>>>>> origin/main
  };

  ngOnInit() {
   
  }

  loadData() { 
    const user = this.sessionStorage.retrieve('userTech');
  }

  onSubmit() {
        console.log("login techni")
        const email = this.email;
        const password = this.password;
        //if(this.sessionStorage.retrieve('userTech')!=null)this.router.navigateByUrl('/Home', { skipLocationChange: false }).then(() => {window.location.reload();});
        if(this.email!='' && this.password!=''){
          this.UserTechService.FindTechn(this.email, this.password).subscribe((user) => {
            this.userTech = user;
            if(typeof user == 'undefined'){
              console.log("login techni err")
              this.errorLogin='email ou password est incorrecte !!!';
            }else{
              this.errorLogin='';
              this.sessionStorage.store('userTech', this.userTech);
<<<<<<< HEAD
              this.getPermetion(this.userTech.id).subscribe(
                (per: any[]) => {
                  this.permetion = per;
                  const rolesJSON = JSON.stringify(per);
                  localStorage.setItem('userRoles', rolesJSON);
                  console.log("permetion ----///*****"+per[0].name)
                },
                (error) => {
                  console.error(error);
                }
              );
              if(this.userTech.dtype=="Admin"){
                this.loadData();
                const currentUrl = this.router.url;
                if(currentUrl=='/' || currentUrl=='' || currentUrl=='/LoginTech'){
                  this.router.navigateByUrl('/Home', { skipLocationChange: false }).then(() => {
                    window.location.reload(); 
                  });
                }else{
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                  this.router.navigateByUrl(currentUrl);
                });
              }
            }else{
              if(this.userTech.dtype=="Technicienne"){
                this.loadData();
                const currentUrl = this.router.url;
                if(currentUrl=='/' || currentUrl=='' || currentUrl=='/LoginTech'){
                  this.router.navigateByUrl('/Homet', { skipLocationChange: false }).then(() => {
                    window.location.reload(); 
                  });
                }else{
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                  this.router.navigateByUrl(currentUrl);
                });
              }
            }else{
              if(this.userTech.dtype=="SuperAdmin"){
                this.loadData();
                const currentUrl = this.router.url;
                if(currentUrl=='/' || currentUrl=='' || currentUrl=='/LoginTech'){
                  this.router.navigateByUrl('/Roles', { skipLocationChange: false }).then(() => {
                    window.location.reload(); 
                  });
                }else{
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                  this.router.navigateByUrl(currentUrl);
                });
              }
            }
            } 
          }
        }
=======
              this.loadData();
              const currentUrl = this.router.url;
              if(currentUrl=='/' || currentUrl=='' || currentUrl=='/LoginTech'){
                this.router.navigateByUrl('/Homet', { skipLocationChange: false }).then(() => {
                  window.location.reload(); 
                });
              }else{
              this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this.router.navigateByUrl(currentUrl);
              });
              window.location.reload();
            }
            } 
>>>>>>> origin/main
          }, (error) => {
            console.error("Erroroooooooooooooooooooooooooooooooooooooooooooooooooooooo: ", error);
          });
        }else{
          this.updateErrorMessagee();
        }
  }

  submitProduct() {
    //this.productAdded.emit(newProduct);
    this.UserTechService.AddAdminTechnicien(this.userTech);
    this.onSubmit();
  }
  
  updateErrorMessagee() {
    console.log("rrrrr")
    if(this.email=='') this.errorMessageN='Le champ email est obligatoire';
    else this.errorMessageN='';
    if(this.password=='') this.errorMessageLo='Le champ Password est obligatoire';
    else this.errorMessageLo='';
  }
<<<<<<< HEAD

  getPermetion(id: number): Observable<any[]> {
    return this.UserTechService.GetPermetion(id);
  }
  
=======
>>>>>>> origin/main
 
}
   