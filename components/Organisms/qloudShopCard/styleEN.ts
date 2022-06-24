import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useProfileCardLayoutStylesEN = makeStyles({
  container: {
    width: 832,
    maxWidth: 1200,
    height: 716,
    boxShadow: `0px 3px 6px #00000029`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px auto ',
    borderRadius: 32,
    backgroundColor: Branding.Colors.white,
    paddingBottom: 20
  },
  topContainer: {
    marginLeft: 40,
    display: 'flex',
    flexDirection: 'row',
    gap: 380,
    marginTop: -130
  },
  verifyContainer: {
    width: 184,
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 8,
    border: '1px solid ' + Branding.Colors.blue.variant_4,
    backgroundColor: Branding.Colors.white,
    paddingLeft: 8,
    paddingTop: 12
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8
  },
  avatarContainer: {
    position: 'relative',
    bottom: 90,
    display: 'flex',
    flexDirection: 'column',
    marginTop: -110,
    height: 278
  },
  icon: {
    position: 'absolute',
    bottom: -80,
    left: 43,
    width: 50,
    height: 50
  },
  backImage: {
    //marginTop: 30
  },
  cardContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // gap: 40,
    marginTop: 40
  },
  card: {
    width: 224,
    height: 328,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 16,
    boxShadow: '0px 1px 2px #00000029',
    backgroundColor: Branding.Colors.white,
    padding: 24
  },
  shopImage: {
    marginLeft: 28
  }
});
