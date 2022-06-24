import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { remove, some, filter, isEmpty, isUndefined } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import { useSearch } from 'container/search';
import { useScrollPosition } from 'utilities/hook/useScrollPosition';
import { useOnScreen } from 'utilities/hook/useOnScreen';
import { useDefaultLayoutStyles } from './stylesEN';
import FilterLayout from '../filterLayout';
import SelectionLayout from '../selectionLayout';
import SearchResultsBox from '../../Organisms/searchResuletBox';
import SearchHeaderIcons from 'components/Organisms/searchHeaderIcons';
import { Branding } from 'utilities/branding';
import SearchNavBar from 'components/Molecules/searchNavBar';
import Loading from 'components/Molecules/loading';
import { appAPI } from '../../../services/appApi';

type Props = {
  hasNavbarLogo?: boolean;
  searchName: localStorageSearch;
  loadSearch: void;
};

const SearchPageLayout: FC<Props> = ({ loadSearch, searchName }) => {
  const styles = useDefaultLayoutStyles();
  const dispatch = useDispatch();
  const scrollTrackingRef = useRef(null);
  const { hotspots } = useSelector((state: RootState) => {
    return {
      hotspots: state.app.hotspots
    };
  });
  const {
    marketplace,
    showFilters,
    closeFilters,
    applyFilters,
    category,
    categories,
    searchText,
    searchResults,
    subCategories
  } = useSearch();
  const [filterInNavbar, setFilterInNavbar] = useState(false);

  /*************************************
   Sorting Functionalities
  *************************************/
  const getLocalStorage =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const categoryName: LocaleStorageCategory = getLocalStorage
    ? JSON.parse(getLocalStorage)
    : null;

  const { country } = useSelector((state: RootState) => {
    return {
      country: state.user.geolocation.country_name
    };
  });

  useScrollPosition({
    effect: ({ current }) => {
      if (current.y < 40) {
        !filterInNavbar ? setFilterInNavbar(true) : 0;
      } else {
        filterInNavbar ? setFilterInNavbar(false) : 0;
      }
    },
    deps: [filterInNavbar],
    element: scrollTrackingRef,
    throttleDuration: 250
  });

  /*************************************
   Filtering Functionalities
  *************************************/
  const [showSelection, setShowSelection] = useState(false);
  const [locationFilter, setLocationFilter] = useState<any[]>([]);
  const [openedFilter, setOpenedFilter] = useState<any>();
  const [data, setData] = useState<any>([]);
  const [list, setList] = useState<any>([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [checked, setChecked] = useState({
    open: false,
    Verified: false
  });
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count === 1) {
      if (!isEmpty(hotspots)) {
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

        setCount(2);
      }
    }
  }, [count, hotspots, list]);

  // checkBox
  const handleChecked = (event: any) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked
    });
  };

  // Location
  const handleSelection = (event: any, index: any) => {
    // console.log(selected);
    const i: any = list?.findIndex((s: any) => {
      return s.id === index;
    });
    list[i].checked = event.target.checked;
    list[i].indeterminate = false;
    if (event.target.checked === true) {
      const exist = some(data, ['name', list[i].name]);
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
  };

  const handleSelectionChild = (event: any, index: any, listIndex: any) => {
    const i: any = list?.findIndex((s: any) => {
      return s.id === listIndex;
    });
    const childIndex = list[i].child.findIndex((child: any) => {
      return child.id === index;
    });

    console.log('handleSelectionChild');
    console.log(list[i].child[childIndex]);

    // add selected location to locations list(data)
    if (event.target.checked === true) {
      list[i].child[childIndex].checked = event.target.checked;
      const exist = some(data, ['name', list[i].child[childIndex].name]);

      // check if its exist before add
      if (!exist) {
        data.push({
          name: list[i].child[childIndex].name,
          id: list[i].child[childIndex].id,
          parent: list[i].id
        });
      }
    } else {
      // remove location from locations list(data)
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

    // check number of children are checked
    const check = data.filter((child: any) => {
      return child.parent === list[i].id;
    });
    console.log('check ', check);
    if (check.length > 0 && check.length < list[i].child.length) {
      console.log('indeterminate');
      list[i].indeterminate = true;
    }
    // else if (check.length === list[i].child.length) {
    //   console.log(' not indeterminate');
    //   list[i].indeterminate = false;
    //   list[i].checked = true;
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
    // }
    // else {
    //   list[i].indeterminate = false;
    // }
    console.log('handleSelectionChild data ', data);
  };

  const handleDeleteSelection = (tag: any) => {
    console.log('handleDeleteSelection ', tag);
    console.log(list);
    let index: number = 0;
    if (isUndefined(tag.parent)) {
      index = list?.findIndex((s: any) => {
        return s.id === tag.id;
      });

      list[index].checked = false;
      list[index].indeterminate = false;
      list[index].child?.map((child: any) => {
        child.checked = false;
      });
    } else {
      index = list?.findIndex((s: any) => {
        return s.id === tag.parent;
      });

      console.log(list[index]);
      // list[index].checked = false;
      // list[index].indeterminate = false;
      list[index].child?.map((child: any) => {
        if (child.id === tag.id) {
          child.checked = false;
        }
      });
    }

    setData((chips: any) => chips.filter((chip: any) => chip.id !== tag.id));
    console.log('data');
  };

  const resetSelection = (action: string) => {
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
    // data.length = 0;

    if (action === 'back') {
      setShowSelection(false);
    }
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

  const handleCollapse = (index: number) => {
    console.log('handleCollapse ', index);
    list[index].open = !list[index].open;
    setList([...list]);
  };

  const submit = () => {
    setShowSelection(false);
  };

  const filterBy = () => {
    let location: any[] = [];
    data.map((locId: any) => {
      location.push(locId.id);
      locationFilter.push(locId.id);
    });
    localStorage.setItem('locationFilter', JSON.stringify(location));
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
      setOpenedFilter(open);
      console.log(time);
      console.log('JSON.stringify(open)');
      console.log(JSON.stringify(open));

      localStorage.setItem('openFilter', JSON.stringify(open));
    } else {
      open = {
        openNow: false
      };
    }
    applyFilters(location, open);
    window.scrollTo(0, 0);
    if (data.length === 1) {
      setSearchLocation(data[0].name);
    } else if (data.length > 1) {
      setSearchLocation('Preferred Locations');
    } else {
      setSearchLocation('');
    }

    closeFilters();
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
      <div
        style={{
          width: '100%',
          borderBottom: `1px solid ${Branding.Colors.black[16]}`,
          margin: '0px 0 20px 0'
        }}
      />
      <section ref={scrollTrackingRef} className={styles.bodyWrapper}>
        {filterInNavbar && <SearchHeaderIcons />}

        <SearchResultsBox
          searchName={searchName}
          categoryName={categoryName}
          place={
            !isEmpty(searchLocation)
              ? searchLocation
              : country
              ? country
              : 'Bahrain'
          }
          results={marketplace}
          loadSearch={loadSearch}
          location={locationFilter}
          opened={openedFilter}
        />

        <FilterLayout
          open={showFilters}
          onClose={closeFilters}
          onApply={filterBy}
          resetSelection={resetSelection}
          variant={'place'}
          searchResults={marketplace}
          checked={checked}
          handleChecked={handleChecked}
          data={data}
          handleDeleteSelection={handleDeleteSelection}
          setShowSelection={setShowSelection}
        />

        <SelectionLayout
          open={showSelection}
          resetSelection={resetSelection}
          onClose={() => setShowSelection(false)}
          onApply={submit}
          variant={'place'}
          handleChecked={handleChecked}
          lists={list}
          data={data}
          handleCollapse={handleCollapse}
          handleSelection={handleSelection}
          handleSelectionChild={handleSelectionChild}
          searchList={searchList}
        />
      </section>
    </div>
  );
};

export default SearchPageLayout;
