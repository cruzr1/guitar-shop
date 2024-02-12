import { DEFAULT_PAGE_NUMBER } from '../const';
import { GuitarsQuery } from '../types';

export const adaptGuitarsQueryToServer =(query: GuitarsQuery) => {
  return {
    type: query.type?.join(',') || '',
    stringsCount: query.stringsCount?.join(',') || '',
    page: query.page || DEFAULT_PAGE_NUMBER,
    sortByField: query.sortByField || 'createdAt',
    sortByOrder: query.sortByOrder || 'asc'
  }
}
