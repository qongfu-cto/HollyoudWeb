import React from 'react';
import { useNavHeaderStylesEN } from './styleEN';
import QIcon from '../../Atoms/icon';
import cross from '../../../assets/icons/cross.svg';
import darkCross from '../../../assets/icons/cross-dark.svg';
import dropdown from '../../../assets/icons/dropdown.svg';
import QText from '../../Atoms/text';
import { Branding } from '../../../utilities/branding';

interface NavHeaderProps {
  title: string;
  isSelected?: boolean;
  isChildrenEmpty: boolean;
  active: boolean;
  onClick: (id: string, isSubMenu: boolean, parentId?: string) => void;
  idClicked: string;
  setActiveId: (id: string) => void;
  id: string;
  subMenuParent?: string;
}

const NavHeader = ({
  title,
  isSelected,
  isChildrenEmpty,
  active,
  onClick,
  idClicked,
  setActiveId,
  id,
  subMenuParent
}: NavHeaderProps) => {
  const isChild = subMenuParent === id;
  const styles = useNavHeaderStylesEN({ active: active && isChild });

  const onHeaderClick = () => {
    if (isChildrenEmpty) {
      setActiveId(id);
      onClick(id, false);
      return;
    }
    return;
  };

  return (
    <div className={styles.container}>
      {(isSelected && isChild) || (isSelected && isChildrenEmpty) ? (
        <QIcon
          iconProps={{ width: 35, height: 35, src: active ? cross : darkCross }}
          iconStyle={styles.crossIcon}
          click={() => onClick('', false, idClicked)}
        />
      ) : null}
      <QText
        textProps={{
          onClick: onHeaderClick
        }}
        label={title}
        labelStyle={{
          font: 'normal 500 normal 16px/19px Roboto',
          textAlign: 'left',
          whiteSpace: 'nowrap'
        }}
        labelColor={
          (active && isChild) || (active && isChildrenEmpty)
            ? Branding.Colors.blue.variant_4
            : (isSelected && isChild) || (isSelected && isChildrenEmpty)
            ? Branding.Colors.primary.normal
            : Branding.Colors.black['60']
        }
      />
      {!isChildrenEmpty ? (
        <QIcon
          iconProps={{ width: 25, height: 25, src: dropdown }}
          iconStyle={styles.icon}
        />
      ) : null}
      {(active && isChild) ||
      (active && isChildrenEmpty) ||
      (isSelected && isChild) ||
      (isSelected && isChildrenEmpty) ? (
        <div className={styles.border} />
      ) : null}
    </div>
  );
};

export default NavHeader;
