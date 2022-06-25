import { useMemo, useState, useRef, useEffect } from 'react';
import ProfilePageLayout from 'components/Layouts/placePageLayout';
import { useRouter } from 'next/router';
import { appAPI } from 'services/appApi';
import Loading from 'components/Molecules/loading';
import { GetServerSideProps } from 'next';
import MarketPlaceErrorPage from 'components/Molecules/marketplaceErrorPage';
import MobileProfilePageLayout from 'components/Layouts/placePageLayout/mobileIndex';
import { useLoadPage } from 'utilities/hook/useLoadPage';
import { useParser } from 'utilities/hook/useParser';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { placeProfile, placeProfileReceive } from 'redux/Action/app/appActions';
import { MarketPlace } from 'types/marketPlaceApiTypes';
import ErrorProfileLayout from 'components/Layouts/placePageLayout/error';
import PageHeader from 'components/Atoms/pageHeader';
import nookies from 'nookies';

// import { Styles } from './';

import { useSelector } from 'react-redux';

import { useAuthentication } from 'container/authentication';

import { makeStyles } from '@mui/styles';
// import { Branding } from 'utilities/branding';
import { convertPixelsToRems } from 'utilities/theme';
import RatingManagement from 'components/Organisms/RatingManagment';
import { restMyFavoritePlace } from 'redux/Action/myQloud/myQloudActions';
import { userAPI } from 'services/userAPI';

type Props = {
  place: MarketPlace;
  pathExist: boolean;
  myPlace: boolean;
  reviews: any;
};

