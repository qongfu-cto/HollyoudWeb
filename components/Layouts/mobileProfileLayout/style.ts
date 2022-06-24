import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  navigation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 64, // because 64 is the height of navbar,
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  profilebtn: {
    width: 160,
    height: 32,
    backgroundColor: Branding.Colors.primary.normal,
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: 4,
    color: Branding.Colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '600',
    textTransform: 'none',
    margin: 16
  },
  bgImage: {
    position: 'relative',
    objectFit: 'contain',
    width: '100%',
    height: 182
  },
  cardsSection: {
    marginLeft: 24,
    marginRight: 24
  },
  about: {
    color: Branding.Colors.blue.variant_8,
    fontWeight: '400',
    fontFamily: 'Outfit',
    fontSize: 20,
    margin: 0,
    padding: 0,
    marginBottom: 11,
    marginTop: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex2: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex'
  },
  flex7: {
    flex: 0.7,
    alignItems: 'center'
  },
  flex1: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex'
  },
  cardBody: {
    color: Branding.Colors.black[60],
    fontSize: 16,
    margin: 0,
    padding: 0,
    paddingTop: 4
  },
  cardHeader: {
    fontColor: Branding.Colors.black[86],
    fontWeight: 400,
    fontSize: 22,
    margin: 0,
    padding: 0
  },
  forward: {
    color: Branding.Colors.black[36],
    height: 32,
    width: 32
  },
  card: {
    marginBottom: 12,
    paddingTop: 10,
    paddingBottom: 10
  },
  drawericon: {
    color: Branding.Colors.primary.normal
  }
});
