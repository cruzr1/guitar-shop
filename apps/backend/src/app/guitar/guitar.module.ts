import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { HTTP_CLIENT_MAX_REDIRECTS, HTTP_CLIENT_TIMEOUT } from '@guitar-shop/types';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { getJwtOptions } from '@guitar-shop/config/backend';
import { CheckAuthGuard } from '../guards/check-auth.guard';
import { GuitarRepository } from './guitar.repository';
import { GuitarService } from './guitar.service';
import { GuitarController } from './guitar.controller';
import { GuitarModel, GuitarSchema } from './guitar.model';

@Module({
  imports: [
    HttpModule.register({
      timeout: HTTP_CLIENT_TIMEOUT,
      maxRedirects: HTTP_CLIENT_MAX_REDIRECTS,
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    MongooseModule.forFeature([
      {name: GuitarModel.name, schema: GuitarSchema}
    ])
  ],
  providers: [GuitarRepository, GuitarService, CheckAuthGuard],
  controllers: [GuitarController],
})
export class GuitarModule {}
