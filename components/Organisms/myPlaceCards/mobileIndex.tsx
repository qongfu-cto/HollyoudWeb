import ModalLayout from 'components/Atoms/modal';
import MarketPlaceCard from 'components/Organisms/marketPlaceCard/mobileIndex';
import { Styles } from './style';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import arrowBack from 'assets/icons/arrow-left.svg';
import QText from 'components/Atoms/text';
import QIcon from 'components/Atoms/icon';
import { useRouter } from 'next/router';
import MarketPlaceErrorPage from 'components/Molecules/marketplaceErrorPage';
import MarketPlaceMobileErrorPage from 'components/Molecules/marketplaceErrorPage/mobileIndex';
import QButton from 'components/Atoms/button';
import { Branding } from 'utilities/branding';
import { useGetCategories } from 'utilities/hook/useGetCategory';
import { errors } from '.';
import MobileDummyCard from 'components/Molecules/DummyCard/mobile';

const MyPlacesMobile = () => {
  const styles = Styles();
  const router = useRouter();
  const { myPlaces, error } = useSelector((state: RootState) => ({
    myPlaces: state.myQloud.myPlaces,
    error: state.myQloud.errors
  }));

  const onCardGetClicked = (
    id: string,
    name: string,
    category: string,
    type: string
  ) => {
    const searchItem = {
      id,
      searchText: name,
      category,
      type,
      mainCategoryType: 'places'
    };
    localStorage.removeItem('category');
    localStorage.setItem('search', JSON.stringify(searchItem));
  };

  if (error?.myPlace) {
    return (
      <>
        <div className={styles.myplacesHeader}>
          <QIcon source={arrowBack} click={() => router.back()} />
          <QText
            label="My Places"
            labelStyle={{
              fontSize: 20,
              fontWeight: 500
            }}
          />
          <div style={{ width: 30 }} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: '20%'
          }}
        >
          <MarketPlaceMobileErrorPage
            categoryClicked={() => null}
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
      </>
    );
  }

  return (
    <>
      <div className={styles.myplacesHeader}>
        <QIcon source={arrowBack} click={() => router.back()} />
        <QText
          label="My Places"
          labelStyle={{
            fontSize: 20,
            fontWeight: 500
          }}
        />
        <div style={{ width: 30 }} />
      </div>
      <div className={styles.scroll}>
        {myPlaces.length
          ? myPlaces.map((result: { marketplace: any }, index: number) => {
              return (
                <div
                  key={index}
                  style={{ marginTop: 60 }}
                  onClick={() =>
                    onCardGetClicked(
                      result.marketplace._id,
                      result.marketplace.name,
                      result.marketplace.category,
                      result?.marketplace.type
                    )
                  }
                >
                  <MarketPlaceCard
                    description={result?.marketplace?.placeData[0]?.description}
                    ratingReview={
                      result?.marketplace.ratingsData.numberOfReviews
                    }
                    totalRating={result?.marketplace.ratingsData.totalRatings}
                    image={result?.marketplace?.placeData[0].cover?.image}
                    rate={result.marketplace.ratingsData.totalRatings}
                    businessHours={
                      result.marketplace.placeData[0]?.businessHours
                    }
                    path={'places'}
                    results={result.marketplace}
                    id={result.marketplace._id}
                    name={result.marketplace.name}
                    category={result.marketplace.category}
                    cardType={result?.marketplace.type}
                    verified={result?.marketplace.verified}
                    location={result?.marketplace.location ?? ''}
                    telephone={result?.marketplace.placeData[0].contactNo[0]}
                    showCall={
                      result?.marketplace.placeData[0].settings.callsActivated
                    }
                    lat={result?.marketplace.placeData[0]?.loc.coordinates[0]}
                    lng={result?.marketplace.placeData[0]?.loc.coordinates[1]}
                  />
                </div>
              );
            })
          : Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} style={{ marginTop: 60 }}>
                  <MobileDummyCard />
                </div>
              ))}
      </div>
    </>
  );
};

export default MyPlacesMobile;
