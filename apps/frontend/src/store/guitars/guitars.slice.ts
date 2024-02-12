import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadGuitarsAction } from '../api-actions';
import { NameSpace, RequestStatus, DEFAULT_PAGE_NUMBER } from '../../const';
import { GuitarType, RequestStatusType } from '../../types'

export type GuitarsStateType = {
  guitars: GuitarType[];
  currentPage: number;
  totalPages: number;
  guitarsLoadingStatus: RequestStatusType;
  hasDataError: boolean;
}

const guitarsState: GuitarsStateType = {
  guitars: [],
  currentPage: DEFAULT_PAGE_NUMBER,
  totalPages: DEFAULT_PAGE_NUMBER,
  guitarsLoadingStatus: RequestStatus.Idle,
  hasDataError: false
};

export const guitars = createSlice({
  name: NameSpace.Guitars,
  initialState: guitarsState,
  reducers: {
    loadGuitars: (state, {payload}: PayloadAction<GuitarType[]>) => {
      state.guitars = payload;
    },
    updateCurrentPageNumber: (state, {payload}: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    updateTotalPagesNumber: (state, {payload}: PayloadAction<number>) => {
      state.totalPages = payload;
    },
    addGuitar: (state, {payload}: PayloadAction<GuitarType>) => {
      state.guitars.push(payload);
    },
    updateGuitar: (state, {payload}: PayloadAction<GuitarType>) => {
      state.guitars.splice(state.guitars.findIndex(({id: guitarId}) => guitarId === payload.id), 1, payload);
    },
    removeGuitar: (state, {payload}: PayloadAction<string>) => {
      state.guitars = state.guitars.filter((guitar) => guitar.id !== payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadGuitarsAction.pending, (state) => {
        state.guitarsLoadingStatus = RequestStatus.Pending;
        state.hasDataError = false;
      })
      .addCase(loadGuitarsAction.fulfilled, (state) => {
        state.guitarsLoadingStatus = RequestStatus.Fulfilled;
      })
      .addCase(loadGuitarsAction.rejected, (state) => {
        state.guitarsLoadingStatus = RequestStatus.Rejected;
        state.hasDataError = true;
      })
  }
})

export const {
  loadGuitars,
  updateCurrentPageNumber,
  updateTotalPagesNumber,
  addGuitar,
  updateGuitar,
  removeGuitar
} = guitars.actions;
