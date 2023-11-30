import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { AuthFactoryService } from './authenticate-factory.service';
import { AuthUseCases } from './authenticate.use-case';
import { HelperModule } from 'src/core/helpers/helper.module';
import { AuthGuard } from '../../core/auth.guard';

@Module({
  imports: [DataServicesModule, HelperModule],
  providers: [AuthFactoryService, AuthUseCases, AuthGuard],
  exports: [AuthFactoryService, AuthUseCases, AuthGuard],
})
export class AuthUseCasesModule { }