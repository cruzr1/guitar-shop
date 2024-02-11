import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from "./user.controller";
import { JwtAccessStrategy, JwtRefreshStrategy, LocalStrategy} from "../strategies";
import { RefreshTokenModule } from "../refresh-token/refresh-token.module";
import { UserSchema, UserModel} from './user.model';
import { getJwtOptions } from "@guitar-shop/config/backend";
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { MailModule } from '../mail/mail.module';


@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    MongooseModule.forFeature([
      {name: UserModel.name, schema: UserSchema}
    ]),
    RefreshTokenModule,
    MailModule
  ],
  providers: [
    JwtAccessStrategy,
    LocalStrategy,
    JwtRefreshStrategy,
    UserService,
    UserRepository
  ],
  controllers: [UserController],
})
export class UserModule {}
