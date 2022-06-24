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
    marginLeft: 16,
    marginRight: 16
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
  },
  textfields: {
    width: '100%',
    marginTop: 30,
    paddingLeft: 24,
    paddingRight: 24
  },
  additionalMt: {
    marginTop: 64
  },
  mobile: {
    flex: 0.3
  },
  row: {
    display: 'flex'
  },
  mobileNumber: {
    flex: 0.7,
    marginLeft: 8
  },
  icon: {
    color: Branding.Colors.blue.variant_10
  },
  verifiedText: {
    color: Branding.Colors.success.normal,
    textAlign: 'right',
    width: '100%',
    margin: 0,
    padding: 0
  },
  navigation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'

    // marginTop: 64 // because 64 is the height of navbar
  },
  drawer: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16
  }
});
