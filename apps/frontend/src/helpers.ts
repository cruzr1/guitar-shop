import { PASSWORD_REGEX, EMAIL_REGEX, NAME_REGEX } from './const';

export const isPasswordValid = (pass: string): boolean => PASSWORD_REGEX.test(pass);

export const isEmailValid = (mail: string): boolean => EMAIL_REGEX.test(mail);

export const isNameValid = (name: string): boolean => NAME_REGEX.test(name);
