import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMarketPlace,
  getMarketPlaceReceive,
  getSubCategoriesReceive,
  getMarketPlaceProperties
} from 'redux/Action/app/appActions';
import { RootState } from 'redux/Reducer/root';
import { getQuery } from 'utilities/browserQuery';
import { marketPlaceProperty } from 'utilities/propertyDummy';
import { GetSort } from './useGetSort';

export const useGetCategories = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [category, setCategory] = useState<categoryObject | null>(null);
  const [subCategories, setSubCategories] = useState<categoryObject | null>(
    null
  );
 // const { sort } = GetSort();
  const { categories, loading , sort} = useSelector((state: RootState) => {
    return {
      categories: state.app.categories,
      loading: state.app.loading.subCategories,
      sort: state.app.sort.value
    };
  });

  const getCategory = (id: string) => {
    localStorage.removeItem('search');
    const category = categories?.find(
      (category: categoryObject) => category?._id == id
    );

    return category;
  };

  const getCategoryIcon = (
    icons: {
      iconId: {
        _id: string;
        name: string;
        svgData: string;
      };
      type: string;
      _id: string;
    }[]
  ) => {
    const iconCompact = icons.find(icon => icon.type === 'compact');
    const iconDefault = icons.find(icon => icon.type === 'default');

    return iconCompact
      ? iconCompact.iconId.svgData
      : iconDefault?.iconId.svgData;
  };

  const dispatchToMarketPlace = (
    subCategories: categoryObject[],
    type: string,
    categoryId: string,
    sorting?: string
  ) => {
    dispatch(getSubCategoriesReceive(subCategories));
    if (type === 'places') {
      dispatch(getMarketPlace(null, sorting ?? sort, categoryId));
      return;
    }
    if (type === 'properties') {
      dispatch(getMarketPlaceProperties(null, sorting ?? sort, categoryId));
    }
  };

  const getSubCategories = useCallback(() => {
    const category =
      typeof window !== 'undefined' ? localStorage?.getItem('category') : null;
    const categoryData = category ? JSON.parse(category) : null;

    if (categoryData?.id) {
      const category = categories.find(
        (category: categoryObject) => category?._id == categoryData?.id
      );

      const subCategories = category?.children;
      if (categoryData?.subCategoryId) {
        const subCategory = subCategories?.find(
          sub => sub._id == categoryData?.subCategoryId
        );
        if (subCategory) setSubCategories(subCategory);
        if (loading && subCategories && subCategory) {
          dispatchToMarketPlace(
            subCategories,
            subCategory?.types[0],
            subCategory?._id
          );
        }
        return;
      }

      category && setCategory(category);
      if (loading && subCategories) {
        dispatchToMarketPlace(subCategories, category?.types[0], category._id);
      }
      return;
    }

    dispatch(getSubCategoriesReceive([]));
  }, [categories, dispatch, loading]);

  const categoryClicked = useCallback(
    (id: string, sort?: string) => {
      const category = getCategory(id);
      category && setCategory(category);
      const icon = category ? getCategoryIcon(category?.icons) : '';

      const categoryItem = {
        id,
        type: category?.types[0],
        topCategory: category?.displayName,
        topCategoryName: category?.name,
        topCategoryIcon: icon,
        subCategory: '',
        subCategoryId: ''
      };
      localStorage.setItem('category', JSON.stringify(categoryItem));
      if (category)
        dispatchToMarketPlace(
          category?.children,
          category?.types[0],
          category._id,
          sort
        );

      const query = getQuery(categoryItem, null);
      push(`/search${query}`);
    },
    [categories, dispatch, push]
  );

  const getSearchSubCategory = (
    parentId: string,
    childId: string,
    childName: string
  ) => {
    const category = getCategory(parentId);
    const subCategories = category?.children;
    const icon = category ? getCategoryIcon(category?.icons) : '';
    const subCategory = subCategories?.find(
      (sub: categoryObject) => sub?._id === childId
    );

    if (subCategory && subCategories) {
      setSubCategories(subCategory);

      dispatchToMarketPlace(
        subCategories,
        childName,
        subCategory.types[0],
        childId
      );
    }
    const categoryItem = {
      id: parentId,
      topCategory: category?.displayName,
      topCategoryName: category?.name,
      subCategory: childName,
      subCategoryId: childId,
      topCategoryIcon: icon,
      type: category?.types[0]
    };
    if (category) {
      setCategory({
        ...category,
        displayName: ''
      });
    }

    localStorage.setItem('category', JSON.stringify(categoryItem));

    const query = getQuery(categoryItem, null);

    push(`/search${query}`);
  };

  return {
    categoryClicked,
    getSubCategories,
    category,
    categories,
    setCategory,
    setSubCategories,
    subCategories,
    getSearchSubCategory,
    getCategoryIcon,
    sort,
    dispatchToMarketPlace
  };
};
