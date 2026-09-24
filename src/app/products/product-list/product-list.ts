import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductDetails } from '../product-details/product-details';
import { ProductService } from '../product-service';

@Component({
  imports: [CurrencyPipe, UpperCasePipe, ProductDetails],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private productService = inject(ProductService);

  selectedProduct: WritableSignal<Product | null> = signal(null);

  select(product: Product): void {
    this.selectedProduct.set(product);
  }

  title = signal('Products');

  products: Signal<Product[]> = this.productService.getProducts();
}
