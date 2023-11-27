import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserDataDto } from '../../core/dtos';
import { User } from '@prisma/client';
import { CreateUserRequest } from './models/create-user.request';

@Injectable()
export class UserFactoryService {
  getUserInformation(userData: User) {
    const userInformation = new UserDataDto();
    userInformation.name = userData.name;
    userInformation.email = userData.email;

    return userInformation;
  }

  createNewUser(createAuthorDto: CreateUserRequest) {
    const newUser = new CreateUserDto();
    newUser.name = createAuthorDto.name;
    newUser.email = createAuthorDto.email;
    newUser.username = createAuthorDto.email;
    newUser.password = createAuthorDto.name;

    return newUser;
  }

  updateUser(updateAuthorDto: CreateUserRequest) {
    const newUser = new UpdateUserDto;
    newUser.name = updateAuthorDto.name;
    newUser.email = updateAuthorDto.email;

    return newUser;
  }
}