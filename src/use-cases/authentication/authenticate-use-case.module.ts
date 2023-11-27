import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { AuthFactoryService } from './authenticate-factory.service';
import { AuthUseCases } from './authenticate.use-case';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/core/common/constants';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [DataServicesModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [AuthFactoryService, AuthUseCases, AuthGuard],
  exports: [AuthFactoryService, AuthUseCases, AuthGuard],
})
export class AuthUseCasesModule { }