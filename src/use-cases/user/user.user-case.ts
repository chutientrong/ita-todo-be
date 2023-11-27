import { Injectable } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { UserDataService } from 'src/frameworks/data-services/user.service';
import { Prisma } from '@prisma/client';
import { CreateUserRequest } from './models/create-user.request';
import { UserResponse } from './models/user.response';

@Injectable()
export class UserUseCases {
  constructor(
    private userDataServices: UserDataService,
    private userFactoryService: UserFactoryService,
  ) { }

  async getAllUsers(): Promise<UserResponse[]> {
    const users = await this.userDataServices.getAll({
      where: {},
    });

    return users.map((item) => this.userFactoryService.getUserInformation(item));

  }

  getUserById(id: any): Promise<UserResponse> {
    return this.userDataServices.get(id);
  }

  async createUser(userRequest: CreateUserRequest): Promise<UserResponse> {
    let createUserDto = this.userFactoryService.createNewUser(userRequest);
    console.log(createUserDto);
    const createUser = await this.userDataServices.create(createUserDto);
    return this.userFactoryService.getUserInformation(createUser);
  }

  // updateUser(
  //   UserId: string,
  //   updateUserDto: UpdateUserDto,
  // ): Promise<UserDataDto> {
  //   const user = this.userFactoryService.updateUser(updateUserDto);
  //   return this.userDataServices.update(UserId, user);
  // }
}