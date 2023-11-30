import { Module } from '@nestjs/common';
import { UserRepository } from './user-repository/user.repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATA_BASE_CONFIGURATION } from 'src/configuration';
import { PGRepository } from './base-repository.service';
import { User } from './entities/user.entity';
import { Repository } from "typeorm";
import {IBaseRepository} from "../data-services/base-repository.interface";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DATA_BASE_CONFIGURATION.host,
      port: +DATA_BASE_CONFIGURATION.port,
      username: DATA_BASE_CONFIGURATION.username,
      password: DATA_BASE_CONFIGURATION.password,
      database: DATA_BASE_CONFIGURATION.database,
      entities: [User],
      synchronize: DATA_BASE_CONFIGURATION.synchronize,
    },),
    TypeOrmModule.forFeature([User])
  ],
  exports: ['IUserRepository', 'IBaseRepository'],
  providers: [
    Repository,
    {
      provide: 'IBaseRepository',
      useClass: PGRepository
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository
    }, 
  ]
})
export class DataServicesModule { }
