import { useRouter } from 'next/router';
import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getMarketPlace,
  getMarketPlaceProperties,
  getSubCategoriesReceive,
  loadPageMarketPlace,
  loadPageMarketPlaceProperties,
  searchTags
} from 'redux/Action/app/appActions';
import { RootState } from 'redux/Reducer/root';
import { MarketPlace, MarketPlaceProperties } from 'types/marketPlaceApiTypes';
import { addDashBetweenStrings, onMobile } from 'utilities/utils';
import { useGetCategories } from 'utilities/hook/useGetCategory';
import { appAPI } from 'services/appApi';
import { getQuery } from 'utilities/browserQuery';
import { useLoadPage } from 'utilities/hook/useLoadPage';
import { isEmpty, isNull, isUndefined } from 'lodash';

interface props {
  children: ReactElement | ReactElement[];
  search?: {
    id: string;
    searchText: string;
  };
}

interface Tab {
  id: string;
  label: string;
}

interface SearchContextProps {
  openFilters: () => void;
  closeFilters: () => void;
  applyFilters: (location: string[], opened?: any, verified?: boolean) => void;
  showFilters: boolean;
  marketplace: {
    length: number;
    marketPlaces: any[];
    page: number;
    tag: [];
    tagId: string;
    pageLength: number;
    openedMarketPlaces: [];
    type: string;
    params: {
      unfilteredTotal: number;
    };
  };
  categories: categoryObject[];
  category: categoryObject | null;
  categoryClicked: (id: string, sort?: string) => void;
  searchResults: {
    length: number;
    lengthExactMatch: number;
    exactMatch: searchResultsProps[];
    tags: searchResultsProps[];
  };
  handleSearchOnChange: (e: any) => void;
  handleMobileSearchOnChange: (e: any) => void;
  handleSearchMenu: VoidFunction;
  handleClickAway: VoidFunction;
  searchText: string;
  TopCategories: boolean;
  openSearchList: boolean;
  handleInputOnClick: VoidFunction;
  searchResultClicked: (
    name: string,
    id: string,
    category: string,
    type: string,
    tagId: string
  ) => void;
  setSearchText: React.Dispatch<string>;
  setSelectedId: React.Dispatch<string>;
  subCategoryIsClicked: (subCategory: categoryObject) => void;
  subCategories: categoryObject | null;
  subCategoryIsDeleted: () => void;
  handleMobileSearchMenu: () => void;
  loading: { load: boolean; id: string };
  handleSearchAText: (text: string) => void;
  getSearchSubCategory: (
    parentId: string,
    childId: string,
    childName: string
  ) => void;
  getMarketPlaceRecords: (
    tag: string[],
    tagId: string,
    type: string,
    sort: string,
    location?: string[],
    opened?: any,
    verified?: boolean
  ) => void;
  selectedId: string;
  openDrawer: boolean;
  onDrawerClicked: VoidFunction;
  onDrawerClose: VoidFunction;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);
