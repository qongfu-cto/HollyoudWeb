import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useCardStyleEN = makeStyles({
  card: {
    //padding: 16,
    size: '50%',
    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
    backgroundColor: Branding.Colors.white
  },
  container: {
    '&.MuiCardContent-root': {
      margin: 0,
      padding: 0
    }
  },
  image: {
    borderRadius: '12px 12px 0px 0px'
  }
});
