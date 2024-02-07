import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../user/user.service';
import { USERMAIL_FIELD } from '../user/user.constant';
import { User } from '@guitar-shop/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor (
    private readonly userService: UserService
  ) {
    super({usernameField: USERMAIL_FIELD});
  }

  public async validate(email: string, password: string): Promise<User> {
    return (await this.userService.verifyUser({email, password})).toPOJO();
  }
}
