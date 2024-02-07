import { Module } from '@nestjs/common';
import { ConfigBackendModule, getMongoOptions, getJwtOptions } from '@guitar-shop/config/backend';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigBackendModule,
    MongooseModule.forRootAsync(
      getMongoOptions()
    ),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
