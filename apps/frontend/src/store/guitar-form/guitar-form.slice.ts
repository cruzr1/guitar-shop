import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {GuitarType, RequestStatusType, GuitarCategoryType, StringsCountType } from '../../types';
import { GuitarCategory, NameSpace, RequestStatus, STRINGS } from '../../const';
import { postGuitarFormAction, getGuitarFormAction} from '../api-actions';

export type GuitarFormStateType = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  imageURL: string;
  type: GuitarCategoryType;
  stringsCount: StringsCountType
  article: string,
  price: number;
  guitarFormLoadingStatus: RequestStatusType;
  hasGuitarFormError: boolean;
}

const guitarFormState: GuitarFormStateType = {
  id: '',
  name: '',
  description: '',
  createdAt: new Date(),
  imageURL: '',
  type: GuitarCategory.Electric.filterId,
  stringsCount: STRINGS[0],
  article: '',
  price: 0,
  guitarFormLoadingStatus: RequestStatus.Idle,
  hasGuitarFormError: false
};

export const guitarForm = createSlice({
  name: NameSpace.GuitarForm,
  initialState: guitarFormState,
  reducers: {
    setGuitarId: (state, {payload}: PayloadAction<string>) => {
      state.id = payload;
    },
    setGuitarName: (state, {payload}: PayloadAction<string>) => {
      state.name = payload;
    },
    setDescription: (state, {payload}: PayloadAction<string>) => {
      state.description = payload;
    },
    setCreatedDate: (state, {payload}: PayloadAction<Date>) => {
      state.createdAt = payload;
    },
    setImageURL: (state, {payload}: PayloadAction<string>) => {
      state.imageURL = payload;
    },
    setGuitarCategoryType: (state, {payload}: PayloadAction<GuitarCategoryType>) => {
      state.type = payload;
    },
    setStringsCount: (state, {payload}: PayloadAction<StringsCountType>) => {
      state.stringsCount = payload;
    },
    setGuitarFormError: (state, {payload}: PayloadAction<boolean>) => {
      state.hasGuitarFormError = payload;
    },
    setArticle: (state, {payload}: PayloadAction<string>) => {
      state.article = payload;
    },
    setPrice: (state, {payload}: PayloadAction<number>) => {
      state.price = payload;
    },
    fillGuitarFormData: (state, {payload}: PayloadAction<GuitarType>) => {
      state.id = payload.id;
      state.name = payload.name;
      state.description = payload.description;
      state.createdAt = payload.createdAt;
      state.imageURL = payload.imageURL;
      state.type = payload.type;
      state.stringsCount = payload.stringsCount;
      state.article = payload.article;
      state.price = payload.price;
      state.guitarFormLoadingStatus = RequestStatus.Idle;
      state.hasGuitarFormError = false;
    },
    resetGuitarFormData: (state) => {
      state.id = '';
      state.name = '';
      state.description = '';
      state.createdAt =  new Date();
      state.imageURL = '';
      state.type = GuitarCategory.Electric.filterId;
      state.stringsCount = STRINGS[0];
      state.article = '';
      state.price = 0;
      state.guitarFormLoadingStatus = RequestStatus.Idle;
      state.hasGuitarFormError = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(postGuitarFormAction.pending, (state) => {
        state.guitarFormLoadingStatus = RequestStatus.Pending;
        state.hasGuitarFormError = false;
      })
      .addCase(postGuitarFormAction.rejected, (state) => {
        state.guitarFormLoadingStatus = RequestStatus.Rejected;
        state.hasGuitarFormError = true;
      })
      .addCase(postGuitarFormAction.fulfilled, (state) => {
        state.guitarFormLoadingStatus = RequestStatus.Fulfilled;
      })
      .addCase(getGuitarFormAction.pending, (state) => {
        state.guitarFormLoadingStatus = RequestStatus.Pending;
        state.hasGuitarFormError = false;
      })
      .addCase(getGuitarFormAction.rejected, (state) => {
        state.guitarFormLoadingStatus = RequestStatus.Rejected;
        state.hasGuitarFormError = true;
      })
      .addCase(getGuitarFormAction.fulfilled, (state) => {
        state.guitarFormLoadingStatus = RequestStatus.Fulfilled;
      })
  }
});

export const {
  setGuitarId,
  setGuitarName,
  setDescription,
  setCreatedDate,
  setImageURL,
  setGuitarCategoryType,
  setStringsCount,
  setArticle,
  setPrice,
  setGuitarFormError,
  fillGuitarFormData,
  resetGuitarFormData
} = guitarForm.actions;

