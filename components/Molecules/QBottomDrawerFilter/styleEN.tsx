import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useQBottomDrawerStylesEN = makeStyles(theme => ({
  headerContainer: {
    height: 100,
    // borderRadius: ` 32px   32px  0 0`,
    backgroundColor: 'white',
    // padding: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 16px',
    top: 40,
    position: 'absolute',
    zIndex: 2,
    marginLeft: -10,
    overscrollBehaviorY: 'contain',
    borderBottom: `1px solid ${Branding.Colors.black[16]} `,

  },
  headerTopSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerBottomSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingBottom: 50,
    width: '100%',
    overflowY: 'hidden',
    position: 'sticky',
    // marginLeft: -10
    marginTop: 100,
    overscrollBehaviorY: 'contain',
  },
  text: {
    color: Branding.Colors.primary.normal,
    fontWeight: 800
  },
  footerContainer: {
    borderTop: `1px solid ${Branding.Colors.black[16]} `,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  close: {
    '&.MuiButton-root': {
      color: Branding.Colors.primary.normal,
      fontSize: 18,
      textAlign: 'left',
      fontFamily: 'Outfit',
      fontWight: '600',
      textTransform: 'none'
    }
  },
  searchField: {
    width: 336
  },
  searchFieldStyle: {
    borderRadius: 20,
    marginTop: 24,
    marginBottom: 16,
    width: 336,
    height: 40,
    backgroundColor: Branding.Colors.offWhite,
    border: '1px solid ' + Branding.Colors.black[16]
  },
  drawer: {
    width: '100%',
    height: '98% !important',
    overflowY: 'hidden',
    position: 'fixed',
    paddingTop: 16,
    top: 24
  },
  resultContainer: {
    height: 500,
    marginTop: 100,
    backgroundColor: 'red',
    paddingBottom: 10,
    overflow: 'auto',
  }
}));
