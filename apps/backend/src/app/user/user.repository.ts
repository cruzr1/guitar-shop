import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { BaseMongoRepository, User } from '@guitar-shop/types';
import { UserModel } from './user.model';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository extends BaseMongoRepository<UserEntity, User> {
  constructor(
    @InjectModel(UserModel.name) userModel: Model<UserModel>
  ) {
    super(userModel, UserEntity.fromObject);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const document = await this.model.findOne({email}).exec();
    return this.createEntityFromDocument(document);
  }
}
