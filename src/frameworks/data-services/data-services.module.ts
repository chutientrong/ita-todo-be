import { Module } from '@nestjs/common';
import { UserDataService } from './user.service';
import { PrismaService } from './prisma.service';


@Module({
  imports: [],
  exports: [UserDataService],
  providers: [PrismaService, UserDataService]
})
export class DataServicesModule { }
