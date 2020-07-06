import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Product {
  name: string;
  description: string;
  price: number;
}

export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    let products: Product[] = [
      {
        name: 'Angular',
        description: 'First angular test project',
        price: 150
      },
      {
        name: 'Angular 2',
        description: 'Second angular line',
        price: 390
      },
      {
        name: 'Angular 3',
        description: 'Third thingy',
        price: 690
      }
    ];
    return products
  }

}
