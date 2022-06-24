import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  mb6: {
    // backgroundColor: 'pink'
    marginTop: -10
  },
  container: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    borderRadius: 2,
    // padding: 8,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

    // minHeight: '80%'
    // minHeight: '80%'
  },
  minHeight: {
    minHeight: '70%'
  },
  minHeightMobile: {
    minHeight: '80%'
  },
  label: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Roboto'
  }
});
