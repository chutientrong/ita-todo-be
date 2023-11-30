import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequestDto {
    @ApiProperty()
    firstName: string;
    
    @ApiProperty()
    lastName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    confirmPassword: string;
}