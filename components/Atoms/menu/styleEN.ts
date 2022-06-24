import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useModalLayoutStylesEN = makeStyles(theme => ({
  row: {
    display: 'flex',
    // backgroundColor: 'blue',
    padding: 5,
    border: `1px solid ${Branding.Colors.black[16]}`,
    borderRadius: 24,
    width: 92,
    height: 48,
    marginTop: 8,
    marginBottom: 8
  },
  noborderRow: {
    display: 'flex',
    // backgroundColor: 'blue',
    padding: 5,
    // width: 92,
    // height: 48
  },
  me: {
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 7
    // backgroundColor: 'red'
  }
}));
