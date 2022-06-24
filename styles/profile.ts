import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const Styles = makeStyles({
  camera: {
    position: 'absolute',
    top: -40
  },
  icon: {},
  avatarContainer: {
    position: 'relative',
    // bottom: -90,
    marginTop: 290,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
    // marginTop: 64 // because 64 is the height of navbar
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  updateBtn: {
    '&:focus': {
      backgroundColor: 'red'
    }
  },
  name: {
    // marginTop: 1,
    color: Branding.Colors.blue.variant_10
  },
  text24: {
    fontSize: 24
  },
  textField: {
    width: '100%',
    border: `1px solid ${Branding.Colors.blue.variant_10}`,
    height: 40
  },
  drawerHeight: {
    height: 180
  },
  textfields: {
    minWidth: '100%',
    paddingLeft: 24,
    paddingRight: 24
  },
  divrow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    padding: 0,
    margin: 0,
    paddingLeft: 16,
    color: Branding.Colors.grey2,
    fontSize: 12,
    height: 'auto'
  },
  value: {
    padding: 0,
    margin: 0,
    paddingLeft: 24,
    color: Branding.Colors.text,
    marginTop: 8,
    height: 'auto',
    fontSize: 17
  }
});
