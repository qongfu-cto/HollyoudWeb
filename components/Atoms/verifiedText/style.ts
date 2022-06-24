import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  verifiedText: {
    color: Branding.Colors.success.normal,
    textAlign: 'right',
    width: '100%',
    margin: 0,
    padding: 0,
    marginTop: 8
    // backgroundColor: 'red'
  },
  checkIcon: {
    color: Branding.Colors.success.normal
  },
  crossIcon: {
    color: Branding.Colors.danger.normal
  },
  unverifiedText: {
    color: Branding.Colors.danger.normal,
    textAlign: 'right',
    width: '100%',
    margin: 0,
    padding: 0,
    marginTop: 8
  }
});
