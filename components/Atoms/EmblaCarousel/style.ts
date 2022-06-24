import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useProfileCardLayoutStylesEN = makeStyles({
  card: {
    width: 224,
    height: 328,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 16,
    boxShadow: '0px 1px 2px #00000029',
    backgroundColor: Branding.Colors.white,
    padding: 24,
  },
  shopImage: {
    marginLeft: 28
  }
});
