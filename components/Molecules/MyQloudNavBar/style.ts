import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useAuthenticatedLayoutStylesEN = makeStyles({
  icon: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3
  },
  typography: {
    height: 25,
    marginLeft: '16px',
    color: Branding.Colors.black[100],
    fontSize: 20,
    fontFamily: 'Outfit',
    textAlign: 'left',
    fontWeight: '600',
    width: 140
  },
  resendBtnDiv: {
    marginLeft: 'auto',
    marginRight: 24
  },
  resendBtn: {
    backgroundColor: Branding.Colors.notification,
    color: Branding.Colors.white,
    '&:hover': {
      backgroundColor: Branding.Colors.notification,
      color: Branding.Colors.white
    }
  },
  // FIXME: Fromn 16px to 24px
  snackbar: {
    height: 56,
    display: 'flex',
    // flexDirection: 'row',
    backgroundColor: Branding.Colors.white,
    color: Branding.Colors.white,
    border: '1px solid ' + Branding.Colors.black[16],
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24
    // alignItems: 'center'
  },
  buttonLeft: {
    // width: 200,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center'
    // marginTop: 12,
  },
  updateContainer: {
    display: 'flex',
    // marginTop: 12,
    gap: 8
  },
  leftSideContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center'
  }
});
