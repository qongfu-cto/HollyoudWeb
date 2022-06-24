import { FC } from 'react';
import { ProfileDetailsStartProps } from '../../Organisms/ProfileDetails/types';
import { BorderedBlock } from '../../Organisms/ProfileDetailsStart/Helpers';
import { OutlineButton } from 'components/Organisms/ProfileDetails/Helpers';
import { Rating, ReviewsMap, ModalReviews, useReview } from './helper';
import Loading from '../loading';
import QText from 'components/Atoms/text';
import { Branding } from 'utilities/branding';

type ReviewsProps = Pick<
  ProfileDetailsStartProps,
  'totalReviews' | 'rating' | 'reviews'
>;

const Reviews = () => {
  const {
    onShowMoreClicked,
    styles,
    openModal,
    reviews,
    params,
    scrollRef,
    onModalClose,
    place
  } = useReview();

  return (
    <BorderedBlock>
      <section className={styles.container} style={{ marginTop: 24 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <QText
            label={'Ratings & Reviews'}
            labelStyle={{ 
              width: 210,
              fontSize: 24,
              fontWeight: '400',
              fontFamily: 'Outfit',
              color: Branding.Colors.primary.dark,
              // marginBottom: -16
            }}
          />
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 12
            }}>
              <Rating
                rating={place.ratingsData?.totalRatings}
                totalReviews={params.totalRecords}
                fontSize="large"
                starsSize="medium"
              />
          </div>
        </div>
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
        modalHeight={700}
        modalWidth={500}
        modalStyle={{ marginBottom: 20 }}
        layoutPadding={`5px 24px 24px 24px`}
        handleModalOnClose={onModalClose}
        openModal={openModal}
        reviews={reviews}
        totalReviews={params.totalRecords}
        rating={place.ratingsData?.totalRatings}
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

export default Reviews;
