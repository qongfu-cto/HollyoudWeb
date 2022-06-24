export type AuthState = typeof initState;

export const initState = {
  createdAnAccount: false,
  userIsLogged: false,
  otp: null,
  email: '',
  token: '',
  uid: '',
  errors: {
    signup: null,
    signin: null,
    otp: '',
    signOut: null
  },
  loading: {
    otp: false,
    createAccount: false,
    userSignIn: false
  },
  showNotification: false
};
