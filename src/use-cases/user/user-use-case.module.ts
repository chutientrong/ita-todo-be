import { Module } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { UserUseCases } from './user.user-case';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule { }