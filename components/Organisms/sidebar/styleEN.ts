import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';
import { Theme } from '@mui/material';
import { mediaQueries } from '../../../utilities/designSystem';

export const useSidebarStylesEN = makeStyles<Theme, { open: boolean, height?:number }>(() => ({
  sidebar: {
    left: 0,
    top: 80,
    zIndex: 1,
    padding: '20px 0px',
    // backgroundColor: Branding.Colors.black['4'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: ({ open }) => (open ? 218 : 72),
		height:({height})=> height??'100vh',
    opacity: 1,
    boxShadow: `1px 1px 2px ${Branding.Colors.black[6]}`,
    transition: 'all 0.15s ease-in-out',
    [mediaQueries.small]: {
      position: 'absolute',
      top: 0,
      opacity: ({ open }) => (open ? 1 : 0),
      zIndex: ({ open }) => (open ? 1 : -1),
      width: ({ open }) => (open ? 200 : 0),
      transition: 'all 0.15s ease-in-out'
    }
  },
  headSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '10%',
 
  },
  img: {
    width: ({ open }) => (open ? 124 : 'auto'),
    [mediaQueries.small]: {
      width: '50% !important'
    }
  },
  menu: {
    cursor: 'pointer',
    height: '100%',
    paddingLeft: 24,
    paddingTop: 8
  },
  topSection: {
    paddingTop: 5,
    width: '100%',
    height: '70%',
    marginTop:50
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    height: '20%'
  },
  sidebarItem: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center'
  },
  activeIcon: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',
    right: 0
  },
  indicator: {
    width: 0,
    height: 0,
    borderTop: '5px solid transparent',
    borderRight: ({ open }) =>
      open
        ? `6px solid ${Branding.Colors.primary.normal}`
        : `4px solid ${Branding.Colors.primary.normal}`,
    borderBottom: ({ open }) =>
      open ? '5px solid transparent' : '3px solid transparent',
    [mediaQueries.small]: {
      borderRight: `6px solid ${Branding.Colors.primary.normal}`,
      borderBottom: '5px solid transparent'
    }
  }
}));
