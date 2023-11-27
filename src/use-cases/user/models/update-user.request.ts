import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserRequest {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
}