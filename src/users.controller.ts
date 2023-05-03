import { Body, Controller, Post } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Controller('/users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}
  @Post()
  async addUser(@Body() userDto) {
    await this.usersRepository.saveUser(userDto);
  }
}
