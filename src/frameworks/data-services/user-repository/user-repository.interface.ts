import { IBaseRepository } from "../base-repository.interface";
import { User } from "../entities/user.entity";

export interface IUserRepository extends IBaseRepository<User>{
    getByUsername(usernameStr: string): Promise<User | null>;
}