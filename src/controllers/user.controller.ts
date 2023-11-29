
import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { UserUseCases } from '../use-cases/user/user.user-case';
import { CreateUserRequest } from 'src/use-cases/user/models/create-user.request';
import { UserResponse } from 'src/use-cases/user/models/user.response';
import { ApiTags, ApiResponse, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/use-cases/authentication/auth.guard';

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
        type: UserResponse[0],
        isArray: true
    })
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getAll(): Promise<UserResponse[]> {
        return this.userService.getAllUsers();
    }

    @Get('get-profile')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getProfile(@Request() req: any): Promise<UserResponse> {
        let id = req.user.id;
        console.log(req);
        return this.userService.getUserById(id);
    }

    @Post('create-user')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async signupUser(@Body() userData: CreateUserRequest): Promise<UserResponse> {
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