import { GUITAR_CATEGORIES, NameSpace, STRINGS, SortOrder, SortOrderField } from '../../const';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GuitarCategoryType, SortOrderFieldType, SortOrderType, StringsCountType } from '../../types';

export type GuitarListStateType = {
  guitarTypeFilter: GuitarCategoryType[];
  stringsCountFilter: StringsCountType[]
  activeSortOrder: SortOrderType;
  activeSortField: SortOrderFieldType;
}

export const guitarListState: GuitarListStateType = {
  guitarTypeFilter: GUITAR_CATEGORIES,
  stringsCountFilter: STRINGS,
  activeSortOrder: SortOrder.Asc,
  activeSortField: SortOrderField.CreatedAt,
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
    },
    resetFilter: (state) => {
    state.guitarTypeFilter = GUITAR_CATEGORIES;
    state.stringsCountFilter = STRINGS;
    state.activeSortOrder = SortOrder.Asc;
    state.activeSortField = SortOrderField.CreatedAt;
    }
  },
});

export const {
  updateGuitarTypeFilter,
  updateStringsCountFilter,
  updateSortOrder,
  updateSortField,
  resetFilter
} = guitarList.actions;
