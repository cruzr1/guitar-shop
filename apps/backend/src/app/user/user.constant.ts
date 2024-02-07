export const SALT_ROUNDS = 11;
export const USER_EXISTS = 'User with email exists';
export const USER_NOT_FOUND = 'User not found';
export const USER_PASSWORD_WRONG = 'User password is wrong';
export const REFRESH_TOKEN_NOT_EXISTS = 'Refresh token does not exist';
export const USERMAIL_FIELD = 'email';

export const UserValidationParams = {
  Name: {
    Length: {
      Minimal: 3,
      Maximal: 50
    }
  },
  Password: {
    Length: {
      Minimal: 6,
      Maximal: 12
    }
  }
} as const;

export const UserValidationMessage = {
  UserId: {
    InvalidFormat: 'User id should be valid mongo id'
  },
  Email: {
    InvalidFormat: 'User e-mail should have format user@domain.com'
  },
  Name: {
    InvalidFormat: 'User name should have a string format',
    InvalidLength: 'User name should have a minimal length of 3 letters, maximal length of 50 letters'
  },
  Password: {
    InvalidLength: 'User password should have a minimal length of 6 letters, maximal length of 12 letters',
    InvalidPassword: 'User password should be a string value'
  }
} as const;
