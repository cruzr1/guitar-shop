import { GuitarsRawQuery, IndexGuitarsQuery } from '@guitar-shop/types';

export function adaptDataToService ({type, stringsCount, page, sortByField, sortByOrder}: GuitarsRawQuery): IndexGuitarsQuery {
  return {
    type: type?.split(','),
    stringsCount: stringsCount?.split(',').map((count) => parseInt(count, 10)),
    page,
    sortByField,
    sortByOrder
  }
}
