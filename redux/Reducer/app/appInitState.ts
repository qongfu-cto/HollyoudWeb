import { MarketPlace } from 'types/marketPlaceApiTypes';
import { MarketPlaceProduct } from 'types/products&services';
import { Reviews } from 'types/userProfile';

export type AppState = typeof initState;

export const initState: {
  interests: {
    Fitness: never[];
    Business: never[];
    Educational: never[];
    Personal: never[];
    Recreational: never[];
    Social: never[];
    Trending: never[];
  };
  marketplace: {
    total: number;
    length: number;
    marketPlaces: MarketPlace[];
    page: number;
    tag: [];
    tagId: string;
    type: string;
    pageLength: number;
    openedMarketPlaces: [];
    previousResult: [];
    params: {
      unfilteredTotal: number;
    };
  };
  languages: [];
  countries: [];
  gccCountries: [];
  hotspots: [];
  sort: {
    value: string;
    permission: 'granted' | 'denied';
    currentSort: string;
  };
  categories: categoryObject[];
  place: {
    data: any;
    myPlace: boolean;
  };
  subCategories: categoryObject[];
  searchResults: {
    length: number;
    lengthExactMatch: number;
    exactMatch: searchResultsProps[];
    tags: searchResultsProps[];
  };
  loading: {
    properties: boolean;
    places: boolean;
    interests: boolean;
    app: boolean;
    dashboard: boolean;
    search: boolean;
    map: boolean;
    'places-places': boolean;
    globalConfig: boolean;
    categories: boolean;
    subCategories: boolean;
    marketPlace: boolean;
  };

  rate: {
    reviews: Reviews[];
    params: {
      currentPage: number;
      maxRecordsPerPage: number;
      resultsInPage: number;
      totalPages: number;
      totalRecords: number;
    };
    previousResult: [];
    previousPlace: string;
  };
  products: MarketPlaceProduct[];
  error: {};
  socket: any;
} = {
  interests: {
    Fitness: [],
    Business: [],
    Educational: [],
    Personal: [],
    Recreational: [],
    Social: [],
    Trending: []
  },
  marketplace: {
    total: 0,
    tag: [],
    tagId: '',
    length: 0,
    type: '',
    marketPlaces: [],
    page: 1,
    pageLength: 1,
    openedMarketPlaces: [],
    previousResult: [],
    params: {
      unfilteredTotal: 0
    }
  },
  sort: {
    value: 'highest-rated',
    permission: 'granted',
    currentSort: ''
  },
  categories: [],
  languages: [],
  countries: [],
  gccCountries: [],
  hotspots: [],
  place: {
    data: {},
    myPlace: false
  },
  subCategories: [],
  searchResults: {
    length: 0,
    lengthExactMatch: 0,
    exactMatch: [],
    tags: []
  },
  loading: {
    properties: false,
    places: true,
    interests: false,
    app: false,
    dashboard: false,
    search: false,
    map: false,
    'places-places': false,
    globalConfig: false,
    categories: true,
    subCategories: false,
    marketPlace: true
  },
  rate: {
    reviews: [],
    params: {
      currentPage: 1,
      maxRecordsPerPage: 5,
      resultsInPage: 0,
      totalPages: 1,
      totalRecords: 0
    },
    previousResult: [],
    previousPlace: ''
  },

  products: [],

  error: {},
  socket: {}
};

// const initState = {
//   qongfus: [],
//   loading: {
//     app: false,
//     dashboard: false,
//     search: false,
//     map: false,
//     'places-places': false,
//     globalConfig: false,
//   },
//   lifestyles: [],
//   subLifestyles: [],
//   countries: [],
//   languages: [],
//   isAppInitialized: false,
//   error: {},
//   amenities: [],
//   globalConfig: null,
//   interests: [],
// };
