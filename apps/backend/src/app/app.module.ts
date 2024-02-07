import { Module } from '@nestjs/common';
import { ConfigBackendModule, getMongoOptions, getJwtOptions } from '@guitar-shop/config/backend';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';

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
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
