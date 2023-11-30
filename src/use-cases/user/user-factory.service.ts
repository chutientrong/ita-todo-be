import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto, UpdateUserDto, UserDataResponseDto, UserLoggedResponseDto } from '../../core/dtos';
import { User } from 'src/frameworks/data-services/entities/user.entity';
import { PasswordHelper } from 'src/core/helpers';

@Injectable()
export class UserFactoryService {
  constructor(
    private readonly _passwordHelper: PasswordHelper
  ){
  }
  
  getUserInformation(userData: User) {
    const userInformation = new UserDataResponseDto();
    userInformation.name = userData.firstName + userData.lastName;
    userInformation.email = userData.email;

    return userInformation;
  }

  getUserLoggedResponse(user: User) {
    const userResponse = new UserLoggedResponseDto();
    // userResponse.id = user.id;
    userResponse.name = user.firstName;
    userResponse.email = user.email;
    return userResponse;
  }

  async createNewUser(createUserDto: CreateUserRequestDto) {
    const newUser = new User();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;

    newUser.email = createUserDto.email;
    newUser.userName = createUserDto.email;
    newUser.password = await this._passwordHelper.hashPassword(createUserDto.password);

    return newUser;
  }

  updateUser(updateUserDto: CreateUserRequestDto) {
    const newUser = new UpdateUserDto;
    newUser.name = updateUserDto.firstName + updateUserDto.lastName;
    newUser.email = updateUserDto.email;

    return newUser;
  }

}