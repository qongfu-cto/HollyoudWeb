export interface GetPropertiesArguments {
  countryId: string;
}

export interface PropertiesResult {
  length: number;
  marketPlaces:MarketPlaceProperties[];
}

export type MarketPlaceProperties = {
  propertyInfo: {
    price: {
      rentPrice: number;
    };
    unitsInfo: {
      units: [];
    };
    bed: number;
    bath: number;
    toilet:number
    parking: number;
    totalArea: {
      $numberDecimal: string;
    };
    totalAreaUnit: string;
  };
  ratingsData: {
    score: {
      $numberDecimal: string;
    };
    ratings: string[];
    numberOfReviews: number;
    totalRatings: number;
  };
  loc: {
    type: 'Point';
    coordinates: [number, number];
  };
  _id: string;
  name: string;
  verified: boolean;
  category: string;
  subCategory: string;
  location: string;
  lat: string;
  lng: string;
  type: 'property';
  images: string[];
  placeData: string;
  __v: number;
  published: boolean;
  countryId: string;
  propertyData:propertyData
  price?: {
    rentPrice: number| string
  };
  
}

export type propertyData= {
  addressType:string,
addressName:string
  contactNo: string[];
  location: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    properties: {
      name: string;
      local_name: string;
      types: string[];
      country_id: string;
    };
    _id: string;
    name: string;
    official: boolean;
    official_address: string;
    country_id: string;
    types: string[];
    parents: string[];
    address_components: [];
    tags: [];
    __v: 0;
    address_sequences: [];
    mapSnapshot: string;
  };
  settings: {
    callsActivated: boolean;
    chatActivated: boolean;
  };
  avatar:string,
  cover: {
    image: string;
    thumb: string;
  };
  viewingInfo: {
    viewingAllowed: boolean;
    instantBookingAllowed: boolean;
    displayMapLocation: boolean;
  };
  commercialDetails: {
    options: {
      purpose: number;
      rentAmount: number;
      saleAmount: number;
      rentFrequency: "monthly"
    };
    utilityDetails: {
      utilities: string[];
      utilityTerms: string;
      capAmount: number;
    };
    classification: string;
   currency: {
      _id: string,
      name: string,
      description: string,
      symbol: string,
      decimal: number,
      __v: number,
      isoCode: string,
      updatedAt: string
    },
    furnishingType: string;
    propertyMaintenance: string;
    inclusions: [];
    securityDeposit: string;
    advancedPayment: string;
    noticeToVacate: string;
  };
  layoutDetails: {
    basicLayoutDetails: {
      layoutImages: [];
      propertyType: string;
      propertySubType: string;
      storeys: string;
      totalArea: {
        $numberDecimal: string;
      };
      totalAreaUnit: string;
      propertyLayout:string
      standardType:string
    };
    roomDetails: {
      bedrooms: number;
      fullBathrooms: number;
      partialBathrooms: number;
      acType: [];
      heatingType: [];
    };
    kitchenDetails: {
      type: string;
      layout: string;
      style: string;
      _id: string;
    }[];
    locationData: string;
 
  };
  locationDetails: {
    lat: string;
    lng: string;
    address: {
      addressKey: string;
      addressValue: string;
      addressType: string[];
    }[];
    locationData: {
      properties: {
        name: string;
        local_name: string;
        types: string[];
        country_id: string;
      };
      _id: string;
      name: string;
      official: boolean;
      country_id: string;
      types: string[];
      parents: string[];
      address_components: [];
      tags: [];
      __v: number;
      address_sequences: [];
    };
    countryId: string;
  };
  _id: string;
  name: string;
  verified: boolean;
  images: string[];
  title: string;
  description: string;
  status: number;
  promote: boolean;
  propertyOwners: [];
  propertyManagers: [];
  parking: {
    slots: number;
    type: string;
    _id: string;
  }[];
  standardAmenities: {_id: string , name:string}[];
  specialAmenities:{_id: string , name:string}[];
  nearbyLandmarks: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
  mainCategory:{
    config: {
      standard_amenities: [],
      special_amenities: [],
      required_tags: [],
      optional_tags: [],
      modules: [],
      form_options: [],
      details:{
        name: string,
        value: string,
        path: string,
        isArray: boolean
      }[]
    }
  }
};
export interface PlacesResult {
  length: number;
  marketPlaces: MarketPlace[];
  openedMarketPlaces: [];
}

export type MarketPlace = {
  cover: {
    image: string;
    thumb: string;
  };
  propertyInfo: propertyInfo;
  ratingsData: {
    score: {
      $numberDecimal: string;
    };
    ratings: [];
    numberOfReviews: number;
    totalRatings: number;
  };
  loc: {
    type: string;
    coordinates: [number, number];
  };
  _id: string;
  name: string;
  verified: boolean;
  category: string;
  subCategory: string;
  location: string;
  lat: string;
  lng: string;
  type: 'place' | 'property';
  images: string[];
  placeData: PlaceData;
  __v: number;
  published: boolean;
  countryId: string;
  propertyData: propertyData;
  imagesThumbs: string[];
  distance:number
};

type propertyInfo = {
  price: {
    rentPrice: number;
  };
  unitsInfo: {
    units: [];
  };
  furnishing: 'true';
  bed: number;
  bath: number;
  parking: number;
  totalArea: {
    $numberDecimal: string;
  };
  totalAreaUnit: string;

};

type PlaceData = {
  cover: {
    image: string;
    thumb: string;
  };
  avatar: string;
  _id: string;
  name: string;
  placeHandle: string;
  images: string[];
  contactNo: string[];
  description: string;
  lng: string;
  lat: string;
  countryId: string;
  timezone: string;
  settings: {
    callsActivated: boolean;
    chatActivated: boolean;
  };
  location: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    properties: {
      name: string;
      local_name: string;
      types: string[];
      country_id: string;
    };
    _id: string;
    name: string;
    official: boolean;
    official_address: string;
    country_id: string;
    types: string[];
    parents: string[];
    address_components: [];
    tags: [];
    __v: 0;
    address_sequences: [];
    mapSnapshot: string;
  };
  businessOwners: string[];
  businessManagers: string[];
  businessHours: {
    day: number;
    open24Hrs: boolean;
    closed: boolean;
    timings: {
      startTime: string;
      endTime: string;
    }[];
  }[];
  mainCategory:{name: string};
  claimed: boolean;
  verified: boolean;
  standardAmenities: {
    standardAmenity:{_id: string , name:string};
    selections: {_id: string , name:string}[];
    _id: string;
  }[];
  nearbyLandmarks: [];
  specialAmenities: {_id: string , name:string}[];
  __v: number;
  loc: {
    type: string;
    coordinates: [
      {
        $numberDecimal: string;
      },
      {
        $numberDecimal: string;
      }
    ];
  };
};

