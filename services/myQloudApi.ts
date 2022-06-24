import axios from 'axios';
import { API_URL } from 'utilities/api';

//export const api = 'http://localhost:8000/api/v1/';
export const api = API_URL;
export const apiKeyIP = '9f1406bf29fd4f1d846b175595a509fd';

let response: response = { status: 0, data: '' };

// set axios header
axios.defaults.withCredentials = true;

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

export const myQloudAPI = {
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
  }
};
