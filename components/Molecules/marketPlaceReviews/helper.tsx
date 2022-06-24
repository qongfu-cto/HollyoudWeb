import React, { useRef, useState, useEffect } from 'react';
import ModalLayout from 'components/Atoms/modal';
import UserRatingReviews from '../UserRatingReviews';
import { Grid } from '@mui/material';
import Review from '../reviews';
import { useReviewStyles } from './stylesEN';
import { Reviews } from 'types/userProfile';
import { Sizes } from 'utilities/interface';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';
import QIcon from 'components/Atoms/icon';
import cross from 'assets/icons/black-cross.svg';
import back from 'assets/icons/profile-back-button.svg';
import TextButton from 'components/Atoms/textButton';
import { useOnScreen } from 'utilities/hook/useOnScreen';
import { placeProfile } from 'redux/Action/app/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import { fullPageHeight } from 'utilities/utils';

type Rate = {
  rating?: number;
  totalReviews: number;
  fontSize: Sizes;
  starsSize: 'small' | 'medium' | 'large' | undefined;
};

interface ModalReviewsProps {
  rating?: number;
  totalReviews: number;
  reviews?: Reviews[] | undefined;
  handleModalOnClose: VoidFunction;
  openModal: boolean;
  loading: React.ReactElement;
  modalStyle?: {};
  layoutPadding: string;
  mobile?: boolean;
  placeName?: string;
  modalHeight: number | string;
  modalWidth: number | string;
  style?: string;
}

export function ModalReviews({
  reviews,
  totalReviews,
  rating,
  handleModalOnClose,
  openModal,
  loading,
  modalStyle,
  layoutPadding,
  mobile,
  placeName,
  modalHeight,
  modalWidth
}: ModalReviewsProps) {
  const height = fullPageHeight();

  return (
    <ModalLayout
      modalHeight={modalHeight}
      modalWidth={modalWidth}
      openModal={openModal}
      layoutPadding={layoutPadding}
      borderRadius={mobile ? 0 : 12}
    >
      {!mobile ? (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <QIcon source={cross} click={handleModalOnClose} />
        </div>
      ) : (
        <div />
      )}

      <div style={{ ...modalStyle }}>
        {mobile && (
          <TextButton
            button
            label={placeName}
            style={{ padding: 0, margin: 0 }}
            labelStyles={{
              padding: 0,
              margin: 0,
              textTransform: 'none',
              color: Branding.Colors.primary['normal']
            }}
            buttonProps={{
              onClick: handleModalOnClose,
              disableRipple: true,
              startIcon: (
                <QIcon source={back} click={handleModalOnClose} size="small" />
              )
            }}
          />
        )}
        <QText
          label="Our Ratings"
          labelStyle={{ fontWeight: 600, fontSize: 22, margin: `5px 0` }}
          labelColor={Branding.Colors.primary.dark}
        />
        <Rating
          rating={rating}
          totalReviews={totalReviews}
          fontSize="medium"
          starsSize="small"
        />
      </div>

      <ReviewsMap
        reviews={reviews}
        reviewHeight={
          typeof modalHeight === 'number'
            ? modalHeight - 160
            : typeof modalHeight === 'string' && height
            ? height - 160
            : 500
        }
        loading={loading}
        reviewPadding={mobile ? 20 : 0}
      />
    </ModalLayout>
  );
}

export const Rating = ({ rating, totalReviews, fontSize, starsSize }: Rate) => (
  <UserRatingReviews
    totalRating={rating}
    width={'100%'}
    rating={rating}
    size={fontSize}
    totalReviews={totalReviews}
    ratingColor="#5D5D5D"
    totalReviewColor="#5D5D5D"
    starsSize={starsSize}
  />
);

export const ReviewsMap = ({
  reviews,
  reviewHeight,
  loading,
  reviewPadding
}: {
  reviews?: Reviews[];
  reviewHeight?: number | string;
  reviewPadding?: number;
  loading?: React.ReactElement;
}) => {
  const styles = useReviewStyles();

  return (
    <Grid container classes={{ root: styles.reviewsGrid }}>
      <div
        className={styles.reviewContainer}
        style={{ height: reviewHeight, padding: reviewPadding }}
      >
        {reviews?.map(r => {
          return (
            <Grid item key={r._id}>
              <Review {...r} />
            </Grid>
          );
        })}
        {loading}
      </div>
    </Grid>
  );
};

export const useReview = () => {
  const styles = useReviewStyles();
  const scrollRef = useRef(null);
  const onScreen = useOnScreen(scrollRef);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { reviews, params, place, myPlace } = useSelector(
    (state: RootState) => ({
      reviews: state.app.rate.reviews,
      params: state.app.rate.params,
      place: state.app.place.data,
      myPlace: state.app.place.myPlace
    })
  );

  const onShowMoreClicked = () => {
    dispatch(placeProfile(place._id));

    setOpenModal(true);
  };

  const onModalClose = () => {
    setOpenModal(false);
  };
  // useEffect(() => {
  //   if (onScreen) {
  //     dispatch(placeProfile(place._id));
  //   }
  // }, [
  //   onScreen,
  //   dispatch,
  //   params.currentPage,
  //   params.maxRecordsPerPage,
  //   place,
  //   myPlace
  // ]);

  return {
    styles,
    openModal,
    reviews,
    place,
    onShowMoreClicked,
    params,
    scrollRef,
    onModalClose
  };
};
