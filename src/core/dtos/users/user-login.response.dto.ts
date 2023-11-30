import { ApiProperty } from '@nestjs/swagger';

export class UserLoggedResponseDto {
    id: string;
    name: string;
    email: string;
}