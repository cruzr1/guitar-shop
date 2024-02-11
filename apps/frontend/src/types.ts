import { store } from "./store/store";
import { AppRoute, RequestStatus } from './const';

export type StringsCountType = 4 | 6 | 7 | 12;

export type GuitarCategoryType = 'acoustic' | 'electric' | 'ukulele';

export type AuthStatusType = 'auth' | 'unauth' | 'unknown';

export type StateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export type SortOrderType = 'asc' | 'desc';

export type SortOrderFieldType = 'price' | 'createdAt';

export type GuitarType = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  imageURL: string;
  type: GuitarCategoryType;
  article: string,
  price: number;
  stringsCount: StringsCountType
}

export type NewGuitarType = Omit<GuitarType, 'id' | 'createdAt'>

export type UserType = {
  name: string;
  email: string;
}

export type RequestStatusType = typeof RequestStatus[keyof typeof RequestStatus];


export type LoginType = Pick<UserType, 'email'> & Record<'password', string>;

  export type SigninType = UserType & Record<'password', string>;

  export type LoggedUserType = {
    accessToken: string;
  }

  export type AppRouteType = typeof AppRoute[keyof typeof AppRoute];
