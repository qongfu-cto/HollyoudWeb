import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useAuthenticatedLayoutStylesEN = makeStyles({
  sidebar: {
    float: 'left',
    width: 240,
    height: 800,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Branding.Colors.black[4],
    display: 'inherit',
    alignItems: 'center',
    flexDirection: 'column'
  },
  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: 12,
    backgroundColor: Branding.Colors.primary.light,
    margin: 10
  },
  img: {
    margin: 15
  },
  navigation: {
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'column'
    width: '100%',
    height: 72,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Branding.Colors.white
  },
  snackbar: {
    backgroundColor: Branding.Colors.blue.variant_4,
    height: 56,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 8,
    color: Branding.Colors.white
  },
  icon: {
    padding: 12
  },
  typography: {
    fontSize: 14
  },
  resendBtnDiv: {
    marginLeft: 'auto',
    marginRight: 24
  },
  resendBtn: {
    backgroundColor: Branding.Colors.primary.normal,
    color: Branding.Colors.white,
    '&:hover': {
      backgroundColor: Branding.Colors.primary.normal,
      color: Branding.Colors.white
    }
  },
  profilebtn: {
    width: 160,
    height: 32,
    backgroundColor: Branding.Colors.primary.normal,
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: 4,
    color: Branding.Colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '500',
    textTransform: 'none'
    // margin: 16
  }
});
