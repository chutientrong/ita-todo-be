import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserDataDto } from '../../core/dtos';
import { User } from '@prisma/client';
import { CreateUserRequest } from './models/create-user.request';
import { UserLoggedResponse } from './models/user-logged.response';

@Injectable()
export class UserFactoryService {
  getUserInformation(userData: User) {
    const userInformation = new UserDataDto();
    userInformation.name = userData.name;
    userInformation.email = userData.email;

    return userInformation;
  }

  getUserLoggedResponse(user: User){
    const userResponse = new UserLoggedResponse();
    userResponse.id = user.id;
    userResponse.name = user.name;
    userResponse.email = user.email;
    return userResponse;
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