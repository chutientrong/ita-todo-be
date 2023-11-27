import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthUseCases } from 'src/use-cases/authentication/authenticate.use-case';
import { ApiTags, ApiResponse, ApiOkResponse } from '@nestjs/swagger';
import { SignInRequest } from 'src/use-cases/authentication/models/signin.request';
import { Public } from 'src/use-cases/authentication/auth.guard';

@Public()
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthUseCases) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInRequest) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}