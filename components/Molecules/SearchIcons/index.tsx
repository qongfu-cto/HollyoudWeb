import React from 'react';

import { useSearchIconsStylesEN } from './stylesEN';
//sampledata
import QText from '../../Atoms/text';
import QIconButton from '../../Atoms/icon';

//import { samplePropertiesTwo } from './sampledata';

type SearchIconsProps = {
  clickedIcon: string | any;
  icon: string | any;
  notification?: number;
  onClick: () => void;
};

/**
 * SearchIcons
 *
 * a section that shows a maxiumum of 9 properties at a time with pagination.
 *
 *
 * @param propertyArray - an array of properties
 * @returns
 */
const SearchIcons = ({
  clickedIcon,
  icon,
  notification,
  onClick
}: SearchIconsProps) => {
  const style = useSearchIconsStylesEN();

  return (
    <div>
      {notification ? (
        <div style={{ position: 'relative' }}>
          <QIconButton
            source={clickedIcon}
            size="large"
            iconStyle={style.btnClicked}
            buttonProps={{
              disableRipple: true
            }}
            click={onClick}
          />
          {notification ? (
            <div className={style.notice}>
              <QText
                label={notification <= 9 ? notification : '9+'}
                textProps={{ classes: { root: style.notitext } }}
              />
            </div>
          ) : null}
        </div>
      ) : (
        <QIconButton source={icon} size="large" click={onClick} />
      )}
    </div>
  );
};
export default SearchIcons;
