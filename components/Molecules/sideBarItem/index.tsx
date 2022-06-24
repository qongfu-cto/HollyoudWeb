import React from 'react';
import { useSideBarItemStylesEN } from './styleEN';
import Text from '../../Atoms/text';
import { Branding } from '../../../utilities/branding';
import Img from '../../Atoms/img';

interface SideBarItemProps {
  data: { id: number; title: string; activeLogo: string; inactiveLogo: string };
  active: boolean;
  open: boolean;
  width: number;
  handleClick: (id: number) => void;
}

/**
 * Rendering the sidebar single item
 * @param open - Sidebar open state
 * @param data - Data of the singe item
 * @param width - Screen width
 * @param active - Boolean to detect if item is selected
 * @param handleClick - Click handler for sidebar item
 */
const SideBarItem = ({
  open,
  data,
  width,
  active,
  handleClick
}: SideBarItemProps) => {
  const styles = useSideBarItemStylesEN({ open: open, active: active });

  return (
    <div
      key={`sidebar-item-${data.id}`}
      className={styles.sidebarItem}
      onClick={() => handleClick(data.id)}
    >
      <Img
        source={active ? data.activeLogo : data.inactiveLogo}
        alt="logo"
        style={styles.icon}
      />
      {width < 768 || open ? (
        <Text
          label={data.title}
          labelColor={
            active
              ? Branding.Colors.primary.normal
              : Branding.Colors.black['60']
          }
          labelStyle={{
            font: 'normal normal normal 12px/18px Poppins',
            letterSpacing: 0
          }}
        />
      ) : null}
    </div>
  );
};

export default SideBarItem;
