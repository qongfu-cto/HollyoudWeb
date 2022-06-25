import React, { useEffect, useState, FC } from 'react';
import UserRatingReviews from '../UserRatingReviews';
import QText from 'components/Atoms/text';
import QButton from 'components/Atoms/button';
import { Typography } from '@mui/material';
import locationIcon from '../../../assets/icons/location-icon-list.svg';
import openIcon from '../../../assets/icons/timing-icon-list.svg';
import closedIcon from '../../../assets/icons/timing-icon-list-closed.svg';
import MarketplaceProfileMobileButtons from 'components/Molecules/marketplaceProfileButtons/mobileIndex';
import {
  CommonStartProps,
  ProfileDetailsStartProps
} from '../../Organisms/ProfileDetails/types';
import { useMobileMarketplaceProfileHeadInfoStyles } from './stylesEN';
import { Branding } from 'utilities/branding';
import LikeAndShare from '../likeAndShare';
import { convertPixelsToRems } from 'utilities/theme';
import { fullPageWidth } from 'utilities/utils';
import MarketPlaceIcons from '../marketPlaceIcons';
import placesIcon from '../../../assets/icons/place-icon.svg';

const MobileMarketplaceProfileHeadInfo: FC<CommonStartProps> = ({
  contacts,
  totalRating,
  title,
  placeTimeStatus,
  workingTime,
  location,
  totalReviews,
  isLogged,
  show,
  setting,
  geometry,
  property,
  data,
  type,
  category,
  toggleModal,
  like,
  onFavoriteClicked,
  showAuthOrRating
}) => {
  const styles = useMobileMarketplaceProfileHeadInfoStyles();
  const width = fullPageWidth();

  return (
    <div
      style={{
        position: show ? 'fixed' : 'unset',
        top: 0,
        // backgroundColor: Branding.Colors.white,
        width: width ?? '100%',
        zIndex: 100
      }}
    >
      <section
        className={styles.profileDescription}
        style={{
          rowGap: show ? convertPixelsToRems(10) : convertPixelsToRems(5),
          position: 'relative'
        }}
      >
        <div
          style={{
            width: 200
          }}
        >
          <UserRatingReviews
            width={'100%'}
            rating={totalRating}
            size="medium"
            totalReviews={totalReviews}
            totalRating={totalRating}
          />
        </div>
        {/* FIXME: Show Verified Icon if place is verified  */}
        <Typography
          variant="h4"
          classes={{ root: styles.title }}
          style={{
            fontSize: show ? convertPixelsToRems(18) : convertPixelsToRems(24)
          }}
        >
          {title}
        </Typography>
        {type == 'place' && (
          <QText
            label={category}
            iconLeft={placesIcon}
            labelColor={Branding.Colors.black[86]}
            labelStyle={{
              fontSize: 16,
              fontWeight: '400'
            }}
            iconLeftStyle={{
              width: 20,
              height: 20,
              marginRight: 8
            }}
            containerMargin={`0 2px`}
          />
        )}
        {type === 'place' ? (
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
              labelStyle={{
                fontSize: show ? 12 : 16,
                marginLeft: -4,
                marginTop: -2
              }}
              iconLeft={placeTimeStatus === 'Closed' ? closedIcon : openIcon}
              iconLeftStyle={{
                marginLeft: 2
              }}
              iconHeight={32}
              iconWidth={32}
            />
            <QText
              label={
                placeTimeStatus === 'Closed'
                  ? ''
                  : workingTime?.start === '0'
                  ? '24 Hours'
                  : `${workingTime?.start} - ${workingTime?.end}`
              }
              labelStyle={{
                fontSize: show ? 12 : 16,
                marginLeft: 10,
                marginTop: -2
              }}
              labelColor={Branding.Colors.black[86]}
            />
          </div>
        ) : (
          <MarketPlaceIcons
            typeOfProperty={property?.category}
            numberOfBaths={property?.propertyInfo.bath}
            numberOfBeds={property?.propertyInfo.bed}
            numberOfParking={property?.propertyInfo.parking}
            numberOfToilet={property?.propertyInfo.toilet}
            fontsize={16}
            margin={'0 5px'}
          />
        )}
        <QText
          label={location}
          textProps={{
            variant: 'body2'
          }}
          labelStyle={{
            fontWeight: 400,
            fontSize: show ? 12 : 16,
            backgroundColor: 'transparent',
            width: width ?? '100%'
          }}
          labelColor={Branding.Colors.primary.normal}
          iconLeft={locationIcon}
          iconLeftStyle={{
            marginLeft: 2,
            width: 40,
            height: 30,
            marginTop: -4,
            marginRight: 2
          }}
          iconHeight={120}
          iconWidth={120}
        />
        {show && (
          <div style={{ position: 'absolute', right: 0 }}>
            <LikeAndShare onFavoriteClicked={onFavoriteClicked} like={like} />
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
        padding
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
