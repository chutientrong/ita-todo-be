
import * as bcrypt from 'bcrypt';

export class PasswordHelper{

  hashPassword(password: string) : Promise<string>{
    return bcrypt.hash(password, 10);
  }

  comparePassword(password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}