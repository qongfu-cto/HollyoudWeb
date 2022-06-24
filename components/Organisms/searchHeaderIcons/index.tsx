import React from 'react';
import useSearchHeaderIconsStylesEN from './stylingsEN';
//sampledata
import skyline from '../../../assets/icons/skyline.svg';
import up from '../../../assets/icons/back-to-top.svg';
import SearchIcons from '../../Molecules/SearchIcons';
import Filter from '../../../assets/icons/filter-selected.svg';
import FilterEmpty from '../../../assets/icons/filters.svg';
import { useSearch } from 'container/search';

//import { samplePropertiesTwo } from './sampledata';

interface SearchHeaderIconsProps {}

/**
 * SearchHeaderIcons
 *
 * a section that shows a maxiumum of 9 properties at a time with pagination.
 *
 *
 * @param propertyArray - an array of properties
 * @returns
 */
const SearchHeaderIcons = ({}: SearchHeaderIconsProps) => {
  const style = useSearchHeaderIconsStylesEN();
  const { openFilters } = useSearch();
  return (
    <div className={style.container}>
      {/* <SearchIcons icon={world} clickedIcon={skyline} notification={0} /> */}
      {/* FIXME Eman show filter icon on desktop */}
      {/* 
      <SearchIcons
        onClick={openFilters}
        icon={FilterEmpty}
        clickedIcon={Filter}
      /> */}

      <SearchIcons
        icon={up}
        clickedIcon={skyline}
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
};
export default SearchHeaderIcons;
