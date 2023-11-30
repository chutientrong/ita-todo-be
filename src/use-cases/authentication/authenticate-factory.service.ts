import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthFactoryService {
    comparePassword(password: string, passwordHash: string): Promise<boolean> {
        return bcrypt.compare(password, passwordHash);
    }
}