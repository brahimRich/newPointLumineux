import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PointLumineux } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() PointLumineux!: PointLumineux;
  @Output() notify = new EventEmitter();
  @Output() delete =new EventEmitter();
 
}
