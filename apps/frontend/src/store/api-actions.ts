import {  AxiosInstance } from 'axios';
import { generatePath } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {EntitiesWithPaginationRdo} from '@guitar-shop/types';
import { loadGuitars, updateCurrentPageNumber, updateGuitarList, updateTotalPagesNumber } from './guitars/guitars.slice';
import { fillGuitarFormData } from './guitar-form/guitar-form.slice';
import { setError } from './error/error.slice';
import { updateAuthStatus, setEmail } from './user/user.slice';
import { setToken} from '../services/token';
import { redirectToRoute } from './action';
import { adaptGuitarsQueryToServer } from '../adapters/adapters-to-server';
import { NameSpace, Action, APIPath, ErrorMessage, TIMEOUT_SHOW_ERROR, AuthStatus, AppRoute } from '../const';
import { GuitarType, AppDispatchType, StateType, LoginType, LoggedUserType, SigninType, UserType, NewGuitarType, GuitarsQuery } from '../types';


export const clearErrorAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  }
>(
  `${NameSpace.Error}/${Action.Delete}`,
  (errorMessage, {dispatch}) => {
    dispatch(setError(errorMessage));
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const loadGuitarsAction = createAsyncThunk<void | undefined, GuitarsQuery, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Guitars}/${Action.Get}`,
  async (query, {dispatch, extra: axiosApi}) => {
    try {
      const {data: {entities, totalPages, currentPage}} = await axiosApi.get<EntitiesWithPaginationRdo<GuitarType>>(APIPath.Guitars, {
        params : {...adaptGuitarsQueryToServer(query)}
      });
      dispatch(loadGuitars(entities));
      dispatch(updateCurrentPageNumber(currentPage));
      dispatch(updateTotalPagesNumber(totalPages));
    } catch (message) {
      dispatch(clearErrorAction(`${ErrorMessage.FailedLoadGuitars}: ${message}`));

    }
  },
);

export const getGuitarFormAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.GuitarForm}/${Action.Get}`,
  async (guitarId, {dispatch, extra: axiosApi}) => {
    try {
      const {data} = await axiosApi.get<GuitarType>(generatePath(APIPath.GuitarId, {guitarId}));
      dispatch(fillGuitarFormData(data));
    } catch (message) {
      dispatch(clearErrorAction(`${ErrorMessage.FailedDeleteGuitarForm}: ${message}`));

    }
  },
);

export const postGuitarFormAction = createAsyncThunk<void, NewGuitarType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.GuitarForm}/${Action.Create}`,
  async (guitarForm, {dispatch, extra: axiosApi}) => {
    try {
      await axiosApi.post<GuitarType>(APIPath.Guitars, guitarForm);
      dispatch(updateGuitarList(true))
    } catch (message) {
      dispatch(clearErrorAction(`${ErrorMessage.FailedPostGuitarForm}: ${message}`));
    }
  },
);

export const updateGuitarFormAction = createAsyncThunk<void, GuitarType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.GuitarForm}/${Action.Update}`,
  async (guitarForm, {dispatch, extra: axiosApi}) => {
    try {
      await axiosApi.patch<GuitarType>(
        generatePath(APIPath.GuitarId, {guitarId: guitarForm.id}),
        guitarForm
      );
      dispatch(updateGuitarList(true))
    } catch (message) {
      dispatch(clearErrorAction(`${ErrorMessage.FailedUpdateGuitarForm}: ${message}`));
    }
  },
);

export const removeGuitarFormAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.GuitarForm}/${Action.Update}`,
  async (guitarId, {dispatch, extra: axiosApi}) => {
    try {
      await axiosApi.delete<void>(generatePath(APIPath.GuitarId, {guitarId}));
      dispatch(updateGuitarList(true))
    } catch (message) {
      dispatch(clearErrorAction(`${ErrorMessage.FailedDeleteGuitarForm}: ${message}`));
    }
  },
);

export const signinUserAction = createAsyncThunk<void, SigninType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.User}/${Action.Create}`,
  async (newUser, {dispatch, extra: axiosApi}) => {
    try {
      await axiosApi.post<UserType>(APIPath.Signin, newUser);
      dispatch(updateAuthStatus(AuthStatus.Auth));
      dispatch(setEmail(newUser.email));
      dispatch(redirectToRoute(AppRoute.Products));
    } catch (message) {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(`${ErrorMessage.FailedUserSignin}: ${message}`));
    }
  },
);

export const authoriseUserAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.User}/${Action.Get}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    try {
      const {data: {email}} = await axiosApi.post<UserType>(APIPath.Verify, {});
      dispatch(updateAuthStatus(AuthStatus.Auth));
      dispatch(setEmail(email));
    } catch (message) {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(`${ErrorMessage.UserUnauthorised}: ${message}`));
    }
  },
);

export const loginUserAction = createAsyncThunk<void, LoginType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.User}/${Action.Login}`,
  async (loginUser, {dispatch, extra: axiosApi}) => {
    try {
      const {data: {accessToken}} = await axiosApi.post<LoggedUserType>(APIPath.Login, loginUser);
      setToken(accessToken);
      dispatch(updateAuthStatus(AuthStatus.Auth));
      dispatch(setEmail(loginUser.email));
      dispatch(redirectToRoute(AppRoute.Products));
    } catch (message) {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(`${ErrorMessage.FailedUserLogin}: ${message}`));
    }
  }
);