function ProfilePage({ pathExist, place, myPlace, reviews }: Props) {
  const reduxProfile = useSelector((state: any) => state.user.profile);

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [successRating, setSuccessRating] = useState(false);
  const { isFallback, asPath } = useRouter();
  const { loadActive } = useLoadPage();
  const { parserData } = useParser();
  const [showNotLoggedInModal, setShowNotLoggedInModal] = useState(false);
  const [showNotLogged, setShowNotLoggedIn] = useState<any>(false);
  const [unverifiedUser, setUnVerifiedUser] = useState(false);
  const [sendVerificationEmail, setSendVerificationEmail] = useState<number>(0);

  const category =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const lastCategoryResult = useMemo(
    () => (category ? JSON.parse(category) : null),
    [category]
  );
  const search =
    typeof window !== 'undefined' ? localStorage?.getItem('search') : null;

  const lastSearchResult = useMemo(() => {
    const localSearch = search ? JSON.parse(search) : null;

    if (!localSearch && !lastCategoryResult)
      return {
        category: place?.category,
        id: place._id,
        searchText: place.name,
        mainCategoryType: 'places',
        type: place.type
      };

    if (!localSearch) return localSearch;

    return {
      category: place?.category,
      id: place._id,
      searchText: localSearch.searchText,
      mainCategoryType: localSearch.mainCategoryType,
      type: place.type,
      myPlace: localSearch?.myPlace ?? false
    };
  }, [search, place, lastCategoryResult]);

  const toggleShowNotLoggedInModal = () => {
    setShowNotLoggedInModal(!showNotLoggedInModal);
  };

  useEffect(() => {
    dispatch(placeProfileReceive(place, reviews, myPlace));
    dispatch(restMyFavoritePlace());
  }, [place, reviews, myPlace, dispatch]);

  const sendVerificationEmailFunc = async () => {
    if (reduxProfile?.email) {
      setSendVerificationEmail(0);
      await userAPI.sendVerificationEmail(
        reduxProfile?.email,
        reduxProfile?._id
      );
    }
  };

  useEffect(() => {
    if (sendVerificationEmail && reduxProfile) {
      sendVerificationEmailFunc();
    }
  }, [sendVerificationEmail, reduxProfile]);

  const currentDevice = () => {
    const deviceType = parserData?.device.type;
    console.log('deviceType', deviceType);
    if (_.isUndefined(deviceType)) {
      return 'web';
    } else {
      return deviceType;
    }
  };

  if (isFallback) {
    return <Loading />;
  }

  if (!pathExist && !place) {
    return (
      <ErrorProfileLayout>
        <MarketPlaceErrorPage />
      </ErrorProfileLayout>
    );
  }

  const toggleModal = async () => {
    // setShowModal(!showModal);
    if (showModal) {
      // if verified show rating modal else show cannot be verified
      if (reduxProfile.verified) {
        setShowModal(!showModal);
      } else {
        setUnVerifiedUser(true);
        // send verification email to user

        setSendVerificationEmail(Math.random());
      }
    } else {
      // setShowModal(!showModal);
      if (reduxProfile.verified) {
        setShowModal(!showModal);
      } else {
        setUnVerifiedUser(true);
        // send verification email to user

        setSendVerificationEmail(Math.random());
      }
    }

    setSuccessRating(false);
  };

  const showAuthOrRating = async () => {
    const userprofile = JSON.parse(localStorage.getItem('profile')!);
    if (userprofile) {
      console.log('Toggled Modal');

      if (userprofile.verified) {
        setShowModal(true);
      } else {
        setUnVerifiedUser(true);
        // send verification email to user

        setSendVerificationEmail(Math.random());
      }

      // setShowModal(!showModal);
      setSuccessRating(false);
    } else {
      toggleModal();
      toggleShowNotLoggedInModal();
      setShowNotLoggedIn(true);
    }
  };

  const pageData = () => {
    if (currentDevice() !== 'web') {
      return (
        <>
          <PageHeader
            // pageTitle={place.name}
            pageUrl={`https://hollyoud.com${asPath}`}
            description={
              place.placeData.description
                ? place.placeData.description
                : 'Connect • Collaborate • Create'
            }
            pageImage={`${place.placeData.cover.thumb}`}
            title={place.name}
          />
          <MobileProfilePageLayout
            type={place.type}
            data={place}
            pathExist={!pathExist}
            categoryName={place.category}
            toggleModal={toggleModal}
            reviews={reviews}
            showAuthOrRating={showAuthOrRating}
          />
          <RatingManagement
            toggleModal={toggleModal}
            place={place}
            setShowModal={setShowModal}
            setSuccessRating={setSuccessRating}
            showModal={showModal}
            successRating={successRating}
            setShowNotLoggedInModal={setShowNotLoggedInModal}
            showNotLoggedInModal={showNotLoggedInModal}
            toggleShowNotLoggedInModal={toggleShowNotLoggedInModal}
            setShowNotLoggedIn={setShowNotLoggedIn}
            showNotLogged={showNotLogged}
            unverifiedUser={unverifiedUser}
            setUnVerifiedUser={setUnVerifiedUser}
          />
        </>
      );
    }

    return (
      <>
        <PageHeader
          pageTitle={place.name}
          pageUrl={`https://hollyoud.com${asPath}`}
          description={
            place.placeData.description
              ? place.placeData.description
              : 'Connect • Collaborate • Create'
          }
          pageImage={`${place.placeData.cover.thumb}`}
        />
        <ProfilePageLayout
          onCrumbClicked={() =>
            localStorage?.setItem('search', JSON.stringify(lastSearchResult))
          }
          type={place.type}
          data={place}
          pathExist={!pathExist}
          lastSearchResults={lastSearchResult}
          lastCategoryResults={lastCategoryResult}
          categoryName={
            lastCategoryResult?.subCategory?.length
              ? lastCategoryResult?.subCategory
              : lastCategoryResult?.topCategory
          }
          toggleModal={toggleModal}
          rating={true}
          showAuthOrRating={showAuthOrRating}
          reviews={reviews.params.totalRecords}
        />

        <RatingManagement
          toggleModal={toggleModal}
          place={place}
          setShowModal={setShowModal}
          setSuccessRating={setSuccessRating}
          showModal={showModal}
          successRating={successRating}
          setShowNotLoggedInModal={setShowNotLoggedInModal}
          showNotLoggedInModal={showNotLoggedInModal}
          toggleShowNotLoggedInModal={toggleShowNotLoggedInModal}
          setShowNotLoggedIn={setShowNotLoggedIn}
          showNotLogged={showNotLogged}
          unverifiedUser={unverifiedUser}
          setUnVerifiedUser={setUnVerifiedUser}
        />
      </>
    );
  };

  return loadActive ? (
    <>
      <PageHeader
        pageTitle={place.name}
        pageUrl={`https://hollyoud.com${asPath}`}
        description={
          place.placeData.description
            ? place.placeData.description
            : 'Connect • Collaborate • Create'
        }
        pageImage={`${place.placeData.cover.thumb}`}
      />
      <div />
    </>
  ) : (
    pageData()
  );
}

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);
  const id = cookies?.uid ? `?userId=${cookies.uid}` : '';

  if (ctx.params?.id) {
    const response = await appAPI.getPlace(
      '612e252bdf4ea2803cde4b84',
      ctx.params?.id,
      id
    );

    // const errorCode = res.ok ? false : res.statusCode
    const myPlace = response.data?.myPlace;
    const place = response.data?.data;
    const reviews = response.data;

    if (Boolean(place) === false) {
      return {
        props: {
          pathExist: false
        }
      };
    }
    return {
      props: {
        place,
        myPlace,
        reviews,
        pathNotExist: true
      }
    };
  }
};

export default ProfilePage;
