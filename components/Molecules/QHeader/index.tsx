import React from 'react';
import QIcons from '../../Atoms/icon';
import QText from '../../Atoms/text';
import QHeaderStyles from './stylesEN';
import QloudCityLogo from '../../../assets/images/QloudCitySimpleLogo.svg';
import headerMessages from '../../../assets/icons/headerMessages.svg';
import headerNotifications from '../../../assets/icons/headerNotifications.svg';
import headerSchedule from '../../../assets/icons/headerSchedule.svg';
import headerTasks from '../../../assets/icons/headerTasks.svg';
import avatar from '../../../assets/images/avatar.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Branding } from '../../../utilities/branding';
import { Icon } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface QHeaderProps {
  navbarLabel?: string | ReactJSXElement;
  labelUser?: any;
  labelColor?: string;
  dropDownList?: any[];
  source?: string;
  onClick?: () => void;
  headerNotificationFunction?: () => void;
  headerMessagesFunction?: () => void;
  headerTasksFunction?: () => void;
  headerScheduleFunction?: () => void;
}

/**
 * Header
 *
 * A Header component with additional features
 *
 * @param navbarLabel - main label on the navigation bar where strings or JSX elements can be passed
 * @param labelColor - color for main label (default primary normal)
 * @param labelUser -  user Icon label
 * @param dropDownList - drop down list displayed when clicking on the user icon
 * @param source - source props to apply different icons on the header component
 * @param onClick - onClick function props
 * @param headerNotificationFunction - notification function property triggered when bell icon is clicked
 * @param headerMessagesFunction - Messages function property triggered when Messages icon is clicked
 * @param headerTasksFunction - Tasks function property triggered when Tasks icon is clicked
 * @param headerScheduleFunction - Schedule function property triggered when clicking on Schedule icon
 *
 *
 * */

const QHeader = ({
  navbarLabel,
  labelUser,
  labelColor,
  dropDownList,
  source,
  onClick,
  headerMessagesFunction,
  headerNotificationFunction,
  headerTasksFunction,
  headerScheduleFunction
}: QHeaderProps) => {
  const stylesEN = QHeaderStyles();

  dropDownList = dropDownList ?? ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    return;
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" className={stylesEN.appBarColor} color="inherit">
      <Toolbar>
        <Icon
          style={{
            position: 'relative',
            right: 27,
            width: 176,
            height: 56
          }}
        >
          <QIcons source={QloudCityLogo} />
        </Icon>

        <div style={{ width: '100%' }}>
          <QText
            labelColor={labelColor ?? Branding.Colors.black['100']}
            label={navbarLabel ?? 'Welcome back!'}
            textProps={{ classes: { root: stylesEN.labelOne } }}
          />
        </div>

        <div className={stylesEN.containerOne}>
          <IconButton
            style={{
              width: 52,
              height: 40
            }}
            onClick={headerNotificationFunction}
          >
            <QIcons source={headerNotifications} />
          </IconButton>

          <IconButton
            style={{
              width: 52,
              height: 40
            }}
            onClick={headerMessagesFunction}
          >
            <QIcons source={headerMessages} />
          </IconButton>

          <IconButton
            style={{
              width: 52,
              height: 40
            }}
            onClick={headerTasksFunction}
          >
            <QIcons source={headerTasks} />
          </IconButton>

          <IconButton
            style={{
              width: 52,
              height: 40
            }}
            onClick={headerScheduleFunction}
          >
            <QIcons source={headerSchedule} />
          </IconButton>
        </div>

        <div className={stylesEN.containerTwo}>
          <QText
            label={labelUser ?? 'John Doe'}
            labelColor={labelColor ?? Branding.Colors.black['100']}
            textProps={{
              classes: { root: stylesEN.labelOne }
            }}
          />

          <IconButton
            style={{
              width: 50,
              height: 40
            }}
            onClick={handleOpenUserMenu}
          >
            <QIcons
              iconProps={{
                width: 40,
                height: 40,
                src: source ?? avatar
              }}
            />
          </IconButton>
        </div>

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
          {dropDownList.map(list => (
            <MenuItem key={list} onClick={handleCloseNavMenu}>
              <Typography>{list}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default QHeader;
