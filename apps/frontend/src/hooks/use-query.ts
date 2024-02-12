import { IndexGuitarsQuery } from 'apps/backend/src/app/guitar/query/index-guitars.query';
import {selectGuitarTypeFilter, selectStringsCountFilter, selectActiveSortField, selectActiveSortOrder} from '../store/guitar-list/guitar-list.selectors'
import { useAppSelector } from './hooks';
import { DEFAULT_PAGE_NUMBER } from '../const';
import { GuitarsQuery } from '../types';

export default function useQuery({type, stringsCount, page, sortByField, sortByOrder}: GuitarsQuery):GuitarsQuery {
  return {
    type: type || useAppSelector(selectGuitarTypeFilter),
    stringsCount: stringsCount || useAppSelector(selectStringsCountFilter),
    page: page || DEFAULT_PAGE_NUMBER,
    sortByField: sortByField || useAppSelector(selectActiveSortField),
    sortByOrder: sortByOrder || useAppSelector(selectActiveSortOrder),
  }
}
