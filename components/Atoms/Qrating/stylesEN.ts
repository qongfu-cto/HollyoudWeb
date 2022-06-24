import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useQRatingStylesEN = makeStyles({
  conatiner: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'transparent',
    paddingLeft: 4
  },
  noContainer: {},
  label: {
    '&.MuiTypography-root': {
      fontSize: 12,
      textAlign: 'center',
      margin: `1px 5px`,
      color: Branding.Colors.black[60]
    }
  }
});
