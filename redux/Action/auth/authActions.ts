import * as action from './authActionTypes';

export type createFirebaseAccountProps = {
  type: string;
  email: string;
  password: string;
};
export const createFirebaseAccount = (email: string, password: string) => {
  return { type: action.CREATE_FIREBASE_ACCOUNT, email, password };
};

export const createFirebaseAccountReceive = (
  email: string,
  password: string,
  uid: string
) => {
  return { type: action.CREATE_FIREBASE_ACCOUNT_RECEIVE, email, password, uid };
};

export const createFirebaseAccountError = (message: string) => {
  return { type: action.CREATE_FIREBASE_ACCOUNT_ERROR, message };
};

export const signinFirebase = () => {
  return { type: action.SIGN_IN_FIREBASE };
};

export const siginToFirebaseAccount = (email: string, password: string) => {
  return { type: action.SIGNIN_TO_FIREBASE_ACCOUNT, email, password };
};

export const siginToFirebaseAccountReceive = (email: string, token: string) => {
  return { type: action.SIGNIN_TO_FIREBASE_ACCOUNT_RECEIVE, email, token };
};

export const siginToFirebaseAccountError = (message: string) => {
  return { type: action.SIGNIN_TO_FIREBASE_ACCOUNT_ERROR, message };
};

export const receiveToken = (token: string, uid: string) => {
  return { type: action.TOKEN_RECEIVE, token, uid };
};

export const sendTOP = (mobile: string) => {
  return { type: action.SEND_OTP, mobile };
};

export const sendTOPReceive = (otp: number) => {
  return { type: action.SEND_OTP_RECEIVE, otp };
};

export const sendTOPError = (message: string) => {
  return { type: action.SEND_OTP_ERROR, message };
};

export const signOutFirebase = () => {
  return { type: action.SIGN_OUT_FIREBASE_ACCOUNT };
};

export const signOut = () => {
  console.log('SIGN OUT');
  return { type: action.SIGN_OUT_FIREBASE_ACCOUNT };
};

export const signOutFirebaseReceive = () => {
  return { type: action.SIGN_OUT_FIREBASE_ACCOUNT_RECEIVE };
};

export const signOutFirebaseError = (message: string) => {
  return { type: action.SIGN_OUT_FIREBASE_ACCOUNT_ERROR, message };
};

export const hideNotification = () => {
  return { type: action.HIDE_NOTIFICATION };
};

// export const signinWithPhoneNumber=(phone:string, recaptchaVerifier:string)=>{

//     return{type:action.SIGNIN_WITH_PHONE_NUMBER , phone, recaptchaVerifier}
// }

// export const signinWithPhoneNumberReceive=(email:string, token:string)=>{
//     return{type:action.SIGNIN_WITH_PHONE_NUMBER_RECEIVE , email, token}
// }

// export const signinWithPhoneNumberError=(message:string)=>{
//     return{type:action.SIGNIN_WITH_PHONE_NUMBER_ERROR, message}
// }
