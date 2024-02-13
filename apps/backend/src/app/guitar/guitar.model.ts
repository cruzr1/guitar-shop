import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Guitar, GuitarCategoryType, StringsCountType } from '@guitar-shop/types';
import { GuitarCategory, STRINGS } from '../../../../../libs/shared/types/src/lib/query/guitar.constant';
import { Injectable } from '@nestjs/common';

@Schema({
  collection: 'guitars',
  timestamps: true
})
@Injectable()
export class GuitarModel extends Document implements Guitar {
  @Prop({
    required: true
  })
  public name: string;

  @Prop({
    required: true
  })
  public description: string;

  @Prop({
    required: true
  })
  public createdAt?: Date;

  @Prop({
    required: true
  })
  public imageURL: string;

  @Prop({
    required: true,
    type: () => String,
    enum: Object.values(GuitarCategory)
  })
  public type: GuitarCategoryType;

  @Prop({
    required: true
  })
  public article: string;

  @Prop({
    required: true,
    default: 0,
    type: () => Number
  })
  public price: number;

  @Prop({
    required: true,
    type: () => Number,
    enum: STRINGS
  })
  public stringsCount: StringsCountType
}

export const GuitarSchema = SchemaFactory.createForClass(GuitarModel);
