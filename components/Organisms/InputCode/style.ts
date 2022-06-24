import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
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
  },
  mb6: {
    marinBottom: 12,
  },
  mobileRow: {
    // flexDirection: 'row',
    // display: 'flex',
    // marginTop: 'auto'
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding: '16px 16px 16px',
    bottom: '0px !important',
    position: 'absolute',
  }
});
