import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDataService } from 'src/frameworks/data-services/user.service';
import { AuthFactoryService } from './authenticate-factory.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUseCases {
    constructor(
        private userDataServices: UserDataService,
        private userFactoryService: AuthFactoryService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userDataServices.getByUsername(username);
        
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.username };
        return {
            accessToken: await this.jwtService.signAsync(payload),
            userId: user.id
        };
    }

}