export const SearchContainer = ({ children, search }: props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchText, setSearchText] = useState(() => search?.searchText ?? '');
  const [TopCategories, setTopCategories] = useState(false);
  const [openSearchList, setOpenSearchList] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [loading, setLoading] = useState({ load: false, id: '' });
  const { push, query } = useRouter();
  const { loadActive } = useLoadPage();

  const dispatch = useDispatch();
  const {
    getSubCategories,
    categories,
    category,
    categoryClicked,
    setCategory,
    setSubCategories,
    subCategories,
    getSearchSubCategory,
    sort
  } = useGetCategories();
  const {
    loadingCategories,
    loadingSubCategories,
    marketplace,
    searchResults,
    loadingGeolocation,
    userId
  } = useSelector((state: RootState) => {
    return {
      loadingCategories: state.app.loading?.categories,
      loadingSubCategories: state.app.loading?.subCategories,
      loadingGeolocation: state.user.loading?.geolocation,
      marketplace: state.app.marketplace,
      searchResults: state.app.searchResults,
      userId: state.user?.profile?._id
    };
  });

  useEffect(() => {
    loadingCategories && dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingCategories]);

  useEffect(() => {
    if (loadingSubCategories && !loadingGeolocation) {
      !loadActive && getSubCategories();
    }
  }, [loadingSubCategories, loadingGeolocation, getSubCategories, loadActive]);

  const getMarketPlaceRecords = (
    tag: string[],
    tagId: string,
    type: string,
    sort: string,
    location?: string[],
    opened?: any,
    verified?: boolean
  ) => {
    if (type === 'places') {
      console.log('calll ME');
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
      dispatch(
        loadPageMarketPlace(tag, sort, tagId, location, opened, verified)
      );
    }
    if (type === 'properties')
      dispatch(loadPageMarketPlaceProperties(tag, sort, tagId));
  };

  const openFilters = () => {
    useEffect;
    setShowFilters(true);
  };
  const closeFilters = () => {
    setShowFilters(false);
  };

  const applyFilters = (
    location?: string[],
    opened?: any,
    verified?: boolean
  ) => {
    const categoryLocal =
      typeof window !== 'undefined' ? localStorage?.getItem('category') : null;

    const categoryData: LocaleStorageCategory = categoryLocal
      ? JSON.parse(categoryLocal)
      : null;
    const previousCategory = categories.find(
      cate => cate?._id === categoryData?.id
    );

    previousCategory && setCategory(previousCategory);

    console.log('applyFilters ', location);
    const categoryId =
      categoryData?.subCategoryId === ''
        ? categoryData.id
        : categoryData?.subCategoryId;

    console.log('applyFilters ', categoryId);

    dispatch(
      getMarketPlace(null, sort, categoryId, location, opened, verified)
    );
  };

  const searchResultClicked = async (
    name: string,
    id: string,
    category: string,
    type: string,
    tagId: string
  ) => {
    setCategory(null);
    dispatch(getSubCategoriesReceive([]));
    const localCategory =
      typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
    const categoryData = localCategory ? JSON.parse(localCategory) : null;
    const localSearch =
      typeof window !== 'undefined' ? localStorage?.getItem('search') : null;
    const lastSearchResult = localSearch ? JSON.parse(localSearch) : null;

    const searchItem = {
      id,
      searchText: name,
      category,
      type,
      mainCategoryType:
        categoryData?.type ?? lastSearchResult?.mainCategoryType ?? 'places'
    };
    localStorage.removeItem('category');
    setSearchText(name);
    localStorage.setItem('search', JSON.stringify(searchItem));

    if (type === 'place') {
      setLoading({ load: true, id });

      const response = await appAPI.marketPlaceTypePlace(tagId, userId);
      const place = response?.data?.data;

      const res = await push(
        `/places/${place?._id}/${addDashBetweenStrings(place?.name)}`
      );
      if (res) setLoading({ load: false, id: '' });
      return;
    }
    const query = getQuery(null, searchItem);

    push(`/search${query}`);
  };

  const handleSearchAText = (text: string) => {
    console.log('text');
    if (text.length >= 3) {
      const localCategory =
        typeof window !== 'undefined'
          ? localStorage?.getItem('category')
          : null;
      const categoryData = localCategory ? JSON.parse(localCategory) : null;
      const localSearch =
        typeof window !== 'undefined' ? localStorage?.getItem('search') : null;
      const lastSearchResult = localSearch ? JSON.parse(localSearch) : null;

      setCategory(null);
      dispatch(getSubCategoriesReceive([]));
      const searchItem = {
        id: '',
        searchText: text,
        category: '',
        type: '',
        mainCategoryType:
          categoryData?.type ?? lastSearchResult?.mainCategoryType ?? 'places'
      };
      localStorage.removeItem('category');
      localStorage.setItem('search', JSON.stringify(searchItem));

      const query = getQuery(null, searchItem);
      push(`/search${query}`);
    }

    return;
  };

  const handleSearchOnChange = (e: any) => {
    setTopCategories(false);
    const newValue = e.target.value;
    const localSearch =
      typeof window !== 'undefined' ? localStorage?.getItem('search') : null;
    const lastSearchResult = localSearch ? JSON.parse(localSearch) : null;
    const localCategory =
      typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
    const categoryData = localCategory ? JSON.parse(localCategory) : null;

    setSearchText(newValue);

    if (newValue.length > 2) {
      const category = lastSearchResult?.mainCategoryType?.length
        ? lastSearchResult?.mainCategoryType
        : categoryData?.type;
      dispatch(searchTags(newValue, category));
    }

    return handleSearchMenu();
  };

  const handleSearchMenu = useCallback(() => {
    if (searchText?.length > 1) {
      setTopCategories(false);
      setOpenSearchList(true);
    }
    if (searchText?.length < 2) {
      setOpenSearchList(false);
    }
  }, [searchText]);

  const handleMobileSearchMenu = useCallback(() => {
    setTopCategories(false);
    setOpenSearchList(true);
  }, []);

  const handleMobileSearchOnChange = (e: any) => {
    const newValue = e.target.value;
    const localSearch =
      typeof window !== 'undefined' ? localStorage?.getItem('search') : null;
    const lastSearchResult = localSearch ? JSON.parse(localSearch) : null;
    const localCategory =
      typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
    const categoryData = localCategory ? JSON.parse(localCategory) : null;
    setSearchText(newValue);
    if (newValue.length > 2) {
      const category = lastSearchResult?.mainCategoryType?.length
        ? lastSearchResult?.mainCategoryType
        : categoryData?.type;
      setOpenSearchList(true);
      dispatch(searchTags(newValue, category));
    }
  };

  const handleClickAway = useCallback(() => {
    setTopCategories(false);
    setOpenSearchList(false);
  }, []);

  const handleInputOnClick = useCallback(() => {
    // if (onMobile()) {
    //   push('/search');
    // }
    setTopCategories(true);
  }, []);

  const subCategoryIsClicked = (subCategory: categoryObject) => {
    const categoryStored =
      typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
    let categoryObject = categoryStored ? JSON.parse(categoryStored) : null;
    const updateCategoryWithSub = {
      ...categoryObject,
      subCategory: subCategory.displayName,
      subCategoryId: subCategory._id
    };
    localStorage.setItem('category', JSON.stringify(updateCategoryWithSub));
    const query = getQuery(updateCategoryWithSub, null);

    push(`/search${query}`);
    if (category)
      setCategory({
        ...category,
        displayName: ''
      });

    setSubCategories(subCategory);
  };

  const subCategoryIsDeleted = useCallback(() => {
    const categoryLocal =
      typeof window !== 'undefined' ? localStorage?.getItem('category') : null;

    const categoryData: LocaleStorageCategory = categoryLocal
      ? JSON.parse(categoryLocal)
      : null;
    const previousCategory = categories.find(
      cate => cate?._id === categoryData?.id
    );

    previousCategory && setCategory(previousCategory);

    if (categoryData?.type === 'places') {
      dispatch(getMarketPlace(null, sort, categoryData.id));
    } else if (categoryData?.type === 'properties') {
      dispatch(getMarketPlaceProperties(null, sort, categoryData.id));
    }

    setSubCategories(null);

    const categoryItem = {
      id: categoryData?.id,
      topCategory: categoryData?.topCategory,
      topCategoryName: categoryData?.topCategoryName,
      topCategoryIcon: categoryData?.topCategoryIcon,
      subCategory: '',
      subCategoryId: '',
      type: categoryData?.type
    };

    localStorage.setItem('category', JSON.stringify(categoryItem));
  }, [categories, dispatch, sort]);

  const onDrawerClicked = () => {
    setOpenDrawer(true);
  };

  const onDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <SearchContext.Provider
      value={{
        openFilters,
        closeFilters,
        applyFilters,
        marketplace,
        showFilters,
        categories,
        category,
        categoryClicked,
        searchResults,
        TopCategories,
        openSearchList,
        handleClickAway,
        handleSearchMenu,
        handleSearchOnChange,
        handleInputOnClick,
        searchResultClicked,
        searchText,
        setSearchText,
        subCategoryIsClicked,
        subCategories,
        subCategoryIsDeleted,
        handleMobileSearchMenu,
        handleMobileSearchOnChange,
        loading,
        getSearchSubCategory,
        handleSearchAText,
        getMarketPlaceRecords,
        selectedId,
        setSelectedId,
        openDrawer,
        onDrawerClicked,
        onDrawerClose
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}
