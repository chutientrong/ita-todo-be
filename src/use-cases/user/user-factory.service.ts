import { Injectable } from '@nestjs/common';
import { UpdateUserDto, UserDataDto } from '../../core/dtos';
import { CreateUserRequest } from './models/create-user.request';
import { UserLoggedResponse } from './models/user-logged.response';
import * as bcrypt from 'bcrypt';
import { User } from 'src/frameworks/data-services/entities/user.entity';

@Injectable()
export class UserFactoryService {
  getUserInformation(userData: User) {
    const userInformation = new UserDataDto();
    userInformation.name = userData.firstName + userData.lastName;
    userInformation.email = userData.email;

    return userInformation;
  }

  getUserLoggedResponse(user: User) {
    const userResponse = new UserLoggedResponse();
    // userResponse.id = user.id;
    userResponse.name = user.firstName;
    userResponse.email = user.email;
    return userResponse;
  }

  async createNewUser(createUserDto: CreateUserRequest) {
    const newUser = new User();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;

    newUser.email = createUserDto.email;
    newUser.userName = createUserDto.email;
    newUser.password = await this.hashPassword(createUserDto.password);

    return newUser;
  }

  updateUser(updateUserDto: CreateUserRequest) {
    const newUser = new UpdateUserDto;
    newUser.name = updateUserDto.firstName + updateUserDto.lastName;
    newUser.email = updateUserDto.email;

    return newUser;
  }

  hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  comparePassword(password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}