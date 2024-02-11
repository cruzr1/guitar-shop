import { StateType } from '../../types';
import { NameSpace } from '../../const';

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
