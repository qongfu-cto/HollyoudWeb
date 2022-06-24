import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useModalLayoutStylesEN = makeStyles(theme => ({
  layout: {
    backgroundColor: Branding.Colors.white,
    width: 500,
    height: 425,
    borderRadius: 12,
    padding: 24
  },
  wrapper: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
