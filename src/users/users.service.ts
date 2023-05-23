import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // TODO: Implement password hashing
  async create(createUserDto: CreateUserDto): Promise<User> {
    const [cpfAlreadyInUse, emailAlreadyInUse] = await Promise.all([
      this.userRepository.findOne({ where: { cpf: createUserDto.cpf } }),
      this.userRepository.findOne({ where: { email: createUserDto.email } }),
    ]);

    if (cpfAlreadyInUse) {
      throw new ConflictException('CPF already in use');
    }

    if (emailAlreadyInUse) {
      throw new ConflictException('Email already in use');
    }

    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async list(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
