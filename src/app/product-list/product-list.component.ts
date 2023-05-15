import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PointLumineux ,ProductService} from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: any[] = [];
  searchText = '';

  constructor(private productService: ProductService,private router: Router,private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.productService.getAllPointLumineux().subscribe(
      data => {
        this.products = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

 
  pointLumineux: PointLumineux | undefined;

  share() {
    window.alert('The product has been shared!'); 
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  delete(pointLumineux : PointLumineux){
    this.products=this.filteredProducts();
    window.alert('supprimer le produit ?'+pointLumineux.type);
    this.productService.deletePointLumineux(pointLumineux.reference).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );
  }

  update(PointLu : PointLumineux){
    window.alert('Modifer'+PointLu.type);
    this.router.navigate(['/product-update', PointLu.reference]);
  }


  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  onSearchTermChanged() {
    this.products=this.filteredProducts();
    if(this.searchText=='') this.ngOnInit()
  }
 
   filteredProducts() {
    console.log("checheee");
    return this.products.filter(pointLumineux =>
      pointLumineux.adresse.rue.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
