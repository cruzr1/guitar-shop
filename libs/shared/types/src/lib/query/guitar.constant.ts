export const GuitarCategory = {
  Acoustic: 'acoustic',
  Electric: 'electric',
  Ukulele: 'ukulele',
} as const;

export const STRINGS = [4, 6, 7, 12] as const;

export const GUITAR_LIST_REQUEST_COUNT = 7;

export const DEFAULT_PAGE_NUMBER = 1;

export const DEFAULT_SORT_BY_FIELD = 'createdAt';

export const DEFAULT_SORT_BY_ORDER = 'asc';

export const GUITAR_SORT_BY_FIELDS = ['createdAt', 'price'];

export const GUITAR_SORT_BY_ORDERS = ['asc', 'desc'];

export const GuitarValidationMessage = {
  Type: {
    NotAnArray: 'Guitar category type filter parameters should be an array',
    InvalidFormat: 'Guitar category type may be one of the following values: electric, acoustic, ukulele'
  },
  StringsCount: {
    NotAnArray: 'Guitar strings count filter parameters should be an array',
    InvalidFormat: 'Guitar strings count may be one of the following values: 4, 6, 7, 12'
  },
  SortByField: {
    InvalidFormat: 'Sort-by field may be one of the following values: price, createdAt'
  },
  SortByOrder: {
    InvalidFormat: 'Sort-by order may be one of the following values: asc, desc'
  }
}

export const GuitarValidationParams = {
  Image: {
    RegexURL: RegExp(/(.png$|.jpg$|.jpeg$)/i)
  },
  Name: {
    Length: {
      Minimum: 10,
      Maximum: 100
    }
  },
  Description: {
    Length: {
      Minimum: 20,
      Maximum: 1024
    }
  },
  Article: {
    Length: {
      Minimum: 5,
      Maximum: 40
    }
  },
  Price: {
    MinimumValue: 100,
    MaximumValue: 1000000
  }
}

export const GuitarExceptionMessage = {
  GuitarNotFound: 'Guitar not exists'
}

export const HTTP_CLIENT_MAX_REDIRECTS = 5;

export const HTTP_CLIENT_TIMEOUT = 5000;
