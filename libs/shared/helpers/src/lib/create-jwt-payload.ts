import { TokenPayload, User } from '@guitar-shop/types';

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user.id,
    email: user.email,
    name: user.name,
  }
}
