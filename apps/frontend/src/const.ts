export const AppRoute = {
  Login: '/login',
  Register: '/register',
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

export const ItemFormParams = {
  Add : {
    classPrefix: 'add'
  }
}
