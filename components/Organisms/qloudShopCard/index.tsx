import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Paper } from '@mui/material';
import { useProfileCardLayoutStylesEN } from './styleEN';
import { Branding } from '../../../utilities/branding';
import 'react-image-crop/dist/ReactCrop.css';
import CropImage from '../../Molecules/cropImange';
import { uploadAvatar } from '../../../redux/Action/user/userActions';
import { RootState } from '../../../redux/Reducer/root';
import { api } from '../../../services/userAPI';
import { useRouter } from 'next/router';
import { isUndefined } from 'lodash';
import EmblaCarousel from '../../Atoms/EmblaCarousel';
import Img from '../../Atoms/img';
import QAvatar from '../../Atoms/avatar';
import QIcon from '../../Atoms/icon';
import QText from '../../Atoms/text';

import ProfileBackground from '../../../assets/images/profile-background.png';
import camera from '../../../assets/icons/camera-icon.svg';
import ROOF from '../../../assets/icons/shop-roof.svg';
import SHOP from '../../../assets/icons/shop-icon.svg';
import VERIFY from '../../../assets/icons/verify-icon.svg';
import BUSINESS from '../../../assets/icons/business.svg';
import CLOUD from '../../../assets/icons/cloudy.svg';
import PROFESSIONAL from '../../../assets/icons/professional.svg';
import PROPERTY from '../../../assets/icons/property.svg';

interface ShopCardLayoutProps {
  userProfile?: any;
}

function ShopCardLayout({ userProfile }: ShopCardLayoutProps) {
  const uploadRef = useRef<HTMLInputElement>(null);
  const { back, push } = useRouter();
  const styles = useProfileCardLayoutStylesEN();
  const [result, setResult] = useState<FormData>();
  const dispatch = useDispatch();
  const avatar = useSelector((state: RootState) => state.user.avatar);
  const [cardList, setCardList] = useState([
    {
      icon: PROFESSIONAL,
      title: 'Professional',
      btnText: 'Free Upgrade',
      btnAction: null,
      text: 'Learn More',
      action: null,
      required: 'Verification Required',
      requiredAction: null
    },
    {
      icon: BUSINESS,
      title: 'List my Business',
      btnText: 'Free Upgrade',
      btnAction: null,
      text: 'Learn More',
      action: null,
      required: 'Verification Required',
      requiredAction: null
    },
    {
      icon: PROPERTY,
      title: 'List my Properties',
      btnText: 'Free Upgrade',
      btnAction: null,
      text: 'Learn More',
      action: null,
      required: 'Verification Required',
      requiredAction: null
    }
  ]);

  useEffect(() => {
    if (result) {
      dispatch(uploadAvatar(result));
    }
  }, [result, dispatch]);

  return (
    <Box className={styles.container}>
      <Img imgProps={{ src: ROOF }} style={styles.backImage} />

      <Box className={styles.avatarContainer}>
        <Img imgProps={{ src: CLOUD }} style={styles.backImage} />
        <QText
          label={`Welcome to the`}
          labelStyle={{
            position: 'absolute',
            bottom: 170,
            right: 93,
            fontSize: 32,
            fontFamily: 'Poppins',
            color: Branding.Colors.blue.variant_8,
            fontWeight: '500',
            textAlign: 'left'
            // width: 254
          }}
        />
        <QText
          label={`Qloud Shop`}
          labelStyle={{
            position: 'absolute',
            bottom: 96,
            right: 45,
            fontSize: 60,
            fontFamily: 'Poppins',
            color: Branding.Colors.blue.variant_8,
            fontWeight: '500',
            textAlign: 'left'
            // width: 352
          }}
        />
        <QText
          label={`How can we help!`}
          labelStyle={{
            position: 'absolute',
            bottom: 53,
            right: 93,
            fontSize: 28,
            fontFamily: 'Poppins',
            color: Branding.Colors.blue.variant_8,
            fontWeight: '500',
            textAlign: 'left'
            // width: 248
          }}
        />
      </Box>

      <Box className={styles.topContainer}>
        <Box className={styles.verifyContainer}>
          <Img imgProps={{ src: VERIFY }} style={styles.backImage} />
          <Box className={styles.textContainer}>
            <QText
              label={`Get Verified!`}
              labelStyle={{
                fontSize: 18,
                fontFamily: 'Outfit',
                color: Branding.Colors.primary.normal,
                fontWeight: '500',
                textAlign: 'left'
              }}
            />
            <QText
              label={`Upload Now`}
              labelStyle={{
                fontSize: 12,
                fontFamily: 'Outfit',
                textAlign: 'left',
                color: Branding.Colors.blue.variant_4
              }}
            />
          </Box>
        </Box>
        <Box className={styles.verifyContainer}>
          <Img imgProps={{ src: SHOP }} style={styles.backImage} />
          <Box className={styles.textContainer}>
            <QText
              label={`Wanna learn more about Qloud Shop?`}
              labelStyle={{
                fontSize: 12,
                fontFamily: 'Outfit',
                color: Branding.Colors.black[86],
                fontWeight: '500',
                textAlign: 'left',
                width: 105
              }}
            />
            <QText
              label={`Click Here`}
              labelStyle={{
                fontSize: 12,
                fontFamily: 'Outfit',
                textAlign: 'left',
                color: Branding.Colors.blue.variant_4
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box className={styles.cardContainer}>
        <EmblaCarousel slides={cardList} />
      </Box>
    </Box>
  );
}

export default ShopCardLayout;
