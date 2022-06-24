import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import NextIcon from '../../../assets/icons/next-icon.svg';
import { Styles } from './style';

import ARROW from '../../../assets/icons/arrow-left.svg';
import MyQloudNavBar from 'components/Molecules/MyQloudNavBar';
import MyPlaceCard from 'components/Molecules/myPlaceCard';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import { MarketPlace } from 'types/marketPlaceApiTypes';
import DummyMyPlaceCard from 'components/Molecules/myPlaceCard/dummyMyPlaceCrad';
import MarketPlaceErrorPage from 'components/Molecules/marketplaceErrorPage';
import QText from 'components/Atoms/text';
import QButton from 'components/Atoms/button';
import { Branding } from 'utilities/branding';
import { useGetCategories } from 'utilities/hook/useGetCategory';

export const errors = {
  ERROR_MAIN_TEXT: "You haven't Favorited any Places yet!",
  ERROR_SUB_TEXT:
    " You can find Places here you've favorited while Exploring the City.",
  BUTTON_TEXT: 'Explore the City'
};

const MyPlaceCards = () => {
  const style = Styles();
  const router = useRouter();
  const { myPlaces, error } = useSelector((state: RootState) => ({
    myPlaces: state.myQloud.myPlaces,
    error: state.myQloud.errors
  }));

  if (error?.myPlace) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: '10%'
        }}
      >
        <MarketPlaceErrorPage
          title={errors.ERROR_MAIN_TEXT}
          subTitle={errors.ERROR_SUB_TEXT}
        />

        <QButton
          label={errors.BUTTON_TEXT}
          buttonProps={{ href: '/' }}
          style={{
            backgroundColor: Branding.Colors.primary.normal,
            marginTop: 20
          }}
        />
      </div>
    );
  }

  return (
    <>
      <MyQloudNavBar
        backBottonText="Back to Main"
        title="My Places"
        icon={<Image src={ARROW} alt="" width={6} height={11} />}
        hideButtons
        backAction={() => router.push('/home')}
      />

      <Box className={style.results}>
        {myPlaces.length
          ? myPlaces.map((result: { marketplace: any }, index: number) => (
              <MyPlaceCard
                key={index}
                description={result?.marketplace?.placeData[0]?.description}
                ratingReview={result?.marketplace?.ratingsData?.numberOfReviews}
                totalRating={result?.marketplace.ratingsData?.totalRatings}
                image={result?.marketplace?.placeData[0]?.cover?.image}
                rate={result?.marketplace?.ratingsData?.totalRatings}
                businessHours={result?.marketplace?.placeData[0]?.businessHours}
                type={result?.marketplace.type}
                path={'places'}
                results={result.marketplace}
                id={result.marketplace._id}
                name={result.marketplace.name}
                category={result.marketplace.category}
                cardType={result?.marketplace.type}
                verified={result?.marketplace.verified}
                location={result?.marketplace.location ?? ''}
              />
            ))
          : Array(9)
              .fill(0)
              .map((_, i) => <DummyMyPlaceCard key={i} />)}
      </Box>
    </>
  );
};

export default MyPlaceCards;
