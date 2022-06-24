import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles({
  navigation: {
    height: 64,
    backgroundColor: Branding.Colors.white,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    position: 'fixed',
    overflow: 'hidden',
    width: '100%',
    top: 0,
    boxShadow: `0 5px 6px -6px #777`
  },
  name: {
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
    paddingRight: 16,
    fontSize: 16,
    color: Branding.Colors.primary.normal
  },
  icon: {
    color: Branding.Colors.primary.normal
  },
  bgImage: {
    backgroundImage:
      'url(' + `${require('../../../assets/images/3028@3x.png')}` + ')'

    // `url(../../../assets/images/3028@3x.png)`
  },
  bgWrap: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    zIndex: -1
  }
});
