import { Avatar, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import { Branding } from 'utilities/branding';
import { Styles } from './style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import { api } from 'services/myQloudApi';
import User from '../../../assets/icons/user.svg';
import QIcon from 'components/Atoms/icon';
import CAMERA from '../../../assets/icons/camera-icon.svg';

interface Props {
  box?: boolean;
}

const UserProfileData = ({ box }: Props) => {
  const styles = Styles();
  const isServer = () => typeof window === `undefined`;

  const [isVisible, setIsVisible] = React.useState(false);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);

  const bio = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
  mollitia, molestiae quas vel sint commodi repudiandae consequuntur
  voluptatum laborum numquam blanditiis harum quisquam eius sed odit
  fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
  accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
  molestias architecto voluptate aliquam nihil, eveniet aliquid culpa`;

  const [showFullBio, setShowFullBio] = useState(false);

  const { profile, location } = useSelector(({ user }: any) => ({
    profile: user.profile,
    location: user.geolocation
  }));

  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState<FormData>();

  return isServer() ? null : (
    <div className={[styles.bgWhite, box && styles.plr].join(' ')}>
      <div className={styles.fullWidth}>
        <Avatar
          sx={{
            width: 148,
            height: 145,
            border: `4px solid ${Branding.Colors.white}`,
            padding: 0,
            margin: 0,
            top: -74
          }}
          alt={profile.display_name}
          src={
            profile?.avatar
              ? profile.avatar?.includes('https')
                ? profile.avatar
                : `${api}/profile/uploads/${profile?.avatar}`
              : User
          }
        />
      </div>
      {(profile?.mobileCountry?.country || location?.country_name) && (
        <div className={styles.center}>
          <p className={styles.avatarName}>{profile?.display_name}</p>
          <Typography className={styles.bio}>{profile?.tagLine}</Typography>
          <p className={styles.location}>
            <LocationOnIcon
              style={{
                width: 10,
                height: 18,
                display: 'table-cell',
                verticalAlign: 'middle'
              }}
              className={styles.locationIcon}
            />{' '}
            {profile?.mobileCountry?.country || location?.country_name}
          </p>
        </div>
      )}
      {profile?.bio && (
        <div className={styles.bioSection}>
          <p className={styles.about}>About Me</p>
          <p className={styles.bioPara}>
            {!showFullBio && profile?.bio?.length > 165
              ? `${profile?.bio.substring(0, 155)}...`
              : profile?.bio}
            {profile?.bio?.length > 165 ? (
              showFullBio ? (
                <span
                  className={styles.morebtn}
                  onClick={() => {
                    setShowFullBio(!showFullBio);
                  }}
                >
                  Less
                </span>
              ) : (
                <span
                  className={styles.morebtn}
                  onClick={() => {
                    setShowFullBio(!showFullBio);
                  }}
                >
                  More
                </span>
              )
            ) : null}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfileData;
