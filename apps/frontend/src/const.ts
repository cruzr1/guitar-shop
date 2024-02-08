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

export const GuitarType = {
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
};
