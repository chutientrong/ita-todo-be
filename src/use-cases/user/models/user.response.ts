import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
}