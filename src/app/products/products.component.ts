import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(productService: ProductService) {
    this.products = productService.getProducts()
  }

  ngOnInit(): void {
  }

}
