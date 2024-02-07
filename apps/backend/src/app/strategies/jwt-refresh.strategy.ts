import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConfig } from '@guitar-shop/config/backend';
import { UserService } from '../user/user.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { RefreshTokenPayload} from '@guitar-shop/types';
import { RefreshTokenService } from '../refresh-token/refresh-token.service';
import { REFRESH_TOKEN_NOT_EXISTS } from '../user/user.constant';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor (
    @Inject(jwtConfig.KEY) private readonly jwtOptions: ConfigType<typeof jwtConfig>,
    private readonly userService: UserService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtOptions.refreshTokenSecret,
    });
  }

  public async validate(payload: RefreshTokenPayload): Promise<UserEntity> {
    if(! await this.refreshTokenService.isExists(payload.tokenId)) {
      throw new UnauthorizedException(REFRESH_TOKEN_NOT_EXISTS);
    }
    await this.refreshTokenService.deleteRefreshSession(payload.tokenId);
    await this.refreshTokenService.deleteExpiredRefreshTokens();
    return await this.userService.getUserByEmail(payload.email);
  }
}
