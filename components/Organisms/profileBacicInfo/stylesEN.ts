import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useProfileBasicInfoStylesEN = makeStyles(theme => ({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 8,
    position: 'inherit'
  },
  date: {
    width: 307,
    borderRadius: 12,
    height: 48,
    textAlign: 'center',
    padding: 20,
    margin: 5
  },
  label: {}
}));
