import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useProfileCardLayoutStylesEN = makeStyles({
  container: {
    width: 828,
    maxWidth: 1200,
    height: 'auto',
    boxShadow: ` 0px 4px 4px  gray`,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    margin: '20px auto ',
    borderRadius: 60,
    backgroundColor: Branding.Colors.white,
    paddingBottom: 56,
    overflowY: 'scroll'
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttomContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  },
  ManageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    marginTop: 18,
    marginLeft: 112,
    marginRight: 112,
    gap: 11
  },
  avatarContainer: {
    position: 'relative',
    bottom: 90,
    display: 'flex',
    flexDirection: 'column',
    width: 127,
    height: 50
  },
  icon: {
    position: 'absolute',
    bottom: -80,
    left: 43,
    width: 50,
    height: 50
  },
  backImage: {
    marginTop: 30
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: Branding.Colors.blue.variant_1
  },
  name: {
    display: 'flex',
    flexDirection: 'row'
  },
  miniCard: {
    width: 144,
    height: 136,
    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  locationIcon: {
    verticalAlign: 'middle',
    height: 48,
    width: 48,
  },
});
