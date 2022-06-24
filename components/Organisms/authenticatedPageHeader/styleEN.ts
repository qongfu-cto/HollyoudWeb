import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';
import { mediaQueries } from '../../../utilities/designSystem';

export const useAuthenticatedPageHeaderStylesEN = makeStyles({
  container: {
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 0
    // backgroundColor:"red"
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Branding.Colors.quaternary.light,
    margin: 3
  },

  img: {
    margin: 15,
    [mediaQueries.phone]: {
      margin: 0,
      marginLeft: -25,
      minWidth: 20
    }
  },
  menu: {
    // FIXME: Fromn 16px to 24px
    paddingLeft: 24,
    cursor: 'pointer',
    [mediaQueries.phone]: {
      margin: 0,
      marginRight: 10,
      minWidth: 20
    }
  }
});
