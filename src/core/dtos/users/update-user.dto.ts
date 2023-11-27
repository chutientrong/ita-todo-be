import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto {
    name: string;
    email: string;
}