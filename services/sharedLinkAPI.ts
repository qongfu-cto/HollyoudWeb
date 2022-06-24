import axios from 'axios';
import { Geolocation } from 'types/IPGeolocationTypes';
import { PlacesResult } from 'types/marketPlaceApiTypes';
import { API_URL } from 'utilities/api';
//const api ="http://15.185.106.57/api/v1"
const api = API_URL;
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

export const SharedLinkAPI = {
  async getSharedLink(payload: any) {
    const { url } = payload;

    try {
      const response = await axios.get(`${api}/sharedLink`, {
        params: {
          url
        }
      });

      return response;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  }
};
