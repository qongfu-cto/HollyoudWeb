//import request from "../utilities/request";
//import { baseURL } from "../utilities/utils";
import { auth } from '../firebase';

// set axios header
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['userId'] =
//   typeof window !== 'undefined' &&
//   JSON.parse(localStorage.getItem('profile')!)?._id.toString();

axios.interceptors.request.use(
  (config: any) => {
    const profile =
      typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('profile')!);
    const code = typeof window !== 'undefined' && localStorage.getItem('code');

    if (profile) {
      config.headers.user = profile?._id?.toString();
      config.headers.code = code;
    }

    return config;
  },
  error => {
    console.log('interceptors error', error);
  }
);

axios.interceptors.response.use(
  response => response,
  error => {
    const statusCode = error.response ? error.response.status : null;
    if (statusCode === 417) {
      window.localStorage.clear();
      window.location.assign('/');
    }
  }
);

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from 'firebase/auth';
import nookies from 'nookies';
import axios from 'axios';
import { API_URL } from 'utilities/api';

let response: any = { status: 0, data: null };
//const api ="http://15.185.106.57/api/v1"
const api = API_URL;

export const AuthAPI = {
  async createAccount({ email, password }: any) {
    try {
      const response: any = await axios.post(`${api}/authentication/register`, {
        email,
        password
      });

      console.log('response.status', response.status);
      console.log(response);

      const user = response.data.user;

      response.status = response.status;

      response.data = response.data;

      // save code
      localStorage.setItem('code', response.data?.code);

      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    // return response;
  },
  async resendVerifictionEmail({ email }: any) {
    try {
      const response: any = await axios.post(
        `${api}/authentication/resend-verification`,
        {
          email
        }
      );

      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    // return response;
  },

  async signinWithEmailAndPassword(email: string, password: string) {
    try {
      const response: any = await axios.post(
        `${api}/authentication/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        }
      );

      localStorage.setItem('profile', JSON.stringify(response.data));
      // save code
      localStorage.setItem('code', response.data?.code);

      response.status = 200;
      response.data = {
        token: 'anything',
        uid: response.data?.user?._id?.toString()
      };

      // nookies.set(undefined, 'token', 'sdad', { path: '/' });

      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 400;
      response.data = error.code;
      return response;
    }
    // TODO show error to user from firebase
  },
  userLoggedin() {
    onAuthStateChanged(
      auth,
      async user => {
        console.log('I AM ');
        if (user) {
          //console.log(user)
          const token = await user.getIdToken();
          const email = user.email;
          return { token, email };
        } else {
          return null;
        }
      },
      err => console.log('user log error', err)
    );
  },
  async sendOTP(mobile: string) {
    try {
      const otp = await axios.post(`${api}/otp`, {
        mobile
      });

      console.log('mobilePhoneHandlerresponse 2', otp);
      response.status = 200;
      response.data = otp.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      console.log('mobilePhoneHandlerresponse 2', error);

      response.status = 404;
      response.data = error.message;
    }

    return response;
  },

  async signOut() {
    try {
      // const userCredential = await signOut(auth);
      const response: any = await axios.get(`${api}/authentication/logout`, {
        withCredentials: true,
        params: {
          code: localStorage.getItem('code')
        }
      });
      response.status = 200;
      response.data = '';
      nookies.set(undefined, 'token', '', { path: '/' });
      nookies.set(undefined, 'uid', '', { path: '/' });
      localStorage.removeItem('profile');
      localStorage.removeItem('code');
      localStorage.removeItem('redirectPath');
      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
      return response;
    }
    // TODO show error to user from firebase
  },
  async googleLogin() {
    try {
      // const userCredential = await signOut(auth);
      const response: any = await axios.get(`${api}/authentication/google`, {
        withCredentials: true
      });

      localStorage.removeItem('profile');
      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
      return response;
    }
    // TODO show error to user from firebase
  },
  async checkAccessTokenExists(code?: string | string[]) {
    try {
      const response: any = await axios.get(`${api}/authentication/check`, {
        params: {
          code
        }
      });
      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
      return response;
    }
    // TODO show error to user from firebase
  },
  async sendOtpPhone({ email, mobile }: any) {
    try {
      const response: any = await axios.post(
        `${api}/authentication/send-otp-phone`,
        {
          email,
          mobile
        }
      );

      console.log('response.status', response.status);
      console.log(response);

      const user = response.data.user;

      response.status = response.status;

      response.data = response.data;

      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    // return response;
  },
  async verifiyUserEmail({ email, code }: any) {
    try {
      const response: any = await axios.get(
        `${api}/authentication/confirmation/${email}`,
        {
          params: {
            code
          }
        }
      );

      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      console.log('ERROR', error);
      return response;
    }
    // TODO show error to user from firebase

    // return response;
  }
};
