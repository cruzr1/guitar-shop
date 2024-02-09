import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { guitarList } from './guitar-list/guitar-list.slice';
import { guitars } from './guitars/guitars.slice';
import { guitarForm } from './guitar-form/guitar-form.slice';
import { error } from './error/error.slice';
import { user } from './user/user.slice';


export const rootReducer = combineReducers({
  [NameSpace.GuitarList]: guitarList.reducer,
  [NameSpace.Guitars]: guitars.reducer,
  [NameSpace.GuitarForm]: guitarForm.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Error]: error.reducer,
});
