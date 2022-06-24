import { FC } from 'react';
import { ProfileDetailsStartProps } from '../../Organisms/ProfileDetails/types';
import { BorderedBlock } from '../../Organisms/ProfileDetailsStart/Helpers';
import { OutlineButton } from 'components/Organisms/ProfileDetails/Helpers';
import { ModalReviews, Rating, ReviewsMap, useReview } from './helper';
import Loading from '../loading';
import { Branding } from 'utilities/branding';
import QText from 'components/Atoms/text';

type ReviewsProps = Pick<
  ProfileDetailsStartProps,
  'totalReviews' | 'rating' | 'reviews'
>;

const MobileReviews: FC = () => {
  const {
    onShowMoreClicked,
    styles,
    openModal,
    place,
    reviews,
    params,
    scrollRef,
    onModalClose
  } = useReview();

  return (
    <BorderedBlock>
      <section className={styles.container}>
        <QText
            label={'Ratings & Reviews'}
            labelStyle={{ 
              width: 210,
              fontSize: 24,
              fontWeight: '400',
              fontFamily: 'Outfit',
              color: Branding.Colors.primary.dark,
              marginBottom: -16
            }}
          />
        <Rating
          rating={place.ratingsData?.totalRatings}
          totalReviews={params.totalRecords}
          fontSize="large"
          starsSize="medium"
        />
        <ReviewsMap reviews={reviews?.slice(0, 5)} />
        {params.totalRecords > 5 ? (
          <div>
            <OutlineButton
              label="See More Reviews"
              onClick={onShowMoreClicked}
            />
          </div>
        ) : null}
      </section>
      <ModalReviews
        modalHeight={'100%'}
        modalWidth={'100%'}
        placeName={place.name}
        mobile
        layoutPadding="0"
        modalStyle={{
          borderBottom: `2px solid ${Branding.Colors.black[16]}`,
          padding: `20px`
        }}
        handleModalOnClose={onModalClose}
        openModal={openModal}
        reviews={reviews}
        rating={place.ratingsData?.totalRatings}
        totalReviews={params.totalRecords}
        loading={
          params.resultsInPage < params.totalRecords ? (
            <div ref={scrollRef}>
              <Loading />
            </div>
          ) : (
            <div />
          )
        }
      />
    </BorderedBlock>
  );
};

export default MobileReviews;
