import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { AuthFactoryService } from './authenticate-factory.service';
import { AuthUseCases } from './authenticate.use-case';
import { AuthenticationModule, HelperModule } from '@ita-company/ita-package';

@Module({
  imports: [DataServicesModule, AuthenticationModule, HelperModule],
  providers: [AuthFactoryService, AuthUseCases],
  exports: [AuthFactoryService, AuthUseCases],
})
export class AuthUseCasesModule { }