import { FC, useCallback, useEffect, useState } from 'react';
import { ClickAwayListener, Typography } from '@mui/material';
import { Branding } from 'utilities/branding';
import Reviews from '../../Molecules/marketPlaceReviews';
import { useProfileDetailsStartStyles } from './stylesEN';
import locationIcon from '../../../assets/icons/location-icon-list.svg';
import PlaceSchedule from '../../Molecules/marketPlaceSchedule';
import Landmarks from '../../Molecules/marketPlaceNeareByLandingmarks';
import openIcon from '../../../assets/icons/timing-icon-list.svg';
import closedIcon from '../../../assets/icons/timing-icon-list-closed.svg';
import unFavorite from 'assets/icons/follow.svg';
import favorite from 'assets/icons/following.svg';

import UserRatingReviews from 'components/Molecules/UserRatingReviews';
import MarketPlaceProfileAmenities from '../../Molecules/marketPlaceProfileAmenities';
import MarketPlacePropertyDetails from '../../Molecules/marketPlacePropertyDetails';
import {
  CommonStartProps,
  ProfileDetailsStartProps
} from '../ProfileDetails/types';
import QText from 'components/Atoms/text';
import QButton from 'components/Atoms/button';
import { useUserIsLogged } from 'utilities/hook/useUserIsLogged';
import Verified from '../../../assets/icons/verified-seal.svg';
import style from 'styles/Home.module.css';
import TextButton from 'components/Atoms/textButton';
import MarketPlaceIcons from 'components/Molecules/marketPlaceIcons';
import Img from 'components/Atoms/img';
import Toast from 'components/Atoms/newToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import {
  getMyPlaces,
  updateMyPlaces
} from 'redux/Action/myQloud/myQloudActions';
import likeActive from '../../../assets/icons/like-active.svg';
import likeInactive from '../../../assets/icons/like-inactive.svg';
import MarketPlaceProfileMap from 'components/Molecules/marketplaceProfileMap';
import QIcon from 'components/Atoms/icon';
import rate from 'assets/icons/rateDesktop.svg';
import scheduleOpen from 'assets/icons/expand-schedule.svg';
import scheduleClose from 'assets/icons/expand-schedule-close.svg';
import { ScheduleModal } from './Helpers';
import placeIcon from '../../../assets/icons/place-icon.svg';

