import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';
import { convertPixelsToRems } from 'utilities/theme';

export const Styles = makeStyles({
  fullWidth: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 60
  },
  avatarName: {
    fontSize: 20,
    fontFamily: 'Outfit',
    color: Branding.Colors.black[86],
    fontWeight: 500,
    margin: 0
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    flexDirection: 'column',
    paddingRight: 16,
    paddingLeft: 16
  },
  bio: {
    fontSize: 14,
    color: Branding.Colors.black[60],
    marginTop: 4,
    textAlign: 'center'
  },
  location: {
    color: Branding.Colors.primary.normal,
    marginTop: 4,
    fontSize: 14,
    display: 'flex'
  },
  locationIcon: {
    verticalAlign: 'middle',
    height: 48,
    width: 48
  },
  bioSection: {
    // paddingRight: 16,
    // paddingLeft: 16
  },
  about: {
    color: Branding.Colors.blue.variant_8,
    fontWeight: '400',
    fontFamily: 'Outfit',
    fontSize: 20,
    margin: 0,
    padding: 0
  },
  bioPara: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: 1.6,
    color: Branding.Colors.black[60],
    marginTop: 11
  },
  morebtn: {
    color: Branding.Colors.blue.variant_9,
    paddingLeft: 16
  },
  bgWhite: {
    height: 'auto',
    backgroundColor: Branding.Colors.white,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 32,
    paddingBottom: 2,
    width: '90%'
  },
  plr: {
    paddingLeft: 24,
    paddingRight: 24
  },
  camera: {
    position: 'absolute',
    left: -90,
    bottom: -20
  }
});
