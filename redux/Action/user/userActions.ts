import { Geolocation } from 'types/IPGeolocationTypes';
import * as action from './userActionTypes';

export const createAccount = () => {
  return { type: action.CREATE_ACCOUNT };
};
export const createAccountReceive = (profile: {}) => {
  return { type: action.CREATE_ACCOUNT_RECEIVE, profile };
};
export const createAccountError = (message: string) => {
  return { type: action.CREATE_ACCOUNT_ERROR, message };
};

export const userIsLoggedIn = () => {
  return { type: action.USER_IS_LOGGED_IN };
};
export const userIsLoggedOut = () => {
  return { type: action.USER_IS_LOGGED_OUT };
};

export const getUserIPAddress = () => {
  return { type: action.GET_USER_IP_ADDRESS };
};
export const getUserIPAddressReceive = (ip: string) => {
  return { type: action.GET_USER_IP_ADDRESS_RECEIVE, ip };
};
export const getUserIPAddressError = (message: string) => {
  return { type: action.GET_USER_IP_ADDRESS_ERROR, message };
};

export const getUserGeolocation = () => {
  return { type: action.GET_USER_GEOLOCATION };
};
export const getUserGeolocationReceive = (geolocation: any) => {
  return { type: action.GET_USER_GEOLOCATION_RECEIVE, geolocation };
};
export const getUserGeolocationError = (message: string) => {
  return { type: action.GET_USER_GEOLOCATION_ERROR, message };
};
export const getUserProfile = (email: string | null) => {
  return { type: action.GET_USER_PROFILE, email };
};
export const getUserProfileReceive = (profile: {}, path: string | null) => {
  return { type: action.GET_USER_PROFILE_RECEIVE, profile, path };
};
export const getUserProfileError = (message: string) => {
  return { type: action.GET_USER_PROFILE_ERROR, message };
};

export const updateProfile = (payload: {}) => {
  return { type: action.UPDATE_PROFILE, payload };
};

export const updateProfileReceive = (profile: {}) => {
  return { type: action.UPDATE_PROFILE_RECEIVE, profile };
};

export const updateProfileError = (message: string) => {
  return { type: action.UPDATE_PROFILE_ERROR, message };
};
export const updateProfileWithPhoneNumber = (phone: number | string) => {
  return { type: action.UPDATE_PROFILE_WITH_PHONE_NUMBER, phone };
};

export const updateProfileWithPhoneNumberReceive = (profile: {}) => {
  return { type: action.UPDATE_PROFILE_WITH_PHONE_NUMBER_RECEIVE, profile };
};

export const updateProfileWithPhoneNumberError = (message: string) => {
  return { type: action.UPDATE_PROFILE_WITH_PHONE_NUMBER_ERROR, message };
};

export const userStatePath = () => {
  return { type: action.USER_STATE_PATH };
};

export const userStatePathReceive = (path: string) => {
  return { type: action.USER_STATE_PATH_RECEIVE, path };
};

export const getUserFullName = (first_name: string, last_name: string) => {
  return { type: action.GET_USER_FULL_NAME, first_name, last_name };
};

export const getUserFullNameReceive = (profile: {}) => {
  return { type: action.GET_USER_FULL_NAME_RECEIVE, profile };
};

export const getUserFullNameError = (message: string) => {
  return { type: action.GET_USER_FULL_NAME_ERROR, message };
};

export const getUserName = () => {
  return { type: action.GET_USER_NAME };
};
export const checkUserName = (payload: any) => {
  return { type: action.CHECK_USER_NAME, payload };
};

export const checkUserNameReceive = (results: {
  userNameExist: boolean;
  suggestion: string;
}) => {
  return { type: action.CHECK_USER_NAME_RECEIVE, results };
};
export const checkUserNameError = (message: string) => {
  return { type: action.CHECK_USER_NAME_ERROR, message };
};

export const userFeedback = (
  feedback: { email: string; feedback: string },
  parserData: {}
) => {
  return { type: action.USER_FEEDBACK, feedback, parserData };
};
export const userFeedbackReceive = (data: {}) => {
  return { type: action.USER_FEEDBACK_RECEIVE, data };
};
export const userFeedbackError = (message: string) => {
  return { type: action.USER_FEEDBACK_ERROR, message };
};


export const uploadAvatar = (avatar: FormData) => {
  return { type: action.UPLOAD_AVATAR, avatar };
};

export const getAvatar = (key: string) => {
  return { type: action.GET_AVATAR, key };
};
export const uploadAvatarReceive = (image: any) => {
  return { type: action.UPLOAD_AVATAR_RECEIVE, image };
};

export const uploadAvatarError = (message: string) => {
  return { type: action.UPLOAD_AVATAR_ERROR, message };
};
