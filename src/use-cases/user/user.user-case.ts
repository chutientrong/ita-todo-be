import { Injectable, Inject } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { CreateUserRequest } from './models/create-user.request';
import { UserResponse } from './models/user.response';
import { UserLoggedResponse } from './models/user-logged.response';
import { IUserRepository } from 'src/frameworks/data-services/user-repository/user-repository.interface';
import { UserRepository } from 'src/frameworks/data-services/user-repository/user.repository.service';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject('IUserRepository') private userRepository: UserRepository,
    private userFactoryService: UserFactoryService,
  ) { }

  async getAllUsers(): Promise<UserResponse[]> {
    const users = await this.userRepository.getAll();
    return users.map((item) => this.userFactoryService.getUserInformation(item));
  }

  async getUserLogger(id: any): Promise<UserLoggedResponse> {
    const curentUser = await this.userRepository.getById(id);
    return this.userFactoryService.getUserLoggedResponse(curentUser);
  }

  async getUserById(id: any): Promise<UserResponse> {
    const curentUser = await this.userRepository.getById(id);
    return this.userFactoryService.getUserInformation(curentUser);
  }

  async createUser(userRequest: CreateUserRequest): Promise<UserResponse> {
    let createUserDto = await this.userFactoryService.createNewUser(userRequest);
    const createUser = await this.userRepository.create(createUserDto);
    return this.userFactoryService.getUserInformation(createUser);
  }
}