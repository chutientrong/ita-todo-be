import { Module } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { UserUseCases } from './user.use-case';
import { HelperModule } from 'src/core/helpers/helper.module';

@Module({
  imports: [DataServicesModule, HelperModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule { }