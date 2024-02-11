import { Module } from '@nestjs/common';
import { ConfigBackendModule, getMongoOptions, getJwtOptions } from '@guitar-shop/config/backend';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { GuitarModule } from './guitar/guitar.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigBackendModule,
    MongooseModule.forRootAsync(
      getMongoOptions()
    ),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    UserModule,
    GuitarModule,
    MailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
