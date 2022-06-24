import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  container: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100%'
  },
  mobileContainer: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: typeof window !== 'undefined' ? window.outerHeight : '100%',
    maxHeight: typeof window !== 'undefined' ? window.outerHeight : '100%',
    marginTop: 100
    // minHeight: '80%'
  },
  row: {
    flexDirection: 'row',
    display: 'flex'
  },
  text: {
    // '&.Mui-focusVisible': {
    //   backgroundColor: 'transparent'
    // }
    // backgroundColor: `${Branding.Colors.black[36]} !important`,
    // color: `${Branding.Colors.white} !important`
  },
  label: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Roboto'
  }
});
