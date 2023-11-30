
import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserRequestDto, SwaggerConstants, UpdateUserDto, UserDataResponseDto } from 'src/core';
import { UserUseCases } from 'src/use-cases/user';

@ApiBearerAuth(SwaggerConstants.defaultName)
@ApiTags('User')
@Controller('api/user')
export class UserController {
    constructor(
        private userService: UserUseCases,

    ) { }

    @Get('')
    @ApiOkResponse({
        description: 'The user records',
        type: UserDataResponseDto[0],
        isArray: true
    })
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getAll(): Promise<UserDataResponseDto[]> {
        return this.userService.getAllUsersAsync();
    }

    @Get(':id')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getUserById(@Param('id') id: number): Promise<UserDataResponseDto> {
        return this.userService.getUserByIdAsync(id);
    }

    @Post('')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createUser(@Body() userData: CreateUserRequestDto): Promise<UserDataResponseDto> {
        return this.userService.createUserAsync(userData);
    }

    @Put('/:id')
    async updateUser(@Param('id') id: number, @Body() userData: UpdateUserDto) {
         this.userService.updateUserAsync(id, userData);
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: number) {
         this.userService.deleteUserAsync(id);
    }
}