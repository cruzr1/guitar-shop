import { MailerModule } from '@nestjs-modules/mailer';
import { getMailerAsyncOptions } from '@guitar-shop/config/backend';
import { MailService } from './mail.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MailerModule.forRootAsync(getMailerAsyncOptions())
  ],
  providers: [
    MailService
  ],
  exports: [
    MailService
  ]
})
export class MailModule {}
