import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUserRequestDto, UpdateUserDto, UserDataResponseDto, UserLoggedResponseDto } from '../../core/dtos';
import { User } from 'src/frameworks/data-services/entities/user.entity';
import { PasswordHelper } from '@ita-company/ita-package';

@Injectable()
export class UserFactoryService {
  constructor(
    private readonly _passwordHelper: PasswordHelper
  ) {
  }

  getUserInformation(userData: User) {
    const userInformation = new UserDataResponseDto();
    userInformation.name = userData.firstName + userData.lastName;
    userInformation.email = userData.email;

    return userInformation;
  }

  getUserLoggedResponse(user: User) {
    const userResponse = new UserLoggedResponseDto();
    userResponse.id = user.id;
    userResponse.firstName = user.firstName;
    userResponse.lastName = user.lastName;
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

  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User;
    newUser.firstName = updateUserDto.firstName;
    newUser.lastName = updateUserDto.lastName;
    newUser.email = updateUserDto.email;

    return newUser;
  }

}