import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { UserRepository } from 'src/frameworks/data-services/user-repository/user.repository.service';
import { AuthGuard, PasswordHelper } from '@ita-company/ita-package';

@Injectable()
export class AuthUseCases {
    constructor(
        @Inject('IUserRepository') private userRepository: UserRepository,
        private jwtService: AuthGuard,
        private readonly _passwordHelper: PasswordHelper
    ) { }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userRepository.getByUsername(username);

        const isMatched = await this._passwordHelper.comparePassword(pass, user?.password);
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