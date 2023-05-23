import { IsEmail, IsNotEmpty, IsString, Validate } from 'class-validator';
import { ValidateCPF } from 'src/utils/validateCPF';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  @Validate(ValidateCPF)
  readonly cpf: string;
}
