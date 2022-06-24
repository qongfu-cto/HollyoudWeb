import React, { useEffect, useRef, useState } from 'react';
import { useProfileCardLayoutStylesEN } from './styleEN';
import ProfileBackground from '../../../assets/images/profile-background.png';
import camera from '../../../assets/icons/camera-icon.svg';
import location_icon from '../../../assets/icons/schedule-location.svg';
import Img from '../../Atoms/img';
import QAvatar from '../../Atoms/avatar';
import QIcon from '../../Atoms/icon';
import QText from '../../Atoms/text';
import QButton from '../../Atoms/button';
import { Branding } from '../../../utilities/branding';
import 'react-image-crop/dist/ReactCrop.css';
import CropImage from '../../Molecules/cropImange';
import { useDispatch, useSelector } from 'react-redux';
import { uploadAvatar } from '../../../redux/Action/user/userActions';
import { RootState } from '../../../redux/Reducer/root';
import { api } from '../../../services/userAPI';
import { useRouter } from 'next/router';
import { isUndefined } from 'lodash';
import { Box } from '@mui/material';
import { ProfileButtonsArray } from './helper';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ProfileCardLayoutProps {
  userProfile: {
    mobileCountry: any;
    first_name: string;
    last_name: string;
    location: string;
    username: string;
    avatar: string;
    bio: string;
    onboarding_step: number;
    email: string;
    gender: string;
    dob: string;
    tagLine: string;
    display_name: string;
  };
}

function ProfileCardLayout({ userProfile }: ProfileCardLayoutProps) {
  const uploadRef = useRef<HTMLInputElement>(null);
  const { back, push } = useRouter();

  const [result, setResult] = useState<FormData>();
  const dispatch = useDispatch();
  const avatar = useSelector((state: RootState) => state.user.avatar);
  // const { user } = useSelector((state: any) => ({ ...state }));

  console.log('user profile ', avatar);
  useEffect(() => {
    if (result) {
      dispatch(uploadAvatar(result));
    }
  }, [result, dispatch]);

  const styles = useProfileCardLayoutStylesEN();
  return (
    <Box className={styles.container}>
      <Box className={styles.topContainer}>
        {/* // FIXME: Change background image to rectangle and add border radius. */}
        <Img
          imgProps={{
            height: 227,
            width: 769,
            src: ProfileBackground
          }}
          style={styles.backImage}
        />
        <Box className={styles.avatarContainer}>
          <QAvatar
            avatar={
              `${api}/profile/uploads/${avatar}` ??
              '../../../assets/images/avatar.png'
            }
            avatarStyle={{
              width: 127,
              height: 127,
              border: `3px solid white`,
              objectFit: 'cover',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.24)'
            }}
          />
          <CropImage
            ref={uploadRef}
            imageResult={setResult}
            container={styles.icon}
            circularCrop={true}
          >
            <QIcon
              iconProps={{ width: 25, height: 25, src: camera }}
              click={() => uploadRef?.current?.click()}
            />
          </CropImage>
        </Box>

        <QText
          label={
            !isUndefined(userProfile?.display_name) &&
            userProfile?.display_name !== ''
              ? `${userProfile?.display_name}`
              : ''
          }
          labelStyle={{
            // width: 166,
            height: 28,
            textAlign: 'left',
            fontSize: 24,
            color: Branding.Colors.black[86],
            fontWeight: '500',
            fontFamily: 'Outfit',
            marginTop: 16,
            marginLeft: 112,
            marginRight: 112
          }}
          // textProps={{ variant: 'h4', style: {  } }}
          // labelColor={Branding.Colors.black[100]}
        />

        <QText
          // label="Business Man | Owner of House of Pancakes"
          label={userProfile?.tagLine}
          labelStyle={{
            // width: 410,
            height: 28,
            textAlign: 'left',
            fontSize: 20,
            color: Branding.Colors.black[60],
            fontWeight: '400',
            fontFamily: 'Roboto',
            marginTop: 8,
            marginLeft: 112,
            marginRight: 112
          }}
          // labelColor={Branding.Colors.black[86]}
        />
      { 
        userProfile?.mobileCountry?.country &&
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <LocationOnIcon
              style={{
                width: 16,
                height: 24,
                display: 'table-cell',
                verticalAlign: 'middle',
                marginTop: 11,
                marginRight: 4,
                marginLeft: -10,
                color: Branding.Colors.primary.normal
              }}
              // className={styles.locationIcon}
            />{' '}
          <QText
            // label="Business Man | Owner of House of Pancakes"
            label={userProfile?.mobileCountry?.country}
            labelStyle={{
              // width: 410,
              height: 28,
              textAlign: 'left',
              fontSize: 20,
              color: Branding.Colors.primary.normal,
              fontWeight: '400',
              fontFamily: 'Roboto',
              marginTop: 8,
              // marginLeft: 112,
              // marginRight: 112
            }}
            // labelColor={Branding.Colors.black[86]}
          />
        </div>
      } 
      </Box>
      <Box className={styles.buttomContainer}>
        {!isUndefined(userProfile?.bio) && userProfile?.bio !== '' && (
          <>
            <QText
              label="About Me"
              labelStyle={{
                // width: 410,
                height: 30,
                textAlign: 'left',
                fontSize: 24,
                color: Branding.Colors.blue.variant_8,
                fontWeight: '500',
                fontFamily: 'Outfit',
                marginTop: 40,
                marginLeft: 112,
                marginRight: 112
              }}
              // textProps={{ variant: 'h4', margin: 2 }}
            />
            <QText
              // textProps={{ style: { textAlign: 'justify' } }}
              // labelColor={Branding.Colors.black[60]}
              label={userProfile?.bio}
              labelStyle={{
                // width: 410,
                // height: 30,
                textAlign: 'justify',
                fontSize: 16,
                color: Branding.Colors.black[60],
                fontFamily: 'Roboto',
                marginTop: 10,
                marginLeft: 112,
                marginRight: 112
              }}
            />
          </>
        )}
        <QText
          label="Manage"
          labelStyle={{
            // width: 410,
            height: 30,
            textAlign: 'left',
            fontSize: 24,
            color: Branding.Colors.blue.variant_8,
            fontWeight: '500',
            fontFamily: 'Outfit',
            marginTop: 27,
            marginLeft: 112,
            marginRight: 112
          }}
          // textProps={{ variant: 'h4', margin: 2 }}
        />
        <Box className={styles.ManageContainer}>
          <ProfileButtonsArray />
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileCardLayout;
