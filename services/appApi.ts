import axios from 'axios';
import { isEmpty, uniq } from 'lodash';
import { Geolocation } from 'types/IPGeolocationTypes';
import { PlacesResult } from 'types/marketPlaceApiTypes';
import { API_URL } from 'utilities/api';
//const api ="http://15.185.106.57/api/v1"
const api = API_URL;
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

export const appAPI = {
  async getAllInterests() {
    try {
      const app = await axios.get(`${api}/activity-types/interests`);

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
  async getAllLanguages() {
    try {
      const app = await axios.get(`${api}/languages`);
      console.log({ response });

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

  async getAllCountries() {
    try {
      const app = await axios.get(`${api}/countries`);
      console.log('getCountries response, ', app);

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
  async getAllGccCountries() {
    try {
      const app = await axios.get(`${api}/countries/gcc`);
      console.log('getCountries response, ', app);

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
  async getAllCWHotspots(value?: string) {
    try {
      // if(!isEmpty(search)){
      // }
      const app = await axios.get(`${api}/location/get-cw-hotspots`, {
        params: { search: value }
      });

      // const response: any = await axios.get(`${api}/authentication/logout`, {
      //   withCredentials: true,
      //   params: {
      //     code: localStorage.getItem('code')
      //   }
      // });
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
        `${api}/marketplace/places/${countryId}`
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
        `${api}/marketplace/places/${countryId}/${id}${uid}`
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
        `${api}/marketplace/properties/${countryId}/${id}`
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
      const app = await axios.get(`${api}/categories/main`);

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
      const app = await axios.post(`${api}/search`, {
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
    const locations = location ? { locations: uniq(location) } : [];
    const open = opened ? opened : { openNow: false };

    /**
     *           let location: any = [];
          let open: any = { openNow: false };
          if (!isNull(localStorage.getItem('locationFilter'))) {
            location = JSON.parse(localStorage.getItem('locationFilter')!);
          }
          if (!isNull(localStorage.getItem('openFilter'))) {
            open = JSON.parse(localStorage.getItem('openFilter')!);
          }
     */
    console.log('location43', locations);
    console.log(page);
    try {
      const app = await axios.post(
        `${api}/marketplace/places/${countryId}`,
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

    console.log('getMarketPlace response');
    console.log(response);

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
        `${api}/marketplace/properties/${countryId}`,
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
      const app = await axios.post(`${api}/marketplace/profile`, {
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
