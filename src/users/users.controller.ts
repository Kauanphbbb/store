import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Controller('/users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}
  @Post()
  async addUser(@Body() userDto) {
    return this.usersRepository.saveUser(userDto);
  }

  @Get()
  async listUsers() {
    return this.usersRepository.listUsers();
  }
}
