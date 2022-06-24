import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  btns: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  center: {
    textAlign: 'center',
    padding: 24
  },
  title: {
    color: Branding.Colors.black[60],
    fontFamily: 'Outfit',
    fontSize: 16
  },
  content: {
    color: Branding.Colors.black[86],
    marginLeft: -20
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column'
  }
});
