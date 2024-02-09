import { AxiosInstance } from 'axios';
import { generatePath } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addGuitar, loadGuitars, removeGuitar, updateGuitar } from './guitars/guitars.slice';
import { setError } from './error/error.slice';
import { updateAuthStatus, setEmail } from './user/user.slice';
import { setToken} from '../services/token';
import { redirectToRoute } from './action';
import { NameSpace, Action, APIPath, ErrorMessage, TIMEOUT_SHOW_ERROR, AuthStatus, AppRoute } from '../const';
import { GuitarType, AppDispatchType, StateType, LoginType, LoggedUserType, SigninType, UserType, NewGuitarType } from '../types';


export const clearErrorAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  }
>(
  `${NameSpace.Error}/${Action.Delete}`,
  (errorMessage, {dispatch}) => {
    setError(errorMessage);
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const loadGuitarsAction = createAsyncThunk<void | undefined, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Guitars}/${Action.Get}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    try {
      const {data} = await axiosApi.get<GuitarType[]>(APIPath.Guitars);
      dispatch(loadGuitars(data))
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedLoadGuitars));
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
      const {data} = await axiosApi.post<GuitarType>(APIPath.Guitars, guitarForm);
      dispatch(addGuitar(data));
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedPostGuitarForm),);
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
      const {data} = await axiosApi.patch<GuitarType>(
        generatePath(APIPath.GuitarId, {guitarId: guitarForm.id}),
        guitarForm
      );
      dispatch(updateGuitar(data));
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedUpdateGuitarForm),);
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
      dispatch(removeGuitar(guitarId));
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedDeleteGuitarForm),);
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
    } catch {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(ErrorMessage.FailedUserSignin));
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
      const {data: {email}} = await axiosApi.get<UserType>(APIPath.Verify);
      dispatch(updateAuthStatus(AuthStatus.Auth));
      dispatch(setEmail(email));
    } catch {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(ErrorMessage.UserUnauthorised));
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
      const {data: {token}} = await axiosApi.post<LoggedUserType>(APIPath.Login, loginUser);
      setToken(token);
      dispatch(updateAuthStatus(AuthStatus.Auth));
      dispatch(setEmail(loginUser.email));
      dispatch(redirectToRoute(AppRoute.Products));
    } catch {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(ErrorMessage.FailedUserLogin));
    }
  },
);
