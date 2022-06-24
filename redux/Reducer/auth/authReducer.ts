import * as actions from '../../Action/auth/authActionTypes';
import { initState } from './authInitState';

const authReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actions.CREATE_FIREBASE_ACCOUNT:
      return {
        ...state,
        createdAnAccount: false,
        loading: {
          ...state.loading,
          createAccount: true
        },
        errors: {
          ...state.errors,
          signup: ''
        }
      };
    case actions.CREATE_FIREBASE_ACCOUNT_RECEIVE:
      return {
        ...state,
        createdAnAccount: true,
        showNotification: true,
        userIsLogged: true,
        email: action.email,
        token: action.token,
        password: action.password,
        uid: action.uid,
        loading: {
          ...state.loading,
          createAccount: false
        },
        errors: {
          ...state.errors,
          signup: ''
        }
      };
    case actions.CREATE_FIREBASE_ACCOUNT_ERROR:
      return {
        ...state,
        createdAnAccount: false,
        userIsLogged: false,
        errors: {
          ...state.errors,
          signup: action.message
        },
        loading: {
          ...state.loading,
          createAccount: false
        }
      };

    case actions.SIGN_IN_FIREBASE:
      return {
        ...state,
        userIsLogged: true,
        showNotification: true
      };

    case actions.SIGNIN_TO_FIREBASE_ACCOUNT:
      return {
        ...state,
        userIsLogged: false,
        loading: {
          ...state.loading,
          userSignIn: true
        },
        errors: {
          ...state.errors,
          signin: ''
        }
      };
    case actions.SIGNIN_TO_FIREBASE_ACCOUNT_RECEIVE:
      return {
        ...state,
        userIsLogged: true,
        showNotification: true,
        email: action.email,
        token: action.token,
        loading: {
          ...state.loading,
          userSignIn: false
        },
        errors: {
          ...state.errors,
          signin: ''
        }
      };
    case actions.SIGNIN_TO_FIREBASE_ACCOUNT_ERROR:
      return {
        ...state,
        userIsLogged: false,
        errors: {
          ...state.errors,
          signin: action.message
        },
        loading: {
          ...state.loading,
          userSignIn: false
        }
      };

    case actions.TOKEN_RECEIVE:
      return {
        ...state,
        token: action.token,
        uid: action.uid
      };
    case actions.SEND_OTP:
      return {
        ...state,
        loading: {
          ...state.loading,
          otp: true
        },
        errors: {
          ...state.errors,
          otp: ''
        }
      };
    case actions.SEND_OTP_RECEIVE:
      console.log('SEND_OTP_RECEIVE', action);
      return {
        ...state,
        userIsLogged: false,
        otp: action.otp,
        loading: {
          ...state.loading,
          otp: false
        }
      };
    case actions.SEND_OTP_ERROR:
      return {
        ...state,
        userIsLogged: false,
        errors: {
          ...state.errors,
          otp: action.message
        }
      };

    case actions.SIGN_OUT_FIREBASE_ACCOUNT:
      return {
        ...state,
        userIsLogged: false,
        errors: {
          ...state.errors,
          signOut: ''
        }
      };
    case actions.SIGN_OUT_FIREBASE_ACCOUNT_RECEIVE:
      return {
        ...state,
        createdAnAccount: false,
        userIsLogged: false
      };

    case actions.SIGN_OUT_FIREBASE_ACCOUNT_ERROR:
      return {
        ...state,
        userIsLogged: true,
        errors: {
          ...state.errors,
          signOut: action.message
        }
      };
    case actions.HIDE_NOTIFICATION:
      return {
        ...state,
        showNotification: false
      };
  }
  return state;
};

export default authReducer;
