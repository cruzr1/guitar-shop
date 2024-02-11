import { Injectable, Inject } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EMAIL_ADD_USER_SUBJECT, USER_TEMPLATE_PATH } from './mail.constant';
import { ConfigType } from '@nestjs/config';
import { MailerConfig } from '@guitar-shop/config/backend';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class MailService {
  constructor (
    private readonly mailerService: MailerService,
    @Inject(MailerConfig.KEY)
    private readonly mailerConfig: ConfigType<typeof MailerConfig>
  ) {}

  public async sendNotifyNewUser({name, email, password}: CreateUserDto) {
    await this.mailerService.sendMail({
      from: this.mailerConfig.mailFrom,
      to: email,
      subject: EMAIL_ADD_USER_SUBJECT,
      template: USER_TEMPLATE_PATH,
      context: {
        email: `${email}`,
        name: `${name}`,
        password: `${password}`,
      }
    })
  }
}
