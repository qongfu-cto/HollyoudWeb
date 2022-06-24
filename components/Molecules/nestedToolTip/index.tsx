import React, { useRef, useState } from 'react';
import { useNestedToolTipStylesEN } from './styleEN';
import QText from '../../Atoms/text';
import { Branding } from '../../../utilities/branding';
import QIcon from '../../Atoms/icon';
import check from '../../../assets/icons/green-checkmark.svg';
import menuMore from '../../../assets/icons/menu-more.svg';
import NavToolTip from '../navToolTip';

// const renderMoreItems = (
//   subMenu: { _id: string; name: string }[],
//   selected: boolean,
//   selectedId: string,
//   handleClick: (id: string, subMenu: boolean) => void,
//   styles: any,
//   onMouseHover: () => void
// ) => {
//   return subMenu.map((menu, index) => {
//     const isActive = selected && selectedId === menu?._id;
//     return (
//       <div
//         className={styles.subMenu}
//         style={{
//           backgroundColor: isActive ? Branding.Colors.blue.variant_5 : 'auto',
//           width: '100%'
//         }}
//         key={`sub-menu-${index}`}
//         onClick={() => handleClick(menu?._id, true)}
//         onMouseOver={onMouseHover}
//       >
//         <QText
//           label={menu.name}
//           labelStyle={{
//             font: 'normal 300 normal 15px/18px Roboto',
//             textAlign: 'left',
//             whiteSpace: 'nowrap',
//             marginRight: 25
//           }}
//           labelColor={Branding.Colors.black['100']}
//         />
//         {isActive ? (
//           <QIcon
//             iconProps={{ width: 25, height: 25, src: check }}
//             iconStyle={styles.icon}
//           />
//         ) : null}
//       </div>
//     );
//   });
// };

const RenderNestedMenuHeader = (
  data: categoryObject,
  index: number,
  active: boolean,

  selectedId: number | string,
  handleClick: (id: string, subMenu: boolean, parentId?: string) => void
) => {
  const styles = useNestedToolTipStylesEN({ active: active });

  let isSelected =
    data?._id === selectedId ||
    data?.children?.filter(subMenu => subMenu?._id === selectedId)?.length > 0;
  const onClick = () => {
    if (data.children?.length > 0) {
      return;
    }
    handleClick(data._id, false, '0');
  };
  return (
    <div
      id={`nested-menu-item`}
      key={`sub-menu-${index}`}
      className={styles.nestedMenuHeader}
    >
      <QText
        label={data.name}
        labelStyle={{
          font: 'normal 300 normal 15px/18px Roboto',
          textAlign: 'left',
          whiteSpace: 'nowrap'
        }}
        labelColor={
          isSelected || active
            ? Branding.Colors.blue.variant_4
            : Branding.Colors.black['100']
        }
        textProps={{
          onClick: onClick
        }}
      />
      {data.children?.length > 0 ? (
        <QIcon
          iconProps={{ width: 25, height: 25, src: menuMore }}
          iconStyle={styles.nestedHeaderIcon}
        />
      ) : null}
    </div>
  );
};

const NestedToolTip = ({
  data,
  selected,
  onClick,
  selectedId,
  mouseLeave
}: NestedToolTipProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | string>(0);

  const handleClick = (id: string, isSubMenu: boolean, parentId?: string) => {
    setActiveId(0);
    onClick(id, isSubMenu, parentId);
  };

  //Handler for Mouse hover events
  const handleMouseEnter = (id: string) => {
    setActiveId(id);
  };
  const handleMouseLeave = () => {
    setActiveId(0);
  };

  const styles = useNestedToolTipStylesEN({ active: false });
  // const thirdLevelChildren = data?.children?.filter(
  //   (data) => data?.level === 3
  // );

  return (
    <div
      id={'nested-tool-tip'}
      ref={ref}
      className={styles.container}
      onMouseLeave={activeId !== 0 ? () => null : mouseLeave}
    >
      {data.children?.length > 0
        ? data.children
            ?.filter(data => data?.level === 2)
            .map((navData: categoryObject, index: number) => {
              return (
                <div
                  key={`nested-nav-item-${index}`}
                  onMouseOver={() => handleMouseEnter(navData?._id)}
                  style={{ width: '100%' }}
                >
                  {RenderNestedMenuHeader(
                    navData,
                    index,
                    activeId === navData?._id,

                    selectedId,

                    handleClick
                  )}
                  {navData.children?.length > 0 && activeId === navData?._id ? (
                    <div
                      onMouseLeave={() => handleMouseLeave()}
                      className={styles.nestedMenuToolTip}
                      style={{
                        left: ref?.current ? ref?.current?.offsetWidth + 5 : 5
                        //   document?.getElementById('nested-tool-tip')
                        //     ?.offsetWidth + 5
                      }}
                    >
                      <NavToolTip
                        data={navData}
                        onClick={handleClick}
                        isNested={true}
                        selected={selected}
                        selectedId={selectedId}
                        isLast={false}
                        setActiveId={() => {}}
                      />
                    </div>
                  ) : null}
                </div>
              );
            })
        : null}
    </div>
  );
};

export default NestedToolTip;
