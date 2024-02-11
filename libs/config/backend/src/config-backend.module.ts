import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import applicationConfig from './lib/application/application.config';
import mongoConfig from './lib/mongodb/mongodb.config';
import jwtConfig from './lib/jwt/jwt.config';
import mailerConfig from './lib/mailer/mailer.config';

const ENV_BACKEND_FILE_PATH = 'apps/backend/.backend.env'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [applicationConfig, mongoConfig, jwtConfig, mailerConfig],
      envFilePath: ENV_BACKEND_FILE_PATH
    }),
  ]
})
export class ConfigBackendModule {}
