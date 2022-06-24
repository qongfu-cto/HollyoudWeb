import storeys from 'assets/icons/storey-icon.svg';
import layout from 'assets/icons/layout-icon.svg';
import bed from 'assets/icons/bedroom-icon.svg';
import kitchen from 'assets/icons/kitchen-icon.svg';
import park from 'assets/icons/parking.svg';
import ac from 'assets/icons/ac-heating-icon.svg';
import bathroom from 'assets/icons/bathroom-icon.svg';
import size from 'assets/icons/size-icon.svg';
import house from '../../../assets/icons/house.svg';
import apartment from 'assets/icons/apartment.svg';
import { propertyData } from 'types/marketPlaceApiTypes';

export type propertyDetails = {
  basicLayoutDetails: {
    layoutImages: [];
    propertyType: string;
    propertySubType: string;
    storeys: string;
    totalArea: {
      $numberDecimal: string;
    };
    totalAreaUnit: string;
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

export type Parking = {
  slots: number;
  type: string;
  _id: string;
};

export const getDetailsData = (details?: propertyData, pathLine?: string) => {
  const detailsInfo = [
    {
      label: 'Storeys',
      value: details?.layoutDetails?.basicLayoutDetails.storeys,
      icon: storeys
    },
    {
      label: 'Type',
      value: details?.layoutDetails?.basicLayoutDetails?.standardType,
      icon: [ {name:"House", src:house}, {name:"Apartment", src:apartment}]
    },
    {
      label: 'Layout',
      value: details?.layoutDetails?.basicLayoutDetails?.propertyLayout,
      icon: layout
    },
    {
      label: 'Bed',
      value: details?.layoutDetails?.roomDetails.bedrooms,
      icon: bed
    },
    {
      label: 'Kitchen',
      value: details?.layoutDetails?.kitchenDetails,
      icon: kitchen
    },
    {
      label: 'AC',
      value: details?.layoutDetails?.roomDetails.acType,
      icon: ac
    },
    { label: 'Parking', value: details?.parking, icon: park },
    {
      label: 'Size',
      value: ` ${details?.layoutDetails?.basicLayoutDetails.totalArea.$numberDecimal} ${details?.layoutDetails?.basicLayoutDetails.totalAreaUnit}`,
      icon: size
    },
    {
      label: 'Bath',
      value: `${details?.layoutDetails?.roomDetails.fullBathrooms} Full + ${details?.layoutDetails?.roomDetails.partialBathrooms} Partial`,
      icon: bathroom
    }
  ];

  return detailsInfo;
};
