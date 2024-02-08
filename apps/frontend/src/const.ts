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
  Electric: 'Электрогитара',
  Ukulele: 'Укулеле',
  Acoustic: 'Акустическа гитара',
} as const;


export const PaginationParams = {
  PageCount: 2,
  PageNextNumber: 1,
  LastPageMinimum: 3,
  FirstPageMinimum: 1,
}
