export interface Products{
    _id:string,
name:string,
published:boolean
launched:boolean
active:boolean,
available:boolean
verified:boolean
imagesThumbs:string[]
images:string[],
cover: {
    image: string,
    thumb: string
  },
specifications: [
    {
      label: string,
      value:string
    }],
shortDescription:string
description:string
make:string
model:string
price:string
currency:string
quantity:number
quantityType:string
priceOptions:[]
provider:string
countryId:string
location:string
createdBy:string
createdAt:string
updatedAt:string
}

export interface MarketPlaceProduct{
  
    _id: string,
    name: string,
    countryId: string,
    isLandmark: false,
    published: false,
    category: string,
    location: string,
    propertyInfo: {
      unitsInfo: {
        units: []
      },
      totalArea: {
        $numberDecimal: string
      }
    },
    type: string,
    subType: [],
    images: [
      string,
     string
    ],
    imagesThumbs: [],
    cover: {
      image: string,
      thumb: string
    },
    ratingsData: {
      score: {
        $numberDecimal:string
      }
    },
    loc: {
      type: string,
      coordinates: [
        number,
        number
      ]
    },
    tags: [],
    __v: number,
    provider: string,
    productData:Products
}