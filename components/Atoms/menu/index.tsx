import { Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useMenu } from 'utilities/hook/useMenu';
import QIcon from '../icon';
import { useModalLayoutStylesEN } from './styleEN';

interface QMenuProps {
  menuList: string[];
  //   icon?: StaticImageData;
  icon?: any;
  iconClicked?: () => void;
  onMenuClicked: (index: number) => void;
  iconStyle?: string;
  currentTarget?: EventTarget;
  avatar?: boolean;
}

function QMenu({
  menuList,
  onMenuClicked,
  icon,
  iconClicked,
  iconStyle,
  currentTarget,
  avatar = false
}: QMenuProps) {
  const styles = useModalLayoutStylesEN();
  const {
    anchorElUser,
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleOpenUserMenu
  } = useMenu(onMenuClicked);

  //   const handleClickAway = () => {
  //     setOpen(false);
  //   };
  return (
    <div className={avatar ? styles.row : styles.noborderRow}>
      {avatar && <Typography className={styles.me}>Me</Typography>}
      {icon && (
        <QIcon
          source={icon}
          click={handleOpenUserMenu}
          alt=""
          iconStyle={iconStyle}
          avatar={avatar}
        />
      )}
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {menuList?.map((list, index) => (
          <MenuItem key={list} onClick={() => handleCloseNavMenu(index)}>
            <Typography>{list}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default QMenu;
