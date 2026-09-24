import { Component, input } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  imports: [UpperCasePipe, CurrencyPipe, DatePipe],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  product = input<Product | null>();
}
