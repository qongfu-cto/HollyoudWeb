import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useAuthenticatedLayoutStylesEN = makeStyles({
  icon: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3
  },
  typography: {
    fontSize: 14
  },
  pl12: {
    paddingLeft: 12
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
  snackbar: {
    height: 56,
    display: 'flex',
    backgroundColor: Branding.Colors.notification,
    color: Branding.Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
