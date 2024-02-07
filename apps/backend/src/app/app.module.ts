import { Module } from '@nestjs/common';
import { ConfigBackendModule, getMongoOptions } from '@guitar-shop/config/backend';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigBackendModule,
    MongooseModule.forRootAsync(
      getMongoOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
