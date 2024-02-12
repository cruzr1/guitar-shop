import { PASSWORD_REGEX, EMAIL_REGEX, NAME_REGEX, RequestStatus } from './const';
import { RequestStatusType } from './types';

export const isPasswordValid = (pass: string): boolean => PASSWORD_REGEX.test(pass);

export const isEmailValid = (mail: string): boolean => EMAIL_REGEX.test(mail);

export const isNameValid = (name: string): boolean => NAME_REGEX.test(name);

export const isStatusPending = (status: RequestStatusType) => status === RequestStatus.Pending;

export const isStatusFulfilled = (status: RequestStatusType) => status === RequestStatus.Fulfilled;

export const isStatusRejected = (status: RequestStatusType) => status === RequestStatus.Rejected;
