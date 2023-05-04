import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  private products = [];

  async addProduct(product) {
    this.products.push(product);
    return product;
  }

  async getAllProducts() {
    return this.products;
  }
}
