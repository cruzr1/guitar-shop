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

export const STRINGS = [4, 6, 7, 12] as const;

export const GuitarCategory = {
  Acoustic: 'acoustic',
  Electric: 'electric',
  Ukulele: 'ukulele',
} as const;

