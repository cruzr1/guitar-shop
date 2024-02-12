import { PipeTransform } from '@nestjs/common';
import { GuitarsQuery } from '@guitar-shop/types';

export class GuitarsQueryAdapterPipe implements PipeTransform {
  public transform(value: GuitarsQuery) {
    console.log(value)
    return {
      type: value.type?.split(','),
      stringsCount: value.stringsCount?.split(','),
      page: value.page,
      sortByField: value.sortByField,
      sortByOrder: value.sortByOrder,

    }
  }
}
