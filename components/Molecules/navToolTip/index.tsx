import React from 'react';
import { useNavToolTipStylesEN } from './styleEN';
import QText from '../../Atoms/text';
import { Branding } from '../../../utilities/branding';
import QIcon from '../../Atoms/icon';
import check from '../../../assets/icons/green-checkmark.svg';

const NavToolTip = ({
  data,
  selected,
  onClick,
  selectedId,
  isNested = false,
  isLast,
  mouseLeave
}: NavToolTipProps) => {
  const styles = useNavToolTipStylesEN({ isNested: isNested });
  const titleSelected = selected && selectedId === data._id;

  return (
    <div className={styles.container} onMouseLeave={mouseLeave}>
      {!isLast ? (
        <div
          className={styles.menuTitle}
          style={{
            backgroundColor: titleSelected
              ? Branding.Colors.blue.variant_5
              : 'auto'
          }}
          onClick={() => onClick(data._id, false)}
        >
          <QText
            label={`${data.name} (All)`}
            labelStyle={{
              font: 'normal normal medium 15px/18px Roboto',
              whiteSpace: 'nowrap'
            }}
            labelColor={Branding.Colors.black['100']}
          />
          {titleSelected ? (
            <QIcon
              iconProps={{ width: 25, height: 25, src: check }}
              iconStyle={styles.icon}
            />
          ) : null}
        </div>
      ) : null}
      {data?.children?.map((menu, index) => {
        const isActive = selected && selectedId === menu._id;

        return (
          <div
            className={styles.subMenu}
            style={{
              backgroundColor: isActive
                ? Branding.Colors.blue.variant_5
                : 'auto'
            }}
            key={`sub-menu-${index}`}
            onClick={() => onClick(menu._id, true, data._id)}
          >
            <QText
              label={menu.name}
              labelStyle={{
                font: 'normal 300 normal 15px/18px Roboto',
                textAlign: 'left',
                whiteSpace: 'nowrap'
              }}
              labelColor={Branding.Colors.black['100']}
            />
            {isActive ? (
              <QIcon
                iconProps={{ width: 25, height: 25, src: check }}
                iconStyle={styles.icon}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default NavToolTip;
