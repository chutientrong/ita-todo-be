
import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserRequestDto, UserDataResponseDto } from 'src/core';
import { UserUseCases } from 'src/use-cases/user';

// @UseGuards(AuthGuard)

@ApiBearerAuth('defaultBearerAuth')
@ApiTags('user')
@Controller('api/user')
export class UserController {
    constructor(
        private userService: UserUseCases,

    ) { }

    @Get('get-all')
    @ApiOkResponse({
        description: 'The user records',
        type: UserDataResponseDto[0],
        isArray: true
    })
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getAll(): Promise<UserDataResponseDto[]> {
        return this.userService.getAllUsers();
    }

    @Get('get-profile')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getProfile(@Request() req: any): Promise<UserDataResponseDto> {
        if (!req.user)
            return null;
        
        let id = req.user.sub;
        return this.userService.getUserById(id);
    }

    @Post('create-user')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async signupUser(@Body() userData: CreateUserRequestDto): Promise<UserDataResponseDto> {
        return this.userService.createUser(userData);
    }

    // @Get('post/:id')
    // async getPostById(@Param('id') id: string): Promise<PostModel> {
    //   return this.postService.post({ id: Number(id) });
    // }

    // @Get('feed')
    // async getPublishedPosts(): Promise<PostModel[]> {
    //   return this.postService.posts({
    //     where: { published: true },
    //   });
    // }

    // @Get('filtered-posts/:searchString')
    // async getFilteredPosts(
    //   @Param('searchString') searchString: string,
    // ): Promise<PostModel[]> {
    //   return this.postService.posts({
    //     where: {
    //       OR: [
    //         {
    //           title: { contains: searchString },
    //         },
    //         {
    //           content: { contains: searchString },
    //         },
    //       ],
    //     },
    //   });
    // }

    // @Post('post')
    // async createDraft(
    //   @Body() postData: { title: string; content?: string; authorEmail: string },
    // ): Promise<PostModel> {
    //   const { title, content, authorEmail } = postData;
    //   return this.postService.createPost({
    //     title,
    //     content,
    //     author: {
    //       connect: { email: authorEmail },
    //     },
    //   });
    // }


    // @Put('publish/:id')
    // async publishPost(@Param('id') id: string): Promise<PostModel> {
    //   return this.postService.updatePost({
    //     where: { id: Number(id) },
    //     data: { published: true },
    //   });
    // }

    // @Delete('post/:id')
    // async deletePost(@Param('id') id: string): Promise<PostModel> {
    //   return this.postService.deletePost({ id: Number(id) });
    // }
}