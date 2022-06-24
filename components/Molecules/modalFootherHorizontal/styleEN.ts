import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useModalFooterHorizontalStylesEN = makeStyles(props => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  disable: {
    '&.Mui-disabled': {
      backgroundColor: Branding.Colors.black[16]
    }
  },
  button: {
    marginBottom: 20,
    width: 208,
    height: 48,

    '&.MuiButton-root': {
      borderRadius: 12,
      borderWidth: 2,
      borderColor: Branding.Colors.primary.normal
    }
  }
}));
