import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { StateType } from '../../types';

export const selectGuitarTypeFilter = (state: StateType) => state[NameSpace.GuitarList].guitarTypeFilter;
export const selectActiveSortOrder = (state: StateType) => state[NameSpace.GuitarList].activeSortOrder;
export const selectActiveSortField = (state: StateType) => state[NameSpace.GuitarList].activeSortField;
export const selectStringsCountFilter = (state: StateType) => state[NameSpace.GuitarList].stringsCountFilter;

export const selectQueryParams = createSelector([
  selectGuitarTypeFilter,
  selectActiveSortField,
  selectActiveSortOrder,
  selectStringsCountFilter,
], (
  selectGuitarTypeFilter,
  selectActiveSortField,
  selectActiveSortOrder,
  selectStringsCountFilter,
) => ({
  type: selectGuitarTypeFilter,
  stringsCount: selectStringsCountFilter,
  sortByField: selectActiveSortField,
  sortByOrder: selectActiveSortOrder
})
)
