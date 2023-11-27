import { ApiProperty } from '@nestjs/swagger';

export class SignInRequest {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}