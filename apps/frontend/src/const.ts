export const AppRoute = {
  Login: '/login',
  Signin: '/signin',
  AddItem: '/addItem',
  EditItem: '/editItem',
  Error: '*',
  Products: '/products',
  ProductId: '/products/:productId',
} as const;

export const Networks = {
  Skype: {
    name: 'skype',
    website: 'https://www.skype.com/'
  },
  Vsco: {
    name: 'vsco',
    website: 'https://www.vsco.co/'
  },
  Pinterest: {
    name: 'pinterest',
    website: 'https://www.pinterest.com/'
  }
} as const;

export const GuitarCategory = {
  Acoustic: {
    name: 'Акустическая гитара',
    id: 'guitar',
    filterId: 'acoustic'
  },
  Electric: {
    name: 'Электрогитара',
    id: 'el-guitar',
    filterId: 'electric'
  },
  Ukulele: {
    name: 'Укулеле',
    id: 'ukulele',
    filterId: 'ukulele'
  },
} as const;


export const PaginationParams = {
  PageCount: 2,
  PageNextNumber: 1,
  LastPageMinimum: 3,
  FirstPageMinimum: 1,
}

export const STRINGS = [4, 6, 7, 12] as const;

export const AuthStatus = {
  Auth: 'auth',
  NoAuth: 'unauth',
  Unknown: 'unknown'
} as const;

export const NameSpace = {
  Guitars: 'guitars',
  AuthStatus: 'authorisation',
  User: 'user',
  Error: 'error',
  Route: 'route',
  GuitarForm: 'guitarForm',
  GuitarList: 'guitarList',
} as const;

export const Action = {
  Create: 'create',
  Get: 'get',
  Update: 'update',
  Delete: 'delete',
  Login: 'login',
  Logout: 'logout',
  Redirect: 'redirect',
} as const;

export const RequestStatus = {
  Idle: 'idle',
  Pending: 'pending',
  Fulfilled: 'fulfilled',
  Rejected: 'rejected'
} as const;

export const APIPath = {
  Guitars: '/guitars',
  GuitarId: '/guitars/:guitarId',
  Signin: 'user/signin',
  Login: 'user/login',
  Verify: 'user/verify',
  Logout: 'user/logout',
} as const;

export const TIMEOUT_SHOW_ERROR = 5000;

export const ErrorMessage = {
  UserUnauthorised: 'User is unauthorised',
  FailedLoadGuitars: 'Failed to load guitars',
  FailedPostGuitarForm: 'Failed to add new guitar',
  FailedUpdateGuitarForm: 'Failed to update guitar data',
  FailedDeleteGuitarForm: 'Failed to delete guitar from list',
  FailedUserLogout: 'Failed to log user out',
  FailedUserLogin: 'Failed to log user in',
  FailedUserSignin: 'Failed to sign user in',
} as const;

export const AUTH_TOKEN_KEY = 'ZGRmZGZkZkBkZmtsamRmLmNvbQ==';

export const BASE_URL = 'http://localhost:3000/api';

export const REQUEST_TIMEOUT = 5000;
