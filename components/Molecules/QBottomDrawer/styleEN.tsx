import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const useQBottomDrawerStylesEN = makeStyles(theme => ({
  headerContainer: {
    height: 'auto',
    borderRadius: ` 32px   32px  0 0`,
    backgroundColor: 'white',
    padding: 15,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${Branding.Colors.black[16]} `
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
  }
}));
