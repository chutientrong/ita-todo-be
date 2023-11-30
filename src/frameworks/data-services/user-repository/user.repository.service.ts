import { Injectable } from '@nestjs/common';
import { PGRepository } from '../base-repository.service';
import { User } from '../entities/user.entity';
import { Repository } from "typeorm";
import { IUserRepository } from './user-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserRepository extends PGRepository<User> implements IUserRepository {
  constructor(@InjectRepository(User)
  private usersRepository: Repository<User>,) {
    super(usersRepository)
  }

  async getByUsername(usernameStr: string): Promise<User | null> {

    let user = this.usersRepository.findOneBy({
      userName: usernameStr
    });
    return await user;
  }
}