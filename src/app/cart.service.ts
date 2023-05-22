import { PointLumineux } from './products';
import { Injectable } from '@angular/core';
import { user } from './users';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: PointLumineux[] = [];
  user: user = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    password: ''
  };


/* . . . */

  addToCart(user: user) {
    //this.user.push(user);
      this.user=user;
  }

  getItems() {
    return this.user;
  }

  clearCart() {
    //this.user = [];
    return this.user;
  }

/* . . . */
}
