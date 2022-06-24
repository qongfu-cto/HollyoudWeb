import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';
import { convertPixelsToRems } from 'utilities/theme';

export const useMarketPlaceProductCardStyles = makeStyles({
  container: {
    maxWidth: 460,
    height: 170,
    padding: 10,
    margin: `5px 0`,
    cursor: 'pointer'
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 88
  },
  contentContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  price: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end'
  }
});
