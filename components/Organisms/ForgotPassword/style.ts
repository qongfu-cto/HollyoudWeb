import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  row: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    marginTop: 64,
  },
  // FIXME: Buttons are sticking on the bottom
  mobileRow: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding: '16px 16px 16px',
    bottom: '0px !important',
    position: 'absolute',
  },
  column: {
    flexDirection: 'column',
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
  },
  input: {
    textAlign: 'start',
    height: 'auto',
    width: 328,
    marginTop: 32
  },
  message: {
    color: Branding.Colors.black[86],
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'Roboto'
  }
});
