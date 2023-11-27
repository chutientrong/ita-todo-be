import { ApiProperty } from '@nestjs/swagger';

export class UserDataDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
}