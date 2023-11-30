import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { AuthFactoryService } from './authenticate-factory.service';
import { AuthUseCases } from './authenticate.use-case';
import { HelperModule } from 'src/core/helpers/helper.module';

@Module({
  imports: [DataServicesModule, HelperModule],
  providers: [AuthFactoryService, AuthUseCases],
  exports: [AuthFactoryService, AuthUseCases],
})
export class AuthUseCasesModule { }