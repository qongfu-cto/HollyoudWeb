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

export const imageAPI = {
  async uploadThumbnail(payload: any) {
    console.log('uploadPlacethumbnail API');
    console.log(payload);

    const token = JSON.parse(localStorage.getItem('token') || 'null');
    const placeId = JSON.parse(localStorage.getItem('placeId') || 'null');
    console.log(placeId);
    let response: any;
    response = await axios.post(
      `${api}/stream/thumbnail-upload`,
      payload.formData,
      {
        headers: {
          authtoken: token,
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    console.log('uploadPlacethumbnail response');
    console.log(response);

    const result = {
      data: response.data.keys[0],
      status: response.status,
      message:
        response.status === 'ERROR'
          ? response.data && response.data.message
            ? response.data.message
            : response.error.error.message
          : ''
    };
    return result;
  }
};
