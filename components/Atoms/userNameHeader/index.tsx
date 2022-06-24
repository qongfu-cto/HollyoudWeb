import { Box } from '@mui/material';
import React from 'react';
import { Styles } from './style';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';
import bgImage from '../../../assets/images/3028@3x.png';
import UserProfileData from 'components/Molecules/userProfileData';
import { useRouter } from 'next/router';

const UserNameHeader = ({ title }: any) => {
  const styles = Styles();
  const isServer = () => typeof window === `undefined`;
  const router = useRouter();

  return isServer() ? null : (
    <>
      <Box className={styles.navigation}>
        <ArrowBackIosIcon
          onClick={() => router.push('/home')}
          className={styles.icon}
        />
        <p className={styles.name}>{title ?? 'username.user'}</p>
      </Box>
    </>
  );
};

export default UserNameHeader;
