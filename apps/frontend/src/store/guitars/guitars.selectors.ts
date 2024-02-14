import { createSelector } from '@reduxjs/toolkit';
import { selectGuitarId } from '../guitar-form/guitar-form.selectors';
import { StateType } from '../../types';
import { NameSpace } from '../../const';

export const selectGuitars = (state: StateType) => state[NameSpace.Guitars].guitars;
export const selectCurrentPageNumber = (state: StateType) => state[NameSpace.Guitars].currentPage;
export const selectTotalPagesNumber = (state: StateType) => state[NameSpace.Guitars].totalPages;
export const selectGuitarsLoadingStatus = (state: StateType) => state[NameSpace.Guitars].guitarsLoadingStatus;
export const selectGuitarsLoadingErrorStatus = (state: StateType) => state[NameSpace.Guitars].hasDataError;
export const selectGuitarsShouldUpdateStatus = (state: StateType) => state[NameSpace.Guitars].shouldUpdate;
export const selectGuitarItem = createSelector(
  [selectGuitars, selectGuitarId],
  (selectGuitars, selectGuitarId) => selectGuitars.slice().filter(({id}) => id === selectGuitarId)[0])
