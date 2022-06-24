import { useEffect, useMemo } from 'react';
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

type Props = {
  property: MarketPlace;
  pathExist: boolean;
};

function ProfilePage({ pathExist, property }: Props) {
  const { isFallback, asPath } = useRouter();
  const { loadActive } = useLoadPage();
  const { parserData } = useParser();
  const dispatch = useDispatch();
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

    if (!localSearch) return localSearch;

    return {
      category: property?.category,
      id: property._id,
      searchText: localSearch.searchText,
      mainCategoryType: localSearch.mainCategoryType,
      type: property.type
    };
  }, [search, property]);

  useEffect(() => {
    if (lastSearchResult) {
      localStorage?.setItem('search', JSON.stringify(lastSearchResult));
    }
  }, [lastSearchResult]);

  useEffect(() => {
    dispatch(placeProfile(property._id));
  }, []);

  const currentDevice = () => {
    const deviceType = parserData.device.type;

    if (_.isUndefined(deviceType)) {
      return 'web';
    } else {
      return deviceType;
    }
  };

  if (isFallback) {
    return <Loading />;
  }

  if (!pathExist && !property) {
    return (
      <ErrorProfileLayout>
        <MarketPlaceErrorPage />
      </ErrorProfileLayout>
    );
  }

  const pageData = () => {
    if (currentDevice() !== 'web') {
      return (
        <>
          <PageHeader
            pageTitle={property.name}
            pageUrl={`https://qloudcity.com${asPath}`}
            description={
              property.propertyData.description
                ? property.propertyData.description
                : 'Explore Places to Eat, Shop & Go!'
            }
            pageImage={`${property.propertyData.cover.thumb}`}
          />
          <MobileProfilePageLayout
            type={property.type}
            data={property}
            pathExist={!pathExist}
          />
        </>
      );
    }

    return (
      <>
        <PageHeader
          pageTitle={property.name}
          pageUrl={`https://qloudcity.com${asPath}`}
          description={
            property.propertyData.description
              ? property.propertyData.description
              : 'Explore Places to Eat, Shop & Go!'
          }
          pageImage={`${property.propertyData.cover.thumb}`}
        />
        <ProfilePageLayout
          reviews={0}
          toggleModal={() => {}}
          onCrumbClicked={() =>
            localStorage?.setItem('search', JSON.stringify(lastSearchResult))
          }
          lastCategoryResults={lastCategoryResult}
          lastSearchResults={lastSearchResult}
          type={property.type}
          data={property}
          pathExist={!pathExist}
          categoryName={
            lastCategoryResult?.subCategory?.length
              ? lastCategoryResult?.subCategory
              : lastCategoryResult?.topCategory
          }
        />
      </>
    );
  };

  return loadActive ? (
    <>
      <PageHeader
        pageTitle={property.name}
        pageUrl={`https://qloudcity.com${asPath}`}
        description={
          property.propertyData.description
            ? property.propertyData.description
            : 'Explore Places to Eat, Shop & Go!'
        }
        pageImage={`${property.propertyData.cover.thumb}`}
      />
      <div />
    </>
  ) : (
    pageData()
  );
}

export const getServerSideProps = async ({
  params
}: {
  params: { id: string };
}) => {
  const response = await appAPI.getProperty(
    '612e252bdf4ea2803cde4b84',
    params?.id
  );

  // const errorCode = res.ok ? false : res.statusCode

  const property = response.data?.data;

  if (Boolean(property) === false) {
    return {
      props: {
        pathExist: false
      }
    };
  }
  return {
    props: {
      property,
      pathNotExist: true
    }
  };
};

export default ProfilePage;
