import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useAuthenticationLayoutStylesEN = makeStyles({
  container: {
    width: 488,
    // minHeight: 680,
    border: `1px solid ${Branding.Colors.primary.light}`,
    padding: 32,
    borderRadius: 12
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'lightblue',
    justifyContent: 'center',
    minHeight: '100%'
  },
  mobile: {
    paddingTop: 16
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  mr: {
    marginRight: 5
  },
  simpleContainer: {
    // minHeight: 680,
    // padding: 16,
    borderRadius: 12
  },
  sectionContainer: {
    width: '100%',
    maxWidth: 1280,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '8px auto 16px'
  },

  lineContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 24,
    width: 220
    // position: 'fixed',
    // bottom: -100
  },
  link: {
    textDecorationLine: 'underline',
    color: Branding.Colors.primary.normal,
    cursor: 'pointer'
  },
  btn: {
    '.MuiButton-colorInheritt': {
      backgroundColor: Branding.Colors.primary.normal
    }
  },
  space: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 32,
    width: '100%'
  },
  pAround: {
    paddingLeft: 16,
    paddingRight: 16
  },
  mb: {
    marginBottom: 16
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
    fontFamily: 'Roboto',
    textTransform: 'capitalize'
  },
  mb16: {
    marginBottom: 16,
    fontSize: 12
  },
  closeBtn: {
    width: '100%',
    textAlign: 'right'
  },
  close: {
    color: Branding.Colors.black[48],
    cursor: 'pointer'
  }
});
