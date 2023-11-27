import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    name: string;
    email: string;
    username: string;
    password : string;
  }