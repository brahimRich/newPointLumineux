

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PointLumineux ,ProductService} from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  PointLumineux: PointLumineux | undefined;
 // productsP: Array<PointLumineux> = this.cartService.getItems();

  constructor(private route: ActivatedRoute,private cartService: CartService,private productService: ProductService) { }

ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.productService.FindById(productIdFromRoute).subscribe(
    pointLumineux => {
      this.PointLumineux = pointLumineux;
    },
    error => {
      console.error(error);
    }
  );
   
}


/*addToCart(PointLumineux: PointLumineux) {
  this.cartService.addToCart(PointLumineux);
  window.alert('Your product has been added to the cart!');
  this.productsP=this.cartService.getItems();
}*/

}
