import React from 'react';
import { useDropDownStyling } from './stylesEN';
import _ from 'lodash';
import { searchItemList } from './sampledata';

interface QSearchDropDownArrayProps {
  id?: number;
  label?: string;
  description?: string;
  image?: any;
}

interface QSearchDropDownItemsProps {
  PaperHeight?: any;
  PaperWidth?: any;
  radius?: any;
  dropDownArray?: QSearchDropDownArrayProps[];
  onClick: (index: number) => void;
}

const SearchDropDownItem = ({
  PaperHeight,
  PaperWidth,
  radius,
  dropDownArray,
  onClick
}: QSearchDropDownItemsProps) => {
  const stylesEN = useDropDownStyling();

  return (
    <div>
      {dropDownArray?.map((searchItem, index) => (
        <div
          key={searchItem.id}
          style={{ cursor: 'pointer' }}
          onClick={() => onClick(index)}
        >
          <p className={stylesEN.searchItemLabelStyling}>
            {searchItem.label}&nbsp;&nbsp;
            <span className={stylesEN.searchItemDescriptionStyling}>
              {searchItem.description}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchDropDownItem;
