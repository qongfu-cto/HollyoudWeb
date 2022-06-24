import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  container: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    borderRadius: 2,
    // padding: 8,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'red',
    minHeight: '80%',
    // minHeight: '80%'
    marginTop: -30
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
