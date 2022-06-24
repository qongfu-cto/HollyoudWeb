import React, { useEffect, useRef, useState } from 'react';
import { useSecondaryNavigationStylesEN } from './styleEN';

import NavItem from '../../Molecules/navItem';
import { onMobile } from '../../../utilities/utils';
import { Branding } from 'utilities/branding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/Reducer/root';
import QText from 'components/Atoms/text';
import {
  getMarketPlace,
  getMarketPlaceProperties
} from 'redux/Action/app/appActions';
import { useSearch } from 'container/search';
import { GetSort } from 'utilities/hook/useGetSort';
// import Profile from 'pages/myqloud/profile';
import ShopCardLayout from '../qloudShopCard';
import { isNull, isUndefined } from 'lodash';

interface SecondaryNavigationProps {
  width: number;
  withShadow?: boolean;
  averageNavItemWidth?: number;
  subClicked: (subCategory: categoryObject) => void;
  subDeleted: () => void;
  searchText?: string;
  component?: string;
}

const SecondaryNavigation = ({
  width,
  withShadow,
  averageNavItemWidth,
  subClicked,
  subDeleted,
  searchText,
  component
}: SecondaryNavigationProps) => {
  const dispatch = useDispatch();
  const { selectedId, setSelectedId } = useSearch();
  const { sort } = GetSort();
  const subCategories: categoryObject[] = useSelector(
    (state: RootState) => state.app.subCategories
  );
  const getLocalStorage =
    typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
  const category: LocaleStorageCategory = getLocalStorage
    ? JSON.parse(getLocalStorage)
    : null;
  const styles = useSecondaryNavigationStylesEN();

  let ref = useRef<HTMLDivElement>(null);

  const [activeId, setActiveId] = useState<string | null | number>(0);
  // const [selectedId, setSelectedId] = useState('');
  const [navData, setNavData] = useState<object[]>(() => subCategories);
  const [isSubMenuSelected, setIsSubMenuSelected] = useState(false);
  const [subMenuParent, setSubMenuParent] = useState<string | undefined>('');

  window.onbeforeunload = () => {
    localStorage.removeItem('openFilter');
    localStorage.removeItem('locationFilter');
  };

  window.onload = () => {
    localStorage.removeItem('openFilter');
    localStorage.removeItem('locationFilter');
  };

  useEffect(() => {
    if (component === 'text') {
      if (category?.subCategoryId.length) {
        setSelectedId(category?.subCategoryId);
      }
    }
  }, [category]);

  const handleNavClick = (
    id: string,
    isSubMenu: boolean,
    parentId?: string
  ) => {
    setIsSubMenuSelected(isSubMenu);
    setSelectedId(id);
    setSubMenuParent(parentId);

    if (isSubMenu) setSubMenuParent('0');
    if (!id) {
      return subDeleted();
    }

    if (!isSubMenu) {
      const sub = subCategories?.find((sub: categoryObject) => sub._id === id);

      if (sub) {
        subClicked(sub);
        if (sub.types[0] === 'places') {
          let location: any = [];
          let open: any = { openNow: false };
          if (!isNull(localStorage.getItem('locationFilter'))) {
            location = JSON.parse(localStorage.getItem('locationFilter')!);
          }
          if (!isNull(localStorage.getItem('openFilter'))) {
            if (!isUndefined(JSON.parse(localStorage.getItem('openFilter')!))) {
              open = JSON.parse(localStorage.getItem('openFilter')!);
            }
          }
          dispatch(getMarketPlace(null, sort, sub._id, location, open));
        }
        // dispatch(getMarketPlace(null, sort, sub._id));
        if (sub.types[0] === 'properties') {
          dispatch(getMarketPlaceProperties(null, sort, sub._id));
        }
      }
    } else {
      const generalCategory = subCategories?.filter(
        (sub: categoryObject) => sub._id === parentId
      );

      const sub = generalCategory[0]?.children.find(
        (sub: categoryObject) => sub._id === id
      );
      if (sub) {
        subClicked(sub);
        if (sub.types[0] === 'places') {
          let location: any = [];
          let open: any = { openNow: false };
          if (!isNull(localStorage.getItem('locationFilter'))) {
            location = JSON.parse(localStorage.getItem('locationFilter')!);
          }
          if (!isNull(localStorage.getItem('openFilter'))) {
            if (!isUndefined(JSON.parse(localStorage.getItem('openFilter')!))) {
              open = JSON.parse(localStorage.getItem('openFilter')!);
            }
          }
          dispatch(getMarketPlace(null, sort, sub._id, location, open));
        }
        // dispatch(getMarketPlace(null, sort, sub._id));
        if (sub.types[0] === 'properties') {
          dispatch(getMarketPlaceProperties(null, sort, sub._id));
        }
      }
    }
  };

  useEffect(() => {
    if (subCategories?.length) {
      setNavData(
        processNavigationData(
          ref.current !== null ? ref.current.offsetWidth - 200 : 0,
          subCategories,
          averageNavItemWidth
        )
      );
    } else {
      setNavData([]);
    }
  }, [width, subCategories]);

  //Handling outside click of Sidebar
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActiveId(0);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    if (subCategories?.length) {
      setNavData(
        processNavigationData(
          ref.current !== null ? ref.current.offsetWidth - 200 : 0,
          subCategories,
          averageNavItemWidth
        )
      );
    } else {
      setNavData([]);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [subCategories]);

  const processNavigationData = (
    width: number,
    data: object[],
    averageNavItemWidth: number | undefined
  ) => {
    //  averageNavItemWidth calculation
    // ( ref.current.offsetWidth -200)/ {{number of required items to display  example 4}}
    //  output 129

    const averageWidth = averageNavItemWidth ?? 0 + (selectedId > '0' ? 20 : 0);
    //console.log(ref?.current?.offsetWidth);
    if (data?.length * averageWidth <= width) {
      return data;
    }
    let modifiedData = [];
    const itemsFit = Math.floor(width / averageWidth);

    for (let i = 0; i < itemsFit; i++) {
      modifiedData?.push(data[i]);
    }

    let lastNavItem: { name: string; children: {}[]; _id: string } = {
      name: 'More',
      _id: '0',
      children: []
    };
    let nestedMenu = lastNavItem.children.length
      ? [...lastNavItem?.children]
      : [];

    for (let i = itemsFit; i < data?.length; i++) {
      nestedMenu?.push(data[i]);
    }

    lastNavItem = {
      ...lastNavItem,
      children: nestedMenu
    };

    modifiedData?.push(lastNavItem);

    return modifiedData;
  };

  const setActive = (id: string | null | number) => {
    setActiveId(id);
  };

  if (onMobile()) return null;

  return (
    <div
      className={styles.containerWrapper}
      // style={{
      //   boxShadow: withShadow
      //     ? `0px 0px 0px #666666, 3px -4px 4px ${Branding.Colors.black['16']}`
      //     : undefined
      // }}
    >
      <div
        onMouseEnter={() => setActiveId(0)}
        style={{ width: '100%', height: 2 }}
      />
      <div
        ref={ref}
        id="secondary-navigation"
        className={
          component === 'text' ? styles.container : styles.profileContainer
        }
      >
        {navData?.length && searchText?.length ? (
          navData?.map((navItem: any, index: number) => {
            return (
              <div id={`nav-item-${index}`} key={`nav-${index}`}>
                <NavItem
                  data={navItem}
                  activeId={activeId}
                  setActiveId={setActive}
                  isNested={false}
                  isLast={navItem?._id === '0'}
                  onClick={handleNavClick}
                  selectedId={selectedId}
                  isSubMenuSelected={isSubMenuSelected}
                  subMenuParent={subMenuParent}
                  category={category}
                />
              </div>
            );
          })
        ) : (
          <>
            {component === 'text' ? (
              <QText
                label={'Welcome to Qloud City! How can we help you today?'}
                labelColor={Branding.Colors.primary.dark}
              />
            ) : component === 'profile' ? (
              <></>// <Profile />
            ) : (
              <ShopCardLayout />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SecondaryNavigation;
