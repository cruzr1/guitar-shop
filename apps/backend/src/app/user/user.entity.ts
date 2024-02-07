import { User } from '@guitar-shop/types';
import { genSalt, hash, compare } from 'bcrypt';
import { SALT_ROUNDS } from './user.constant';

export class UserEntity implements User {
  public id?: string;
  public email: string;
  public name: string;
  public passwordHash: string;


  constructor(user: User) {
    this.populate(user);
  }

  public toPOJO ():User {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
    };
  }

  public populate(data: User): void {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.passwordHash = data.passwordHash;
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  static fromObject(data: User): UserEntity {
    return new UserEntity(data);
  }
}
