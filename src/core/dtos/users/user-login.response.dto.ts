import { ApiProperty } from '@nestjs/swagger';

export class UserLoggedResponseDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}