import { Guitar, GuitarCategoryType, StringsCountType } from '@guitar-shop/types';

export class GuitarEntity implements Guitar {
  public id?: string;
  public name: string;
  public description: string;
  public createdAt?: Date;
  public imageURL: string;
  public type: GuitarCategoryType;
  public article: string;
  public price: number;
  public stringsCount: StringsCountType


  constructor(guitar: Guitar) {
    this.populate(guitar);
  }

  public toPOJO ():Guitar {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      imageURL: this.imageURL,
      type: this.type,
      article: this.article,
      price: this.price,
      stringsCount: this.stringsCount
    };
  }

  public populate(data: Guitar): void {
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

  static fromObject(data: Guitar): GuitarEntity {
    return new GuitarEntity(data);
  }
}
