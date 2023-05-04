import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Controller('products')
export class ProductsController {
  constructor(private productsRepository: ProductsRepository) {}
  @Post()
  async addProduct(@Body() product) {
    return this.productsRepository.addProduct(product);
  }

  @Get()
  async listAllProducts() {
    return this.productsRepository.getAllProducts();
  }
}
