import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { isEmpty, remove, some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import { useSearch } from 'container/search';
import { GetSort } from 'utilities/hook/useGetSort';
import { useHandleResize } from 'utilities/hook/useHandleResize';
import { useGetCategories } from 'utilities/hook/useGetCategory';
import { useScrollPosition } from 'utilities/hook/useScrollPosition';
import { fullPageHeight, replaceWithTheCapitalLetter } from 'utilities/utils';
import { searchSort } from 'redux/Action/app/appActions';
import { getUserGeolocationReceive } from 'redux/Action/user/userActions';

import { useDefaultMobileLayoutStyles } from './stylesEN';
import Loading from 'components/Molecules/loading';
import QBottomDrawer from 'components/Molecules/QBottomDrawer';
import QBottomDrawerFilter from 'components/Molecules/QBottomDrawerFilter';
import MobileSorting from 'components/Molecules/mobileSorting';
import MobileFiltering from 'components/Molecules/mobilefiltering';
import MobileSelection from 'components/Molecules/mobileSelection';
import MobileSearchResultsBox from '../../Organisms/searchResuletBox/mobileIndex';
import MobileDummyCard from 'components/Molecules/DummyCard/mobile';
import { Skeleton } from '@mui/material';
import { appAPI } from '../../../services/appApi';

type Props = {
  parserData?: object;
  hasNavbarLogo?: boolean;
  searchName: localStorageSearch;
  mobileSearch?: boolean;
  loadSearch: void;
};

const MobileSearchPageLayout: FC<Props> = ({
  parserData,
  hasNavbarLogo,
  loadSearch,
  searchName,
  mobileSearch
}) => {
  const [width] = useHandleResize();
  const dispatch = useDispatch();
  const styles = useDefaultMobileLayoutStyles({ width: width });

  const {
    marketplace,
    category,
    subCategories,
    handleInputOnClick,
    getMarketPlaceRecords,
    openDrawer,
    onDrawerClose,
    onDrawerClicked,
    categoryClicked,
    applyFilters
  } = useSearch();

  const [showSelection, setShowSelection] = useState(false);
  const [data, setData] = useState<any>([]);
  const [list, setList] = useState<any>([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [checked, setChecked] = useState({
    open: false,
    Verified: false
  });

  const [count, setCount] = useState(1);

  /*************************************
   Sorting Functionalities
  *************************************/
  const [openSort, setOpenSort] = useState(false);
  const { sort, permission } = GetSort();
  const getLocalStorage =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const categoryName: LocaleStorageCategory = getLocalStorage
    ? JSON.parse(getLocalStorage)
    : null;
  const { loadMarketPlace, length, total, subCategory, country } = useSelector(
    (state: RootState) => {
      return {
        loadMarketPlace: state.app.loading.marketPlace,
        length: state.app.marketplace.length,
        total: state.app.marketplace.total,
        subCategory: state.app.subCategories,
        country: state.user.geolocation.country_name,
        sort: state.app.sort.value,
        permission: state.app.sort.permission
      };
    }
  );
  const { dispatchToMarketPlace } = useGetCategories();
  // const { loadActive } = useLoadPage();

  window.onbeforeunload = () => {
    localStorage.removeItem('openFilter');
    localStorage.removeItem('locationFilter');
  };

  window.onload = () => {
    localStorage.removeItem('openFilter');
    localStorage.removeItem('locationFilter');
  };

  const renderDropdown = () => {
    return null;
  };

  useEffect(() => {
    if (mobileSearch) handleInputOnClick();
  }, [mobileSearch]);

  const locationType = replaceWithTheCapitalLetter(
    searchName?.mainCategoryType
  );
  const scrollRef = useRef(null);
  const height = fullPageHeight();

  const onSortingClicked = (sort: string) => {
    dispatch(searchSort(sort, permission));
    setOpenSort(false);
  };

  const resetHandler = () => {
    dispatch(searchSort('highest-rated', permission));
    resetSelection();
  };

  const onGetCurrentLocation = () => {
    if (navigator.permissions && navigator.permissions.query) {
      //try permissions APIs first
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function(result) {
          // Will return ['granted', 'prompt', 'denied']
          const permission = result.state;
          console.log({ permission });
          if (permission === 'granted') {
            navigator.geolocation.getCurrentPosition(function(position) {
              //imitate map latlng construct
              const userPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              };
              sessionStorage.setItem(
                'currentLocation',
                JSON.stringify(userPosition)
              );
            });

            dispatch(searchSort('nearest', 'granted'));
            onSorting('nearest');
            return;
          }
          if (permission === 'denied' || 'prompt') {
            sessionStorage.removeItem('currentLocation');
            const location = sessionStorage.getItem('geolocation');

            const locationData = location ? JSON.parse(location) : null;

            dispatch(getUserGeolocationReceive(locationData));
            if (permission === 'denied') {
              dispatch(searchSort('highest-rated', 'denied'));
            } else {
              dispatch(searchSort('highest-rated', 'granted'));
            }
            onSorting('highest-rated');

            return;
          }
        });

      return false;
    } else if (navigator.geolocation) {
      //then Navigation APIs
      navigator.geolocation.getCurrentPosition(function(position) {
        //imitate map latlng construct
        const userPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        sessionStorage.setItem('currentLocation', JSON.stringify(userPosition));
      });

      return true;
    }
  };

  const onSorting = (sort: string) => {
    if (categoryName) {
      if (categoryName.subCategoryId.length) {
        dispatchToMarketPlace(
          subCategory,
          categoryName.type,
          categoryName.subCategoryId,
          sort
        );
        return;
      }
      categoryClicked(categoryName.id, sort);
    }
    if (searchName) {
      loadSearch;
    }
  };

  const applyFilter = () => {
    if (sort === 'nearest') {
      // onGetCurrentLocation();
      onDrawerClose();
    }
    if (sort === 'highest-rated') {
      onSorting('highest-rated');
      onDrawerClose();
    }
  };

  /*************************************
   Filtering Functionalities
  *************************************/
  const { hotspots } = useSelector((state: RootState) => {
    return {
      hotspots: state.app.hotspots
    };
  });

  useScrollPosition({
    effect: ({ current }) => {
      const currentHeight = height ? height : 700;

      if (Math.floor(current.y) < currentHeight && length < total) {
        let location: any[] = [];
        data.map((locId: any) => {
          location.push(locId.id);
        });
        const geolocation = JSON.parse(localStorage.getItem('geolocation')!);
        let time: any = '';
        let open: any;
        if (checked.open) {
          const timezone = geolocation?.time_zone.current_time;
          const timeNow = new Date();
          time = filterTime(timeNow.toString(), timezone);

          open = {
            openNow: true,
            currentTime: time,
            timezone: geolocation?.time_zone.name,
            offset: geolocation?.time_zone.offset
          };
        }
        getMarketPlaceRecords(
          marketplace.tag,
          marketplace.tagId,
          marketplace.type,
          sort,
          location,
          open
        );
      }
    },
    deps: [marketplace, length, total, height],
    element: scrollRef,
    throttleDuration: 250
  });

  useEffect(() => {
    if (count === 1) {
      if (!isEmpty(hotspots)) {
        console.log('hotspots');
        console.log(hotspots);
        hotspots.map((hotspot: any) => {
          list.push({
            name: hotspot.name,
            id: hotspot._id,
            open: true,
            checked: false,
            indeterminate: false,
            child: hotspot.children.map((child: any) => {
              return {
                name: child.name,
                id: child._id,
                checked: false,
                parent: hotspot._id
              };
            })
          });
        });
        console.log('my new list');
        console.log(list);
        setCount(2);
      }
    }
  }, [count, hotspots, list]);

  // checkBox
  const handleChecked = (event: any) => {
    console.log('handleChecked');
    console.log(event);
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked
    });
    console.log(checked);
  };

  /*************************************
   Selection Functionalities
  *************************************/

  const handleSelection = (event: any, index: any) => {
    console.log('handleSelection');
    console.log(event.target.checked);
    console.log(index);
    // console.log(selected);
    const i: any = list?.findIndex((s: any) => {
      return s.id === index;
    });
    list[i].checked = event.target.checked;
    list[i].indeterminate = false;
    if (event.target.checked === true) {
      const exist = some(data, ['name', list[i].name]);
      console.log('exist ', exist);
      if (!exist) {
        data.push({ name: list[i].name, id: list[i].id });
      }
      list[i].child.map((child: any) => {
        child.checked = event.target.checked;
        remove(data, (o: any) => {
          return o.name === child.name;
        });
      });
    } else {
      remove(data, (o: any) => {
        return o.name === list[i].name;
      });
      list[i].child.map((child: any) => {
        child.checked = event.target.checked;
        remove(data, (o: any) => {
          return o.name === child.name;
        });
      });
    }

    setList([...list]);
    console.log('handleSelection data ', data);
  };

  const handleSelectionChild = (event: any, index: any, listIndex: any) => {
    console.log('handleSelectionChild');
    console.log(event.target.checked);
    console.log(index);
    const i: any = list?.findIndex((s: any) => {
      return s.id === listIndex;
    });
    const childIndex = list[i].child.findIndex((child: any) => {
      return child.id === index;
    });
    if (event.target.checked === true) {
      list[i].child[childIndex].checked = event.target.checked;
      const exist = some(data, ['name', list[i].child[childIndex].name]);
      console.log('exist ', exist);
      if (!exist) {
        data.push({
          name: list[i].child[childIndex].name,
          id: list[i].child[childIndex].id,
          parent: list[i].id
        });
      }
    } else {
      list[i].child[childIndex].checked = event.target.checked;
      list[i].checked = event.target.checked;
      remove(data, (o: any) => {
        return o.name === list[i].child[childIndex].name;
      });
      remove(data, (o: any) => {
        return o.name === list[i].name;
      });
      list[i].child.map((child: any) => {
        if (child.checked) {
          const exist = some(data, ['name', child.name]);
          console.log('exist ', exist);
          if (!exist) {
            data.push({ name: child.name, id: child.id, parent: list[i].id });
          }
        }
      });
    }
    setList([...list]);
    const check = data.filter((child: any) => {
      return child.parent === list[i].id;
    });
    console.log('check ', check);
    if (check.length > 0 && check.length < list[i].child.length) {
      console.log('indeterminate');
      list[i].indeterminate = true;
    }
    // else if (check.length === list[i].child.length) {
    //   list[i].checked = true;
    //   list[i].indeterminate = false;
    //   const exist = some(data, ['name', list[i].name]);
    //   console.log('exist ', exist);
    //   if (!exist) {
    //     data.push({ name: list[i].name, id: list[i].id });
    //   }
    //   list[i].child.map((child: any) => {
    //     remove(data, (o: any) => {
    //       return o.name === child.name;
    //     });
    //   });
    // } else {
    //   list[i].indeterminate = false;
    // }
    console.log('handleSelectionChild data ', data);
  };

  const resetSelection = () => {
    console.log('reset 000000');
    list.map((l: any) => {
      l.checked = false;
      l.child.map((child: any) => {
        child.checked = false;
      });
    });
    setList([...list]);
    setData([]);
    setChecked({
      open: false,
      Verified: false
    });
  };

  const searchList = async (e: any) => {
    const value = e.target.value.toLowerCase();

    console.log('value ', value);
    if (value.length > 0) {
      const response: any = await appAPI.getAllCWHotspots(value);
      console.log('response ', response);
      if (response.status === 200) {
        setList([]);
        const searchList: {}[] = [];
        response?.data?.map((hotspot: any) => {
          searchList.push({
            name: hotspot.name,
            id: hotspot._id,
            open: true,
            checked: false,
            indeterminate: false,
            child: hotspot.children?.map((child: any) => {
              return {
                name: child.name,
                id: child._id,
                checked: false,
                parent: hotspot._id
              };
            })
          });
        });
        setList(searchList);
      }
    } else {
      const response: any = await appAPI.getAllCWHotspots();
      console.log('response ', response);
      if (response.status === 200) {
        setList([]);
        const searchList: {}[] = [];
        response?.data?.map((hotspot: any) => {
          searchList.push({
            name: hotspot.name,
            id: hotspot._id,
            open: true,
            checked: false,
            indeterminate: false,
            child: hotspot.children?.map((child: any) => {
              return {
                name: child.name,
                id: child._id,
                checked: false,
                parent: hotspot._id
              };
            })
          });
        });
        setList(searchList);
      }
    }
  };

  const submit = () => {
    console.log('submit', data);
    let location: any[] = [];
    data.map((locId: any) => {
      location.push(locId.id);
    });
    const geolocation = JSON.parse(localStorage.getItem('geolocation')!);
    console.log(location);
    console.log(geolocation?.time_zone);
    let time: any = '';
    let open: any;
    if (checked.open) {
      const timezone = geolocation?.time_zone.current_time;
      const timeNow = new Date();
      time = filterTime(timeNow.toString(), timezone);

      open = {
        openNow: true,
        currentTime: time,
        timezone: geolocation?.time_zone.name,
        offset: geolocation?.time_zone.offset
      };
      localStorage.setItem('openFilter', JSON.stringify(open));
    }
    localStorage.setItem('locationFilter', JSON.stringify(location));

    applyFilters(location, open);
    window.scrollTo(0, 0);
    if (data.length === 1) {
      setSearchLocation(data[0].name);
    } else if (data.length > 1) {
      setSearchLocation('Preferred Locations');
    } else {
      setSearchLocation('');
    }
    onDrawerClose();
  };

  const filterTime = (timeNow: any, timezone: String) => {
    console.log('timing');
    console.log(timeNow);
    const myTime = timeNow.substring(21, 16);
    console.log(myTime);
    const myTimeZoneUtcA = timezone.substring(23, 26);
    const myTimeZoneUtcB = timezone.slice(26);
    const currentTime = myTime + ':00' + myTimeZoneUtcA + ':' + myTimeZoneUtcB;
    return currentTime;
  };

  return (
    <div className={styles.container}>
      <section className={styles.bodyWrapper}>
        {loadMarketPlace ? (
          <>
            <div
              style={{ display: 'flex', flexDirection: 'column', margin: 15 }}
            >
              <Skeleton variant="text" width="50%" />
              <Skeleton variant="text" width="30%" />
            </div>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <MobileDummyCard key={i} />
              ))}
          </>
        ) : (
          <>
            <MobileSearchResultsBox
              location={searchName?.searchText}
              // resultTitle={resultString}
              // noResultTitle={noResultString}
              searchName={searchName}
              place={
                !isEmpty(searchLocation)
                  ? searchLocation
                  : country
                  ? country
                  : 'Bahrain'
              }
              results={marketplace}
              total={total}
              titleType={searchName?.type}
              locationType={locationType}
            />
            {length < total ? (
              <div ref={scrollRef}>
                <Loading />
              </div>
            ) : null}
          </>
        )}
        <QBottomDrawer
          openDrawer={openDrawer}
          onCloseDrawer={onDrawerClose}
          onOpenDrawer={onDrawerClicked}
          onResetClick={resetHandler}
          applyFilterHandler={submit}
        >
          <MobileSorting
            sort={sort}
            open={openSort}
            onSortMenuClick={() => setOpenSort(!openSort)}
            sortList={[
              {
                label: ' Nearby: Nearest to Me',
                subLabel: 'Requires your current location.',
                sort: 'nearest',
                disable: permission === 'denied' ? true : false
              },
              {
                label: 'Highest Rated: Highest to Lowest',
                subLabel: '',
                sort: 'highest-rated',
                disable: false
              }
            ]}
            onSortingClicked={onSortingClicked}
          />
          {/* FIXME Eman show filter icon on mobile */}
          {/* <MobileFiltering
            checked={checked}
            handleChecked={handleChecked}
            data={data}
            setShowSelection={setShowSelection}
            onCloseDrawer={onDrawerClose}
          /> */}
        </QBottomDrawer>

        <QBottomDrawerFilter
          openDrawer={showSelection}
          onCloseDrawer={setShowSelection}
          onOpenDrawer={onDrawerClicked}
          onResetClick={resetSelection}
          applyFilterHandler={applyFilter}
          searchList={searchList}
        >
          <MobileSelection
            handleSelection={handleSelection}
            handleSelectionChild={handleSelectionChild}
            setShowSelection={setShowSelection}
            lists={list}
          />
        </QBottomDrawerFilter>
      </section>
    </div>
  );
};

export default MobileSearchPageLayout;
