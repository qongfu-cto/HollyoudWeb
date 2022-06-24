import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useProfilePageInfoStylesEN = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 127,
    height: 50
  },
  sectionContainer: {
    width: '100%',
    margin: `0 20px `
  },
  icon: {
    position: 'absolute',
    bottom: -80,
    left: 43,
    width: 50,
    height: 50
  }
});
