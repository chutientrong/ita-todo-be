import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { UserRepository } from 'src/frameworks/data-services/user-repository/user.repository.service';
import { CreateUserRequestDto, UpdateUserDto, UserDataResponseDto, UserLoggedResponseDto } from 'src/core';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject('IUserRepository') private userRepository: UserRepository,
    private userFactoryService: UserFactoryService,
  ) { }

  async getAllUsersAsync(): Promise<UserDataResponseDto[]> {
    const users = await this.userRepository.getAll();
    return users.map((item) => this.userFactoryService.getUserInformation(item));
  }

  async getUserLoggeAsync(id: any): Promise<UserLoggedResponseDto> {
    const curentUser = await this.userRepository.getById(id);
    return this.userFactoryService.getUserLoggedResponse(curentUser);
  }

  async getUserByIdAsync(id: any): Promise<UserDataResponseDto> {
    const curentUser = await this.userRepository.getById(id);
    return this.userFactoryService.getUserInformation(curentUser);
  }

  async createUserAsync(userRequest: CreateUserRequestDto): Promise<UserDataResponseDto> {
    let createUserDto = await this.userFactoryService.createNewUser(userRequest);
    const createUser = await this.userRepository.create(createUserDto);
    return this.userFactoryService.getUserInformation(createUser);
  }

  async updateUserAsync(userId: number, userRequest: UpdateUserDto) {
    let updateInformation = await this.userFactoryService.updateUser(userRequest);
    await this.userRepository.update(userId, updateInformation)
  }

  async deleteUserAsync(userId: any) {
    await this.userRepository.deleteUser(userId);
  }

}