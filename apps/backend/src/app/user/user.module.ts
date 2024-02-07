import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RefreshTokenModule } from "../refresh-token/refresh-token.module";
import { UserSchema, UserModel} from './user.model';
import { getJwtOptions } from "@guitar-shop/config/backend";


@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    MongooseModule.forFeature([
      {name: UserModel.name, schema: UserSchema}
    ]),
    RefreshTokenModule
  ],
  providers: [
    JwtAccessStrategy,
    LocalStrategy,
    JwtRefreshStrategy
  ],
  controllers: [],
})
export class UserModule {}
