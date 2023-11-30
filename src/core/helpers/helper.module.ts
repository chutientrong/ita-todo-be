import { Module } from '@nestjs/common';
import { PasswordHelper } from './password.helper';

@Module({
    imports: [],
    providers: [PasswordHelper],
    exports: [PasswordHelper],
})
export class HelperModule { }