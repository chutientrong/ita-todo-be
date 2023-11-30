import { Injectable, Inject } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { IUserRepository } from 'src/frameworks/data-services/user-repository/user-repository.interface';
import { UserRepository } from 'src/frameworks/data-services/user-repository/user.repository.service';
import { CreateUserRequestDto, UserDataResponseDto, UserLoggedResponseDto } from 'src/core';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject('IUserRepository') private userRepository: UserRepository,
    private userFactoryService: UserFactoryService,
  ) { }

  async getAllUsers(): Promise<UserDataResponseDto[]> {
    const users = await this.userRepository.getAll();
    return users.map((item) => this.userFactoryService.getUserInformation(item));
  }

  async getUserLogger(id: any): Promise<UserLoggedResponseDto> {
    const curentUser = await this.userRepository.getById(id);
    return this.userFactoryService.getUserLoggedResponse(curentUser);
  }

  async getUserById(id: any): Promise<UserDataResponseDto> {
    const curentUser = await this.userRepository.getById(id);
    console.log(curentUser)

    return this.userFactoryService.getUserInformation(curentUser);
  }

  async createUser(userRequest: CreateUserRequestDto): Promise<UserDataResponseDto> {
    let createUserDto = await this.userFactoryService.createNewUser(userRequest);
    const createUser = await this.userRepository.create(createUserDto);
    return this.userFactoryService.getUserInformation(createUser);
  }
}