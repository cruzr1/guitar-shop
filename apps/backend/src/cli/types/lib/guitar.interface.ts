import { GuitarCategoryType } from './guitar-category.type';
import { StringsCountType } from './strings-count.type';

export interface Guitar {
  id?: string,
  name: string,
  description: string,
  createdAt?: Date,
  imageURL: string,
  type: GuitarCategoryType,
  article: string,
  price: number,
  stringsCount: StringsCountType,
}
