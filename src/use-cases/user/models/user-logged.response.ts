import { ApiProperty } from '@nestjs/swagger';

export class UserLoggedResponse {
    id: string;
    name: string;
    email: string;
}