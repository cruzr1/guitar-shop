import { NameSpace } from '../../const';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GuitarCategoryType, SortOrderFieldType, SortOrderType, StringsCountType } from '../../types';

export type GuitarListStateType = {
  guitarTypeFilter: GuitarCategoryType[];
  stringsCountFilter: StringsCountType[]
  activeSortOrder: SortOrderType;
  activeSortField: SortOrderFieldType;
}

export const guitarListState: GuitarListStateType = {
  guitarTypeFilter: ['electric', 'ukulele'],
  stringsCountFilter: [4, 6],
  activeSortOrder: 'asc',
  activeSortField: 'createdAt'
};

export const guitarList = createSlice({
  name: NameSpace.GuitarList,
  initialState: guitarListState,
  reducers: {
    updateGuitarTypeFilter: (state, {payload}: PayloadAction<GuitarCategoryType>) => {
      state.guitarTypeFilter.includes(payload) ?
        state.guitarTypeFilter = state.guitarTypeFilter.filter((type) => type != payload) :
        state.guitarTypeFilter.push(payload);
    },
    updateStringsCountFilter: (state, {payload}: PayloadAction<StringsCountType>) => {
      state.stringsCountFilter.includes(payload) ?
        state.stringsCountFilter = state.stringsCountFilter.filter((count) => count != payload) :
        state.stringsCountFilter.push(payload);
    },
    updateSortOrder: (state, {payload}: PayloadAction<SortOrderType>) => {
      state.activeSortOrder = payload;
    },
    updateSortField: (state, {payload}: PayloadAction<SortOrderFieldType>) => {
      state.activeSortField = payload;
    }
  },
});

export const {
  updateGuitarTypeFilter,
  updateStringsCountFilter,
  updateSortOrder,
  updateSortField
} = guitarList.actions;
