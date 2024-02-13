import { createSelector } from '@reduxjs/toolkit';
import { selectGuitarId } from '../guitar-form/guitar-form.selectors';
import { StateType } from '../../types';
import { NameSpace } from '../../const';
import { selectActiveSortField, selectActiveSortOrder } from '../guitar-list/guitar-list.selectors';

export const selectGuitars = (state: StateType) => state[NameSpace.Guitars].guitars;
export const selectCurrentPageNumber = (state: StateType) => state[NameSpace.Guitars].currentPage;
export const selectTotalPagesNumber = (state: StateType) => state[NameSpace.Guitars].totalPages;
export const selectGuitarsLoadingStatus = (state: StateType) => state[NameSpace.Guitars].guitarsLoadingStatus;
export const selectGuitarsLoadingErrorStatus = (state: StateType) => state[NameSpace.Guitars].hasDataError;
export const selectGuitarItem = createSelector(
  [selectGuitars, selectGuitarId],
  (selectGuitars, selectGuitarId) => selectGuitars.filter(({id}) => id === selectGuitarId)[0]
)
export const selectGuitarsSorted = createSelector(
  [selectGuitars, selectActiveSortField, selectActiveSortOrder],
  (selectGuitars, selectActiveSortField, selectActiveSortOrder) => {
    return selectGuitars.slice().sort((a, b) => {
      const sortOperation = selectActiveSortOrder === 'asc' ? 1 : -1;
      if (selectActiveSortField === 'createdAt') {
        return a.createdAt > b.createdAt ? sortOperation : -sortOperation;
      }
      return (a.price - b.price) * sortOperation;
    })
  }
)
