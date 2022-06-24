export interface Profile{
    onboarding_step:number
    email:string
    username:string
    first_name:string
    last_name:string
    gender:string
    dob:string
    location:string
    avatar:string
    bio:string
    mobile:string
    id:string
    display_name:string
    tagLine:string
    languages:string
    nationality: {
        id: number,
        name: string
      }
}

export interface Reviews{
  _id: string;
  userId: string,
  marketplaceId: string,
  rating: number,
  hidden: boolean,
  review: string,
  requestToHide:number,
  createdAt: string;
  updatedAt: string;
  forReview:boolean;
  __v: number;
  user: {
    _id: string,
    email: string,
    username: string,
    gender: string,
    languages: [],
    createdAt: string,
    updatedAt: string,
    first_name: string,
    last_name: string,
    user_type: '612e0b45513ee01cd772e2ff',
    avatar: string
  },
}

