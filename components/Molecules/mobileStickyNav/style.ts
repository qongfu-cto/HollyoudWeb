import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';
import { convertPixelsToRems } from 'utilities/theme';

export const Styles = makeStyles({
  nav: {
    height: 64,
    backgroundColor: Branding.Colors.white,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    position: 'fixed',
    overflow: 'hidden',
    width: '100%',
    top: 0
  },
  exploreCityBtn: {
    width: 200,
    height: '42.66px',
    borderRadius: 5
  },
  menu: {
    color: Branding.Colors.primary.light
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  flex7: {
    flex: 0.7
  },
  flex2: {
    flex: 0.2
  },
  logoContainer: {
    width: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 16
  },
  actionsContainer: {
    width: 130,
    display: 'flex',
    flexDirection: 'row-reverse'
  }
});
