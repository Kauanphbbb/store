import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';

@Module({
  providers: [ProductsRepository],
  controllers: [ProductsController],
})
export class ProductsModule {}
