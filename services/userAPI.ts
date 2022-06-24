import axios from 'axios';
import { API_URL } from 'utilities/api';

//export const api = 'http://localhost:8000/api/v1/';
export const api = API_URL;
export const apiKeyIP = '9f1406bf29fd4f1d846b175595a509fd';

let response: response = { status: 0, data: '' };

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

export const userAPI = {
  async userIP() {
    try {
      const userIP = await axios.get('https://checkip.amazonaws.com/', {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });

      response.status = 200;
      response.data = userIP.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }

    return response;
  },

  async userGeolocationIP() {
    try {
      const userIP = await axios.get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeyIP}`
      );

      response.status = 200;
      response.data = userIP.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }

    return response;
  },

  async createAccount(password: string, email: string) {
    try {
      const user = await axios.post(
        `${api}/auth/authentication/register`,
        { email, password },
        {
          headers: {}
        }
      );

      response.status = 200;
      response.data = user.data;
      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
      return response;
    }
    // TODO show error to user from firebase
  },

  async getUserProfile(token: string, email: string) {
    try {
      const user = await axios.get(`${api}/auth/getUserProfile/${email}`, {
        headers: {
          authtoken: token
        }
      });

      response.status = 200;
      response.data = user.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }
    //TODO show error to user from firebase

    return response;
  },

  async updateProfile(payload: any, id?: string, token?: string) {
    try {
      const user = await axios.post(
        `${api}/auth/create-or-update-user/${payload.email}`,
        payload
      );
      // const user = await axios.put(
      //   `${api}/profile/${id}`,
      //   {
      //     ...payload
      //   },
      //   {
      //     headers: {
      //       authtoken: token
      //     }
      //   }
      // );

      console.log('updateProfile response api ', user);
      console.log(user);
      response.status = 200;
      response.data = user.data;
    } catch (err) {
      console.log('updateProfile response api ');
      console.log(err);

      const error = JSON.parse(JSON.stringify(err));
      console.log(error);
      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async userProfile(payload: any) {
    try {
      const user = await axios.post(
        `${api}/auth/create-or-update-user/${payload.email}`,
        payload
      );

      response.status = 200;
      response.data = user.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async uploadAvatar(avatar: any, token: string) {
    try {
      const user = await axios.post(`${api}/profile/uploads`, avatar, {
        headers: {
          authtoken: token,
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('user upload image ', user);
      response.status = 200;
      response.data = user.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));

      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async getAvatar(key: any, token: string) {
    try {
      const user = await axios.get(
        `${api}/profile/uploads/${key}`
        // {
        //   headers: {
        //     authtoken: token,
        //     "Content-Type":'multipart/form-data'
        //   },
        // }
      );

      response.status = 200;
      response.data = user.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));

      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async getUserFullName(
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    token: string,
    uid: string
  ) {
    try {
      const user = await axios.post(
        `${api}/profile/set-username`,
        {
          first_name,
          last_name,
          email,
          username,
          uid
        },
        {
          headers: {
            authtoken: token
          }
        }
      );

      response.status = 200;
      response.data = user.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async checkUserName(payload: any) {
    try {
      const user = await axios.get(
        `${api}/profile/check-username/${payload.email}`,
        {
          params: {
            username: payload.userName
          }
        }
      );

      response.status = 200;
      response.data = {
        userNameExist: payload.userName === user.data.suggestion ? false : true,
        suggestion: user.data.suggestion
      };
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async userFeedback(
    feedback: { email: string; feedback: string },
    deviceInfo: {},
    ip: string,
    user: string
  ) {
    try {
      const res = await axios.post(`${api}/feedbacks`, {
        email: feedback.email,
        feedback: feedback.feedback,
        source: 'web',
        countryId: '612e252bdf4ea2803cde4b84',
        type: 'feedback',
        deviceInfo: deviceInfo,
        userIp: ip,
        user
      });

      response.status = 200;
      response.data = res.data.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async getMyPlaces(userEmail: string) {
    try {
      const res = await axios.get(`${api}/me/my-places?email=${userEmail}`);

      response.status = 200;
      response.data = res.data.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async updateMyPlaces(marketplaceId: string, email: string) {
    try {
      const res = await axios.post(`${api}/me/my-places`, {
        marketplaceId,
        email
      });

      response.status = 200;
      response.data = res.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async updateUserAccount(payload: any) {
    try {
      const user = await axios.post(
        `${api}/auth/create-or-update-user/${payload.email}`,
        payload,
        {
          headers: {}
        }
      );

      response.status = 200;
      response.data = user.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.message;
    }
    // TODO show error to user from firebase

    return response;
  },

  async forgotPassword(payload: any) {
    let result;
    try {
      const response: any = await axios.post(
        `${api}/authentication/requestForgot`,
        {
          ...payload
        }
      );
      console.log('Change Password', response);

      result = {
        data: response.data,
        status: 200
      };
    } catch (err) {
      result = {
        data: '',
        status: 401
      };
    }

    return result;
  },

  async finalForgotPassword(payload: any) {
    console.log('payload ', payload);
    let result;
    try {
      const response: any = await axios.post(`${api}/authentication/forgot`, {
        email: payload.email,
        password: payload.password,
        newPassword: payload.newPassword,
        resetCode: payload.resetCode
      });
      console.log('Change Password', response);

      result = {
        data: response.data,
        status: response.status
      };
    } catch (err) {
      result = {
        data: '',
        status: 401
      };
    }

    return result;
  },

  async resetPassword(payload: any) {
    console.log('payload ', payload);
    let result;
    try {
      const response: any = await axios.post(`${api}/authentication/reset`, {
        email: payload.email,
        password: payload.password,
        newPassword: payload.newPassword
      });
      console.log('Change Password', response);

      result = {
        data: response.data,
        status: response.status
      };
    } catch (err) {
      result = {
        data: '',
        status: 401
      };
    }

    return result;
  },

  async checkUserNameExist(payload: any) {
    console.log('payload ', payload);
    let result;
    try {
      const response: any = await axios.get(
        `${api}/auth/check-username-exists`,
        {
          params: {
            username: payload.username,
            email: payload.email
          }
        }
      );
      console.log('checkUserName', response);

      result = {
        data: response.data,
        status: response.status
      };
    } catch (err) {
      result = {
        data: '',
        status: 401
      };
    }

    return result;
  },

  async checkMobileExist(payload: any) {
    console.log('payload ', payload);
    let result;
    try {
      const response: any = await axios.get(`${api}/auth/check-mobile-exist`, {
        params: {
          id: payload.id,
          mobile: payload.mobile
        }
      });
      console.log('Change Password', response);

      result = {
        data: response.data,
        status: response.status
      };
    } catch (err) {
      result = {
        data: '',
        status: 401
      };
    }

    return result;
  },

  async checkEmailExists(payload: any) {
    console.log('payload ', payload);
    let result;
    try {
      const response: any = await axios.get(`${api}/auth/check-email-exists`, {
        params: {
          id: payload.id,
          email: payload.email
        }
      });

      result = {
        data: response.data,
        status: response.status
      };
    } catch (err) {
      result = {
        data: '',
        status: 401
      };
    }

    return result;
  },

  async checkPasswordExist(payload: any) {
    console.log('payload ', payload);
    let result;
    try {
      const response: any = await axios.get(
        `${api}/auth/check-password-correct`,
        {
          params: {
            password: payload.password,
            email: payload.email
          }
        }
      );

      result = {
        data: response.data,
        status: response.status
      };
    } catch (err) {
      result = {
        data: '',
        status: 401
      };
    }

    return result;
  },

  async getDefaultUserNameForUser(payload: any) {
    console.log('payload ', payload);
    let result;
    try {
      const response: any = await axios.get(
        `${api}/auth/get-default-username`,
        {
          params: {
            email: payload.email
          }
        }
      );

      result = {
        data: response.data,
        status: response.status
      };

      return response;
    } catch (err) {
      result = {
        data: '',
        status: 401
      };

      return result;
    }
  },
  async sendVerificationEmail(email: string, userId: string) {
    let result;
    try {
      const response: any = await axios.post(
        `${api}/authentication/send-email`,
        {
          email,
          userId
        }
      );
      return response;
    } catch (err) {
      result = {
        data: '',
        status: 401
      };
      return result;
    }
  }
};