const ProfileDetailsStart: FC<CommonStartProps> = ({
  amenities,
  location,
  data,
  totalReviews,
  title,
  description,
  schedule,
  placeTimeStatus,
  workingTime,
  totalRating,
  landmarks,
  verified,
  type,
  property,
  toggleModal,
  rating,
  category,
  ...rest
}) => {
  const styles = useProfileDetailsStartStyles();
  const dispatch = useDispatch();
  const { isLogged } = useUserIsLogged();
  const [showMore, setShowMore] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showToast, setToast] = useState<{
    value: boolean;
    type: 'success' | 'error';
  }>({
    value: false,
    type: 'success'
  });

  const { myPage, favoritePlaceMessage, products } = useSelector(
    (state: RootState) => ({
      myPage: state.app.place.myPlace,
      favoritePlaceMessage: state.myQloud.favoritePlaceMessage,
      products: state.app.products
    })
  );
  const [like, setLike] = useState(() => myPage);

  const onFavoriteClicked = () => {
    dispatch(updateMyPlaces(data._id));
  };

  useEffect(() => {
    if (favoritePlaceMessage?.success !== undefined) {
      setLike(favoritePlaceMessage.success);
      setToast({
        value: true,
        type: favoritePlaceMessage.success ? 'success' : 'error'
      });
      dispatch(getMyPlaces());
    }
  }, [favoritePlaceMessage.success, dispatch]);

  return (
    <section className={styles.container}>
      <section className={styles.containerStart} style={{ marginTop: -64 }}>
        <Toast
          message={favoritePlaceMessage.message}
          visible={showToast.value}
          duration={3000}
          setVisible={() => {
            setToast({
              value: false,
              type: like ? 'success' : 'error'
            });
          }}
          type={showToast.type}
        />

        <div style={{ marginLeft: verified ? 33 : 0, marginBottom: -48 }}>
          <UserRatingReviews
            width={'50%'}
            rating={totalRating}
            size="medium"
            starsSize="medium"
            totalReviews={totalReviews}
            totalRating={totalRating}
          />
        </div>
        {/* <OutlineButton label="ADD TO LIST" size="small" onClick={() => {}}  /> */}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 40 }}>
          <div className={styles.fav}>
            <QIcon source={rate} click={toggleModal} iconStyle={styles.icon} />
          </div>
          {isLogged && (
            <div className={styles.fav}>
              <QIcon
                source={
                  //FIXME change icons to  favorite : unFavorite
                  like ? likeActive : likeInactive
                }
                click={onFavoriteClicked}
              />
            </div>
          )}
        </div>
      </section>
      <section className={styles.profileDescription}>
        <QText
          label={title}
          iconLeft={verified ? Verified : null}
          textProps={{ classes: { root: styles.title } }}
          labelStyle={{ fontSize: 28, fontWeight: '500', fontFamily: 'Outfit' }}
        />
        <div className={styles.placeType}>
          <QText
            label={category}
            labelColor={Branding.Colors.black[60]}
            labelStyle={{ fontSize: 18, marginLeft: 3 }}
            iconLeft={placeIcon}
            iconHeight={24}
            iconWidth={24}
            iconLeftStyle={{
              marginTop: 4
            }}
          />
        </div>
        {type === 'place' ? (
          <ClickAwayListener onClickAway={() => setShowSchedule(false)}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 0,
                position: 'relative'
              }}
            >
              <QText
                label={placeTimeStatus}
                labelColor={
                  placeTimeStatus === 'Closed'
                    ? Branding.Colors.danger.normal
                    : Branding.Colors.success.normal
                }
                labelStyle={{ fontSize: 18 }}
                iconLeft={placeTimeStatus === 'Closed' ? closedIcon : openIcon}
                iconHeight={32}
                iconWidth={32}
                iconLeftStyle={{
                  marginTop: 4,
                  marginLeft: 0
                }}
              />
              <QText
                label={
                  placeTimeStatus === 'Closed'
                    ? ''
                    : workingTime?.start === '0'
                    ? '24 Hours'
                    : `${workingTime?.start} - ${workingTime?.end}`
                }
                labelStyle={{ fontSize: 16, marginLeft: 10, marginTop: 3 }}
                labelColor={Branding.Colors.black[86]}
                iconImageRight={
                  <QIcon
                    source={showSchedule ? scheduleOpen : scheduleClose}
                    click={() => setShowSchedule(!showSchedule)}
                  />
                }
              />

              <div>
                {showSchedule && (
                  <ScheduleModal>
                    <PlaceSchedule schedule={schedule} />
                  </ScheduleModal>
                )}
              </div>
            </div>
          </ClickAwayListener>
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

        {/*
        {rest.type === "properties" ? (
          <PropertyDescription
            propertyType={rest.propertyType}
            attributes={rest.attributes}
          />
        ) : (
          <div />
          // <PlaceDescription opening={rest.opening} />
        )} */}
        <div style={{ paddingBottom: 16, marginTop: -12 }}>
          <QText
            label={location}
            textProps={{
              variant: 'body2'
            }}
            labelStyle={{
              fontWeight: '400',
              fontSize: 18
            }}
            labelColor={Branding.Colors.primary.normal}
            iconLeft={locationIcon}
            iconHeight={32}
            iconWidth={32}
            iconLeftStyle={{
              marginTop: 4,
              marginLeft: 0
            }}
          />
        </div>
        {description && description.length > 300 ? (
          <section className={styles.borderedBlock}>
            <p
              id={!showMore ? style.pText : ''}
              //variant="body2"

              style={{
                width: '98%',
                marginBottom: 0,
                overflow: 'hidden',
                textOverflow: ' ellipsis',
                paddingLeft: 36,
                textAlign: 'justify',
                textJustify: 'inter-word',
                marginTop: -32,
                color: Branding.Colors.black[60],
                fontFamily: 'Roboto',
                lineHeight: 1.6
              }}
            >
              {description}
            </p>
            <TextButton
              button
              label={!showMore ? 'show more' : ' show less'}
              style={{
                padding: ` 5px  0 0 34px`,
                lineHeight: 0,
                marginBottom: 16
              }}
              buttonProps={{
                onClick: () => setShowMore(!showMore),
                disableRipple: true
              }}
            />
          </section>
        ) : description ? (
          <section className={styles.borderedBlock}>
            <p
              style={{
                width: '98%',
                marginBottom: 16,
                overflow: 'hidden',
                textOverflow: ' ellipsis',
                paddingLeft: 34,
                textAlign: 'justify',
                textJustify: 'inter-word',
                marginTop: -32,
                color: Branding.Colors.black[60],
                fontFamily: 'Roboto',
                lineHeight: 1.6
              }}
            >
              {description}
            </p>
          </section>
        ) : (
          <div style={{ height: 0 }} />
        )}
      </section>
      {type === 'property' ? (
        <MarketPlacePropertyDetails
          iconsArray={property?.propertyData?.mainCategory?.config?.details}
          details={property?.propertyData}
          parking={property?.propertyData.parking}
          type={property?.category}
        />
      ) : null}
      {amenities?.length ? (
        <MarketPlaceProfileAmenities amenities={amenities} />
      ) : null}
      {/* {products?.length ? (
        <MarketPlaceProfileMap
          location={data?.placeData.location}
          address={data?.placeData.location.official_address}
          mapImage={data?.placeData?.location?.mapSnapshot}
          type={type}
        />
      ) : null} */}
      {landmarks?.length ? <Landmarks landmarks={landmarks} /> : null}
      <Reviews />
    </section>
  );
};

export default ProfileDetailsStart;
