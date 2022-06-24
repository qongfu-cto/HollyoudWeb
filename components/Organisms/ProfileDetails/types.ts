import { MarketPlace, MarketPlaceProperties } from 'types/marketPlaceApiTypes';
import { Reviews } from 'types/userProfile';

export interface CommonStartProps {
  like?: boolean;
  onFavoriteClicked?: VoidFunction;
  category?: string;
  data?: any;
  property?: MarketPlaceProperties;
  contacts?: any;
  title: string;
  rating?: number;
  totalReviews: number;
  description?: string;
  location: string;
  landmarks?: [];
  amenities?: { _id: string; name: string }[];
  avatar?: string;
  reviews?: Reviews[];
  placeTimeStatus?: string;
  workingTime?: {
    start: string;
    end: string;
  };
  isLogged?: boolean;
  show?: boolean;
  schedule?: {
    day: number;
    open24Hrs: boolean;
    timings: {
      startTime: string;
      endTime: string;
    }[];
    closed: boolean;
  }[];
  setting?: {
    callsActivated: boolean;
    chatActivated: boolean;
  };
  geometry?: {
    lat: number;
    lng: number;
  };
  address?: string;
  verified?: boolean;
  type: SearchTypes;
  totalRating: number;
  toggleModal?: any;
  showAuthOrRating?: any;
}

export interface Landmark {
  preview: string;
  rating: string;
  reviews: number;
  title: string;
  verified?: boolean;
}

export interface PlacesAdditionalStartProps {
  schedule?: {
    day: number;
    open24Hrs: boolean;
    timings: { startTime: string; endTime: string }[];
    closed: boolean;
  }[];
  opening?: { status: string; time?: string };
  landmarks?: MarketPlace[];
  timingText?: string;
}

export interface PropertiesAdditionalStartProps {
  propertyType: string;
  attributes: {
    type: 'bed' | 'bathroom' | 'kitchen' | 'parking';
    value: number;
  }[];
  details: { label: string; value: string }[];
}

export interface CommonEndProps {
  location: any;
  lat?: string;
  lng?: string;
  mapImage: string;
  contacts?: string[];
  address: string;
  setting?: {
    callsActivated: boolean;
    chatActivated: boolean;
  };
  landmarks?: [];
  rating?: boolean | string;
  rate?: number;
  totalReviews?: number;
  type: SearchTypes;
  reviews?: Reviews[];
  currency?: Currency;
  toggleModal?: () => void;
  showAuthOrRating?: any;
  noDivider?: boolean;
  MapInCenter?: boolean;
}

export type Currency = {
  classification: string;
  options: {
    purpose: number;
    rentAmount: number;
    saleAmount: number;
    rentFrequency: string;
  };
  currency: {
    _id: string;
    name: string;
    description: string;
    symbol: string;
    decimal: number;
    __v: number;
    isoCode: string;
    updatedAt: string;
  };
};
export interface PlacesAdditionalEndProps {
  lat: number;
  lng: number;
}

export interface PropertiesAdditionalEndProps {
  pricing: {
    title: string;
    currency: string;
    price: number;
    per: string;
    additionalInfo?: string;
    protertyFor: string;
    lat: number;
    lng: number;
  };
}

type WithType<T extends SearchTypes, P> = { type: T } & P;

export type ProfileDetailsStartProps = CommonStartProps &
  (
    | WithType<'place', PlacesAdditionalStartProps>
    | WithType<'property', PropertiesAdditionalStartProps>
  );

export type ProfileDetailsEndProps = CommonEndProps &
  (
    | WithType<'place', PlacesAdditionalEndProps>
    | WithType<'property', PropertiesAdditionalEndProps>
  );

export type SpecializedProfileDetailsStartProps<
  T extends SearchTypes
> = CommonStartProps &
  (T extends 'places'
    ? PlacesAdditionalStartProps
    : PropertiesAdditionalStartProps);

export type SpecializedProfileDetailsEndProps<
  T extends SearchTypes
> = CommonEndProps &
  (T extends 'places'
    ? PlacesAdditionalEndProps
    : PropertiesAdditionalEndProps);

// export type ProfileDetailsProps = CommonProps &
//   (
//     | WithType<"places", PlacesProfileDetailsProps>
//     | WithType<"properties", PropertiesProfileDetailsProps>
//   );
