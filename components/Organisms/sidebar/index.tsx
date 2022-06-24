import React, { useState } from 'react';
import { useSidebarStylesEN } from './styleEN';
import { sideBarData } from './sideBardata';
import SideBarItem from '../../Molecules/sideBarItem';
import Img from '../../Atoms/img';
import cityLogo from '../../../assets/images/QloudCityLogo_Compact.svg';
import fullLogo from '../../../assets/images/myQloud.svg';
// import fullLogo from '../../../assets/images/QloudCityFullLogo.svg';
import menu from '../../../assets/icons/menu_icon.svg';
import router, { useRouter } from 'next/router';

interface SidebarProps {
  openSideBar: boolean;
  toggleSideBar: () => void;
  width: number;
  topSection?: SideBarData[];
  bottomSection?: SideBarData[];
  activeIdProp?: number;
  fullHeight?: number | null;
  route: string;
}

/**
 * Rendering sidebar component given the sidebar data.
 * @param openSideBar - Boolean to detect is sidebar is open
 * @param toggleSideBar - function to toggle state of sidebar
 * @param width - Width of the screen
 */
const Sidebar = ({
  openSideBar,
  toggleSideBar,
  width,
  topSection,
  bottomSection,
  activeIdProp,
  fullHeight,
  route
}: SidebarProps) => {
  const [activeId, setActiveId] = useState(activeIdProp || 0);
  const { push } = useRouter();

  const handleItemClick = (id: number) => {
    console.log(' handleItemClick ', id);
    setActiveId(id);

    if (id === 1) {
      router.push('/');
    }

    if (id === 2 || id === 3) {
      router.push('/home');
    }

    // if (id === 7) {
    //   router.push('/qloudShop');
    // }
  };

  const styles = useSidebarStylesEN({ open: openSideBar });

  const renderItems = (data: SideBarData[]) => {
    return data?.map(item => {
      return (
        <div key={`sidebar-${item.id}`} className={styles.sidebarItem}>
          <SideBarItem
            width={width}
            data={item}
            open={openSideBar}
            active={activeId === item.id}
            handleClick={handleItemClick}
          />
          {activeId === item.id ? (
            <div className={styles.activeIcon}>
              <div className={styles.indicator} />
            </div>
          ) : null}
        </div>
      );
    });
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.headSection}>
        <Img
          source={openSideBar ? fullLogo : cityLogo}
          alt="logo"
          style={styles.img}
        />
        {width < 768 ? (
          <Img
            source={menu}
            alt="logo"
            style={styles.menu}
            click={toggleSideBar}
          />
        ) : null}
      </div>
      <div className={styles.topSection}>
        {renderItems(topSection ?? sideBarData.topSection)}
      </div>
      <div className={styles.bottomSection}>
        {renderItems(bottomSection ?? sideBarData.bottomSection)}
      </div>
    </div>
  );
};

export default Sidebar;
