import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  ClickAwayListener
} from '@mui/material';
import Link from 'next/link';
import { FC, useState } from 'react';
import { usePlaceCardStyles } from './stylesEN';
import { api } from 'services/userAPI';
import QRating from 'components/Atoms/Qrating';
import QText from 'components/Atoms/text';
import { useBusinessHoursTiming } from 'utilities/hook/useBusinessHoursTiming';
import { Branding } from 'utilities/branding';
import openIcon from '../../../assets/icons/timing-icon-list.svg';
import closedIcon from '../../../assets/icons/timing-icon-list-closed.svg';
import locationIcon from '../../../assets/icons/location-icon-list.svg';
import placesIcon from '../../../assets/icons/place-icon.svg';
import propertiesIcon from '../../../assets/icons/property-icon.svg';
import _ from 'lodash';
import MarketplaceProfileMobileButtons from '../marketplaceProfileButtons/mobileIndex';
import Verified from '../../../assets/icons/verified-seal.svg';
import { useHandleResize } from 'utilities/hook/useHandleResize';
import { useRouter } from 'next/router';
import { DropDown } from '../marketplaceProfileButtons';

interface PlaceCardProps {
  ratingReview: number;
  location: string;
  businessHours: {
    day: number;
    open24Hrs: boolean;
    closed: boolean;
    timings: {
      startTime: string;
      endTime: string;
    }[];
  }[];
  name: string;
  path: string;
  rate: number;
  image: string;
  category: string;
  cardType: 'place' | 'property';
  id: string;
  verified: boolean;
  description: string;
  totalRating: number;
  results: any;
  type: string;
}

const MyPlaceCard: FC<PlaceCardProps> = ({
  name,
  location,
  ratingReview,
  businessHours,
  path,
  rate,
  image,
  category,
  cardType,
  verified,
  id,
  results,
  totalRating,
  description,
  type
}) => {
  const styles = usePlaceCardStyles();
  const [timingText, workingTime] = useBusinessHoursTiming(businessHours);
  const [width] = useHandleResize();
  const { push } = useRouter();
  const [show, setShow] = useState(false);

  const onCardGetClicked = () => {
    const searchItem = {
      id,
      searchText: name,
      category,
      type,
      mainCategoryType: 'places',
      myPlace: true
    };
    localStorage.removeItem('category');
    localStorage.setItem('search', JSON.stringify(searchItem));
    push(`/places/${id}/${name?.replace(/\s/g, '-')}`);
  };

  const descriptionLength =
    width && width < 1000 ? 45 : width < 1350 ? 50 : width < 1550 ? 55 : 65;

  return (
    <div style={{ position: 'relative' }}>
      <Card classes={{ root: styles.card }}>
        <CardActionArea
          disableRipple
          disableTouchRipple
          classes={{
            focusHighlight: styles.focus,
            focusVisible: styles.action
          }}
          onClick={onCardGetClicked}
        >
          <CardMedia
            classes={{ img: styles.image }}
            component="img"
            height="216"
            image={`${api}/profile/uploads/${image}`}
            alt="house"
          />
        </CardActionArea>
        <CardContent classes={{ root: styles.content }}>
          <CardActionArea
            disableRipple
            disableTouchRipple
            classes={{
              focusHighlight: styles.focus,
              focusVisible: styles.action
            }}
            onClick={onCardGetClicked}
          >
            <div className={styles.header}>
              <QRating
                ratingLabel={
                  ratingReview === 1
                    ? `${ratingReview} review`
                    : `${ratingReview} reviews`
                }
                rate={rate}
              />
              <QText
                iconLeft={timingText === 'Closed' ? closedIcon : openIcon}
                label={timingText}
                iconLeftStyle={{
                  // marginTop: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  margin: 0,
                  width: 30,
                  height: 30
                }}
                labelStyle={{
                  color:
                    timingText === 'Closed'
                      ? Branding.Colors.danger.normal
                      : Branding.Colors.success.normal,
                  fontSize: 13,
                  whiteSpace: 'nowrap'
                }}
              />
            </div>
            <QText
              containerMargin={verified ? 0 : `0 5px`}
              iconLeft={verified ? Verified : null}
              label={name}
              textProps={{ classes: { root: styles.title } }}
            />
            <div className={styles.footer}>
              <QText
                label={_.truncate(location, { length: 25 })}
                labelStyle={{
                  font: 'normal normal medium 8px/14px Outfit',
                  fontSize: '12px',
                  letterSpacing: 0
                }}
                iconLeftStyle={{
                  margin: 0
                }}
                iconLeft={locationIcon}
                labelColor={Branding.Colors.primary.normal}
              />
              <p className={styles.divider}> | </p>
              <QText
                iconLeft={cardType == 'place' ? placesIcon : propertiesIcon}
                iconLeftStyle={{
                  width: 14,
                  height: 14,
                  marginBottom: 5
                }}
                label={_.truncate(category, { length: 30 })}
                labelStyle={{
                  font: 'normal normal medium 8px/14px Outfit',
                  fontSize: '12px',
                  letterSpacing: 0,
                  paddingLeft: 5
                }}
                labelColor={Branding.Colors.black['60']}
              />
            </div>
            <QText
              label={_.truncate(description, {
                length: descriptionLength
              })}
              labelStyle={{
                font: 'normal normal medium 8px/14px Outfit',
                fontSize: '12px',
                letterSpacing: 0,
                paddingLeft: 10
              }}
              labelColor={Branding.Colors.black['60']}
            />
          </CardActionArea>
          <MarketplaceProfileMobileButtons
            customCall
            onCallClicked={() => setShow(!show)}
            lat={results?.placeData[0]?.loc?.coordinates[0]}
            lng={results?.placeData[0]?.loc?.coordinates[1]}
          />
        </CardContent>
      </Card>

      {show && (
        <ClickAwayListener onClickAway={() => setShow(false)}>
          <div style={{ position: 'absolute', right: 0, bottom: 20 }}>
            <DropDown
              label={'Tel :'}
              labelContent={`${results?.placeData[0]?.contactNo[0]} `}
              buttonLabel="Call Now"
              href={`tel:${results?.placeData[0]?.contactNo[0]}`}
            />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default MyPlaceCard;
