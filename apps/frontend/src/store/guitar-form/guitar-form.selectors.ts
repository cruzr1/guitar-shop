import { GuitarType, StateType } from '../../types';
import { NameSpace } from '../../const';
import { createSelector } from '@reduxjs/toolkit';

export const selectGuitarDetailsLoadingStatus = (state: StateType) => state[NameSpace.GuitarForm].guitarFormLoadingStatus;
export const selectGuitarDetailsLoadingErrorStatus = (state: StateType) => state[NameSpace.GuitarForm].hasGuitarFormError;
export const selectGuitarId = (state: StateType) => state[NameSpace.GuitarForm].id;
export const selectGuitarName = (state: StateType) => state[NameSpace.GuitarForm].name;
export const selectGuitarDescription = (state: StateType) => state[NameSpace.GuitarForm].description;
export const selectGuitarCreatedDate = (state: StateType) => state[NameSpace.GuitarForm].createdAt;
export const selectGuitarImageURL = (state: StateType) => state[NameSpace.GuitarForm].imageURL;
export const selectGuitarCategoryType = (state: StateType) => state[NameSpace.GuitarForm].type;
export const selectGuitarStringsCount = (state: StateType) => state[NameSpace.GuitarForm].stringsCount;
export const selectGuitarArticle = (state: StateType) => state[NameSpace.GuitarForm].article;
export const selectGuitarPrice = (state: StateType) => state[NameSpace.GuitarForm].price;
export const selectGuitarFormError = (state: StateType) => state[NameSpace.GuitarForm].hasGuitarFormError;
export const selectGuitarForm = createSelector(
  [
    selectGuitarId,
    selectGuitarArticle,
    selectGuitarCategoryType,
    selectGuitarCreatedDate,
    selectGuitarDescription,
    selectGuitarImageURL,
    selectGuitarName,
    selectGuitarPrice,
    selectGuitarStringsCount
  ], (
    selectGuitarId,
    selectGuitarArticle,
    selectGuitarCategoryType,
    selectGuitarCreatedDate,
    selectGuitarDescription,
    selectGuitarImageURL,
    selectGuitarName,
    selectGuitarPrice,
    selectGuitarStringsCount
  ): GuitarType => ({
    id: selectGuitarId,
    name: selectGuitarName,
    description: selectGuitarDescription,
    createdAt: selectGuitarCreatedDate,
    imageURL: selectGuitarImageURL,
    type: selectGuitarCategoryType,
    stringsCount: selectGuitarStringsCount,
    article: selectGuitarArticle,
    price: selectGuitarPrice,
  })
)
