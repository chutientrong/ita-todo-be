import { Module } from '@nestjs/common';
import { PasswordHelper } from './password.helper';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../common/constants';
import { AuthGuard } from '../auth.guard';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' },
        })],
    providers: [PasswordHelper, AuthGuard],
    exports: [PasswordHelper, AuthGuard],
})
export class HelperModule { }