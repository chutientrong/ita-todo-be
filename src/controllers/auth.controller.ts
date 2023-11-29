import { Body, Controller, Get, Post, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { AuthUseCases } from 'src/use-cases/authentication/authenticate.use-case';
import { ApiTags, ApiResponse, ApiOkResponse } from '@nestjs/swagger';
import { SignInRequest } from 'src/use-cases/authentication/models/signin.request';
import { AuthGuard, Public } from 'src/use-cases/authentication/auth.guard';
import { UserResponse } from 'src/use-cases/user/models/user.response';
import { UserUseCases } from 'src/use-cases/user/user.user-case';

@ApiTags('Authentication')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthUseCases,
    private userService: UserUseCases,) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInRequest) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  // @HttpCode(HttpStatus.OK)
  // @Get('get-current-login')
  // async getProfile(@Request() req: any): Promise<UserResponse> {
  //   console.log(req.user);
  //   // let id = '';
  //   // return this.userService.getUserById(id);
  //   return null;
  // }

  @Get('get-current-login')
  async getCurrentLogin(@Request() req): Promise<any> {

    if (!req.user)
      return null;
    let id = req.user.sub;

    return this.userService.getUserLogger(id);
  }
  // extractTokenFromHeader(request: Request): string | undefined {
  //   const [type, token] = request.headers.authorization?.split(' ') ?? [];
  //   return type === 'Bearer' ? token : undefined;
  // }
}