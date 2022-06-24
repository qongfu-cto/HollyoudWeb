import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  verified: {
    border: `1px solid ${Branding.Colors.blue.variant_4}`,
    height: 48,
    borderRadius: 8,
    marginTop: 64 + 16,
    width: '100%',
    padding: `0 8`,
    display: 'flex',
    alignItems: 'center'
  },
  mlr: {
    marginLeft: 24,
    marginRight: 24
  },
  image: {
    marginTop: -6
  },
  getVerified: {
    color: Branding.Colors.primary.normal,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 8
  },
  applyHereBtn: {
    marginLeft: 'auto',
    textTransform: 'capitalize'
  }
});
