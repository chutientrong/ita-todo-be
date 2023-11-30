import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { AuthFactoryService } from './authenticate-factory.service';
import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from 'src/frameworks/data-services/user-repository/user-repository.interface';
import { UserRepository } from 'src/frameworks/data-services/user-repository/user.repository.service';

@Injectable()
export class AuthUseCases {
    constructor(
        @Inject('IUserRepository') private userRepository: UserRepository,
        private userFactoryService: AuthFactoryService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userRepository.getByUsername(username);

        const isMatched = await this.userFactoryService.comparePassword(pass, user?.password);
        if (!isMatched) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.userName };
        return {
            accessToken: await this.jwtService.signAsync(payload),
            userId: user.id
        };
    }

}