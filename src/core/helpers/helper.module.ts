import { Module } from '@nestjs/common';
import { PasswordHelper } from './password.helper';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../common/constants';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '360s' },
        })],
    providers: [PasswordHelper],
    exports: [PasswordHelper],
})
export class HelperModule { }