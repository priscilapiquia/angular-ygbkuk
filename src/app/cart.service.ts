import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor() {}
  itens = [];
  addToCart(product) {
    this.itens.push(product);
  }
  getitens() {
    return this.itens;
  }
  clearCart() {
    this.itens = [];
    return this.itens;
  }
}
