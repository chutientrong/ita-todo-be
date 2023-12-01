import { Module, forwardRef } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { UserUseCases } from './user.use-case';
import { HelperModule } from '@ita-company/ita-package';

@Module({
  imports: [DataServicesModule,HelperModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule { }