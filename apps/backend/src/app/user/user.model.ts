import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@guitar-shop/types';

@Schema({
  collection: 'users',
  timestamps: true
})
export class UserModel extends Document implements User {
  @Prop({
    required: true
  })
  public email: string;

  @Prop({
    required: true
  })
  public name: string;

  @Prop({
    required: true
  })
  public passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

