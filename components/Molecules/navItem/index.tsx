import React, { useEffect, useMemo, useState } from 'react';
import { useNavItemStylesEN } from './styleEN';
import NavToolTip from '../navToolTip';
import NavHeader from '../navHeader';
import NestedToolTip from '../nestedToolTip';
import { useSearch } from 'container/search';

const NavItem = ({
  data,
  isNested,
  onClick,
  selectedId,
  isSubMenuSelected,
  isLast,
  activeId,
  setActiveId,
  subMenuParent,
  category
}: NavItemProps) => {
  const [idClicked, setIdClicked] = useState('');

  const checkIfSelected = (data: categoryObject) => {
    return (
      (!isSubMenuSelected && data?._id === selectedId) ||
      data?.children?.filter(
        (subMenu: categoryObject) => subMenu?._id === selectedId
      )?.length > 0
    );
  };
  const checkNestedMenuSelection = (nestedMenu: categoryObject[]) => {
    if (nestedMenu?.length === 0) return false;
    let selected = false;
    nestedMenu?.forEach(
      (data: categoryObject) => (selected = selected || checkIfSelected(data))
    );
    return selected;
  };

  const isNestedMenuSelected =
    isLast && checkNestedMenuSelection(data?.children);
  const isSelected = checkIfSelected(data) || isNestedMenuSelected;

  const getNestedMenuTitle = (data: categoryObject) => {
    let subCategory: any = data.children.find(
      (item: categoryObject) => item._id === selectedId
    );

    // let title = '';
    subCategory?.children.forEach((navData: any) => {
      let tit: any = checkIfSelected(navData) ? getTitle(navData) : title;

      return tit;
    });

    return subCategory.name;
  };

  const getTitle = (data: categoryObject) =>
    isSelected && isSubMenuSelected && subMenuParent === data._id
      ? data?.children?.filter(
          (subMenu: { _id: string }) => subMenu._id === selectedId
        )[0].name
      : data?.name;

  const title = isNestedMenuSelected
    ? getNestedMenuTitle(data)
    : getTitle(data);

  const [active, setActive] = useState(false);
  const activeHeader = useMemo(
    () => ({
      active: active,
      hasAChildren: data.children?.length !== 0
    }),
    [active, data]
  );

  useEffect(() => {
    if (activeId === data?._id || category?.subCategoryId === data?._id) {
      setActive(true);
    } else setActive(false);
  }, [activeId, data]);

  const styles = useNavItemStylesEN();

  const handleClick = (id: string, subMenu: boolean, parentId?: string) => {
    setActiveId(id);
    setIdClicked(id);
    onClick(id, subMenu, parentId);
  };
  //Handler for Mouse hover events
  const handleMouseEnter = () => {
    if (data.children?.length !== 0) setActiveId(data?._id);
  };

  const handleMouseLeave = () => {
    setActiveId(0);
  };

  return (
    <React.Fragment>
      <div className={styles.container} onMouseOver={handleMouseEnter}>
        <NavHeader
          title={title}
          isSelected={isSelected}
          active={active}
          isChildrenEmpty={data.children?.length === 0}
          onClick={handleClick}
          idClicked={idClicked}
          setActiveId={setActiveId}
          id={data?._id}
          subMenuParent={subMenuParent}
        />
        {activeHeader.active && activeHeader.hasAChildren ? (
          !isLast || !data.children ? (
            <div />
          ) : (
            // <NavToolTip
            //   data={data}
            //   isLast={isLast}
            //   onClick={handleClick}
            //   mouseLeave={handleMouseLeave}
            //   selected={isSelected}
            //   selectedId={selectedId}
            //   setActiveId={setActiveId}
            // />
            <NestedToolTip
              data={data}
              onClick={handleClick}
              mouseLeave={handleMouseLeave}
              selected={isSelected}
              selectedId={selectedId}
              setActiveId={setActiveId}
            />
          )
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default NavItem;
