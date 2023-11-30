import { Body, Controller, Get, Post, HttpCode, HttpStatus, Request } from '@nestjs/common';
import { AuthUseCases } from '../use-cases/authentication/index';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UserUseCases } from 'src/use-cases/user';
import { SignInRequestDto, SwaggerConstants } from 'src/core';
import { Public } from 'src/core/auth.guard';

@ApiBearerAuth(SwaggerConstants.defaultName)
@ApiTags('Authentication')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthUseCases,
    private userService: UserUseCases,) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInRequestDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  
  @Get('get-current-login')
  async getCurrentLogin(@Request() req: any): Promise<any> {
    if (!req.user)
      return null;
    let id = req.user.sub;

    return this.userService.getUserLoggeAsync(id);
  }
}