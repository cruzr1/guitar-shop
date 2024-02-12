import { defaultClasses, getModelForClass, prop, modelOptions, Severity } from '@typegoose/typegoose'
import { Guitar, GuitarCategoryType, StringsCountType } from '@guitar-shop/types';
import { GuitarCategory, STRINGS } from '../../app/guitar/guitar.constant';


@modelOptions({
  schemaOptions: {
    collection: 'guitars'
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})
export class GuitarCLIEntity extends defaultClasses.TimeStamps implements Guitar {
  @prop({
    required: false
  })
  public id: string;

  @prop({
    required: true
  })
  public name: string;

  @prop({
    required: true
  })
  public description: string;

  @prop({
    required: false
  })
  public createdAt?: Date;

  @prop({
    required: true
  })
  public imageURL: string;

  @prop({
    required: true,
    type: () => String,
    enum: Object.values(GuitarCategory)
  })
  public type: GuitarCategoryType;

  @prop({
    required: true
  })
  public article: string;

  @prop({
    required: true,
    default: 0,
    type: () => Number
  })
  public price: number;

  @prop({
    required: true,
    type: () => Number,
    enum: STRINGS
  })
  public stringsCount: StringsCountType

  constructor(data: Guitar) {
    super();

    this.id = data.id || '';
    this.name = data.name;
    this.description = data.description;
    this.createdAt = data.createdAt || new Date();
    this.imageURL = data.imageURL;
    this.type = data.type;
    this.article = data.article;
    this.price = data.price;
    this.stringsCount = data.stringsCount
  }
}

export const GuitarCLIModel = getModelForClass(GuitarCLIEntity);
