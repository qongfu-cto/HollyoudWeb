import React, { FC } from 'react';
import UserRatingReviews from '../UserRatingReviews';
import QText from 'components/Atoms/text';
import QButton from 'components/Atoms/button';
import { Typography } from '@mui/material';
import locationIcon from '../../../assets/icons/location-icon-list.svg';
import openIcon from '../../../assets/icons/timing-icon-list.svg';
import closedIcon from '../../../assets/icons/timing-icon-list-closed.svg';
import MarketplaceProfileMobileButtons from 'components/Molecules/marketplaceProfileButtons/mobileIndex';
import { ProfileDetailsStartProps } from '../../Organisms/ProfileDetails/types';
import { useMobileMarketplaceProfileHeadInfoStyles } from './stylesEN';
import { Branding } from 'utilities/branding';
import LikeAndShare from '../likeAndShare';
import { convertPixelsToRems } from 'utilities/theme';
import { fullPageWidth } from 'utilities/utils';

const MobileMarketplaceProfileHeadInfo: FC<ProfileDetailsStartProps> = ({
  contacts,
  rating,
  title,
  placeTimeStatus,
  workingTime,
  location,
  totalReviews,
  isLogged,
  show,
  setting,
  geometry,
  toggleModal,
  showAuthOrRating
}) => {
  const styles = useMobileMarketplaceProfileHeadInfoStyles();
  const width = fullPageWidth();
  return (
    <div
      style={{
        position: show ? 'fixed' : 'unset',
        top: 0,
        backgroundColor: Branding.Colors.white,
        width: width ?? '100%'
      }}
    >
      <section className={styles.containerStart}>
        {/* <OutlineButton label="ADD TO LIST" size="small" onClick={() => {}}  /> */}
        {/* {isLogged && (
          <QButton
            outline
            label="ADD TO LIST "
            style={{ borderRadius: 12, height: 33, width: 120 }}
            labelStyles={{
              color: Branding.Colors.primary.normal,
              fontSize: 12
            }}
          />
        )} */}
      </section>

      <section
        className={styles.profileDescription}
        style={{
          rowGap: show ? convertPixelsToRems(10) : convertPixelsToRems(5),
          position: 'relative'
        }}
      >
        {/* <div className={styles.ratingContainer}>
          <QText label={rating} />
          <QRating
            rate={rating}
            size="medium"
            ratingLabel={`${totalReviews} Reviews`}
          />
        </div> */}

        <UserRatingReviews
          width={'100%'}
          rating={rating}
          size="medium"
          totalReviews={totalReviews}
        />
        <Typography
          variant="h4"
          classes={{ root: styles.title }}
          style={{
            fontSize: show ? convertPixelsToRems(18) : convertPixelsToRems(24)
          }}
        >
          {title}
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <QText
            label={placeTimeStatus}
            labelColor={
              placeTimeStatus === 'Closed'
                ? Branding.Colors.danger.normal
                : Branding.Colors.success.normal
            }
            labelStyle={{ fontSize: show ? 12 : 18 }}
            iconLeft={placeTimeStatus === 'Closed' ? null : openIcon}
          />
          <QText
            label={
              placeTimeStatus === 'Closed'
                ? ''
                : workingTime?.start === '0'
                ? '24 Hours'
                : `${workingTime?.start} - ${workingTime?.end}`
            }
            labelStyle={{ fontSize: show ? 12 : 16, marginLeft: 10 }}
            labelColor={Branding.Colors.black[86]}
          />
        </div>
        <QText
          label={location}
          textProps={{
            variant: 'body2'
          }}
          labelStyle={{
            fontWeight: 500,
            fontSize: show ? 12 : 18,
            backgroundColor: 'transparent',
            width: width ?? '100%'
          }}
          labelColor={Branding.Colors.primary.normal}
          iconLeft={locationIcon}
        />
        {show && (
          <div style={{ position: 'absolute', right: 0 }}>
            <LikeAndShare />
          </div>
        )}
      </section>

      {show ? (
        <section
          style={{
            borderTop: `1px solid ${Branding.Colors.black[16]}`,
            marginTop: 10,
            marginBottom: 10
          }}
        />
      ) : (
        <section
          style={{
            marginTop: 20
          }}
        />
      )}
      <MarketplaceProfileMobileButtons
        telephone={contacts[0]}
        showCall={setting?.callsActivated}
        showChat={setting?.chatActivated}
        lat={geometry?.lat}
        lng={geometry?.lng}
        toggleModal={toggleModal}
        showAuthOrRating={showAuthOrRating}
      />

      <section
        style={{
          borderTop: `1px solid ${Branding.Colors.black[16]}`,
          marginTop: 10
        }}
      />
    </div>
  );
};

export default MobileMarketplaceProfileHeadInfo;
