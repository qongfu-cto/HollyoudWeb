import axios from 'axios';
import { Geolocation } from 'types/IPGeolocationTypes';
import { PlacesResult } from 'types/marketPlaceApiTypes';
import { API_URL } from 'utilities/api';
let response: response = { status: 0, data: '' };
const countryId = '612e252bdf4ea2803cde4b84';

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

export const ekycAPI = {
  async uploadDocument(payload: any) {
    try {
      const ekyc = await axios.post(
        `${API_URL}/ekyc/document`,
        payload.formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      response.status = ekyc.status;
      response.data = ekyc.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  },

  async updateDocument(payload: any) {
    try {
      const ekyc = await axios.post(
        `${API_URL}/ekyc/${payload.Id}`,
        payload.document
      );

      response.status = 200;
      response.data = ekyc.data.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  },

  async applyDocuments(payload: any) {
    try {
      const ekyc = await axios.post(`${API_URL}/ekyc/apply`, payload);

      response.status = 200;
      response.data = ekyc.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  },

  async getAllCWHotspots() {
    try {
      const app = await axios.get(`${API_URL}/location/get-cw-hotspots`);
      console.log('getAllCWHotspots response, ', app);

      response.status = 200;
      response.data = app.data.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  },
  //   async getProperties( countryId:string ){

  //   try {
  //     const res = await axios.post(
  //       `${api}marketplace/properties/${countryId}`
  //     );
  //     console.log(res.data)
  //     response = {
  //       status: 200,
  //       data: res.data,
  //     };
  //   } catch (error) {
  //     response = {
  //       status: 401,
  //      data: error,
  //     };
  //   }
  //   return response;
  // },

  async getPlaces(countryId: string) {
    let response: ApiResponse<PlacesResult>;
    try {
      const res = await axios.post<PlacesResult>(
        `${API_URL}/marketplace/places/${countryId}`
      );

      response = {
        status: 200,
        data: res.data
      };
    } catch (error) {
      response = {
        status: 401,
        error
      };
    }
    return response;
  },

  async getPlace(countryId: string, id: string, uid: string) {
    //  let response: ApiResponse<PlacesResult>;

    try {
      const res = await axios.get(
        `${API_URL}/marketplace/places/${countryId}/${id}${uid}`
      );

      response = {
        status: 200,
        data: res.data
      };
    } catch (error) {
      response = {
        status: 401,
        data: error
      };
    }
    return response;
  },
  async getProperty(countryId: string, id: string) {
    //  let response: ApiResponse<PlacesResult>;

    try {
      const res = await axios.get(
        `${API_URL}/marketplace/properties/${countryId}/${id}`
      );

      response = {
        status: 200,
        data: res.data
      };
    } catch (error) {
      response = {
        status: 401,
        data: error
      };
    }
    return response;
  },

  async getCatagories() {
    try {
      const app = await axios.get(`${API_URL}/categories/main`);

      response.status = 200;
      response.data = app.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  },

  async searchTags(tags: [], type: string) {
    try {
      const app = await axios.post(`${API_URL}/search`, {
        tags: [tags],
        type
      });

      response.status = 200;
      response.data = app.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  },

  async marketPlace(
    tags: [],
    page: number,
    geolocation: Geolocation,
    sort: string,
    tagId?: string,
    location?: any[],
    opened?: any,
    verified?: boolean
  ) {
    const lat = parseFloat(geolocation.latitude);
    const lng = parseFloat(geolocation.longitude);
    const pageNumber = page + 1;
    const tag = tagId ? { categoryId: tagId } : { tags };
    const locations = location ? { locations: location } : [];
    const open = opened ? opened : { openNow: false };

    console.log('location', locations);
    try {
      const app = await axios.post(
        `${API_URL}/marketplace/places/${countryId}`,
        {
          ...tag,
          ...locations,
          ...open,
          page: pageNumber,
          coordinates: [lat, lng],
          sorting: sort
        },
        {}
      );

      response.status = 200;
      response.data = app.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  },

  async marketPlaceProperty(
    tags: [],
    page: number,
    geolocation: Geolocation,
    sort: string,
    tagId?: string
  ) {
    const lat = parseFloat(geolocation.latitude);
    const lng = parseFloat(geolocation.longitude);
    const pageNumber = page + 1;
    const tag = tagId ? { categoryId: tagId } : { tags };

    try {
      const app = await axios.post(
        `${API_URL}/marketplace/properties/${countryId}`,
        {
          // ...tag,
          ...tag,
          page: pageNumber,
          coordinates: [lat, lng],
          sorting: sort
        }
      );

      response.status = 200;
      response.data = app.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  },

  async marketPlaceTypePlace(tagId: string, userId?: string) {
    try {
      const app = await axios.post(`${API_URL}/marketplace/profile`, {
        tagLinkId: tagId,
        taglinkType: 'place',
        userId
      });

      console.log({ app });

      response.status = 200;
      response.data = app.data;
    } catch (err) {
      const error = JSON.parse(JSON.stringify(err));
      response.status = 401;
      response.data = error.code;
    }
    // TODO show error to user from firebase

    return response;
  }

  //when tag is place
  //use anothe api
};
