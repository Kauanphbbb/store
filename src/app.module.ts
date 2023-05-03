import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersRepository],
})
export class AppModule {}
