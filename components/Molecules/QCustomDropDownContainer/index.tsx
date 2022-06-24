import React, { useState } from 'react';
import { useDropDownStyling } from './stylesEN';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Divider } from '@mui/material';

interface QDropDownArrayProps {
  dropDownContent: {
    id?: number;
    label?: string;
    description?: string;
    image?: any;
  };
}

interface QCustomDropDownListProps {
  categoryProps?: ReactJSXElement;
  searchDropDownItemProps?: ReactJSXElement;
  dropDownArray?: QDropDownArrayProps[];
  onClick?: () => void;
  width?: string | number;
  margin?: string | number;
  height?: string | number;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
}

/**
 * customDropDownList
 *
 * custom dropdown list that is triggered when clicking on the search bar.
 *
 * @param hotspotProps - optional property to add hotspot dropdown
 * @param searchDropDownItemProps - optional property to add search drop down list
 * @param onClick - optional property that adds onClick function to components "/".
 *
 */

const QCustomDropDownContainer = ({
  categoryProps,
  searchDropDownItemProps,
  dropDownArray,
  onClick,
  width,
  margin,
  height,
  position
}: QCustomDropDownListProps) => {
  const [openHotspots, setOpenHotspots] = useState(false);

  const stylesEN = useDropDownStyling();

  return (
    <div
      className={stylesEN.parentContainer}
      style={{
        width: width,
        margin: margin,
        height: height,
        position: position
      }}
    >
      <Divider orientation="horizontal" sx={{ margin: `5px 15px` }} />
      {categoryProps}
      {searchDropDownItemProps}
    </div>
  );
};

export default QCustomDropDownContainer;
