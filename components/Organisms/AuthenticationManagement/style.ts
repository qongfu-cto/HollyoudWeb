import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';
import { convertPixelsToRems } from 'utilities/theme';

export const Styles = makeStyles({
  bodyWrapper: {
    padding: `0 ${convertPixelsToRems(24)}`,
    width: '80%',
    margin: '0 auto',
    maxWidth: 1280
  },

  profileDetailsWrapper: {
    padding: `${convertPixelsToRems(20)} 0`,
    display: 'flex',
    gap: '1rem'
  },
  modal: {
    '&.MuiModal-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 'none !important',
      border: 'none !important',
      overflowHorizontal: 'hidden',
    }
  },

  container: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    // borderRadius: 2,
    // padding: 8,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflowX: 'hidden'
  },
  noMobileCentercontainer: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    // borderRadius: 2,
    // padding: 8,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

    overflowX: 'hidden'
  },
  centerContainer: {
    minHeight: '100%'
  },
  forgotContainer: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflowX: 'hidden',
    width: '100%',
    padding: '0px 16px',
  },
  row: {
    flexDirection: 'row',
    display: 'flex'
  },
  mt16: {
    marginTop: 16,
    marginBottom: 16
  },
  containerFill: {
    '&.MuiFilledInput-root': {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      '&.Mui-focused': {
        boxShadow: `${Branding.Colors.black[60]} 0 2px 2px 0`,
        borderColor: Branding.Colors.primary.light
      }
    }
  },
  text: {
    // '&.Mui-focusVisible': {
    //   backgroundColor: 'transparent'
    // }
    // backgroundColor: `${Branding.Colors.black[36]} !important`,
    // color: `${Branding.Colors.white} !important`
  },
  label: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Roboto'
  },
  star: {
    color: Branding.Colors.yellow,
    margin: 0,
    padding: 0
  },
  avatar: {
    border: '3px solid ' + Branding.Colors.white,
    boxShadow: '0px 1px 2px #00000029',
    width: 128,
    height: 128,
    borderRadius: 127,
    marginBottom: 37
  },
  input: {
    backgroundColor: Branding.Colors.black[6]
  },

  logoUpload: {
    marginLeft: 4,
    marginTop: -80
  },
  icon: {
    // position: 'relative',
    // bottom: 40,
    // left: 43,
    // width: 50,
    // height: 50
    // position: 'absolute',
    // bottom: -80,
    // left: 43,
    // width: 50,
    // height: 100
    // backgroundColor: 'red'
  },
  camera: {
    position: 'absolute',
    top: -40
  },
  modalHeader: {
    fontSize: 32
  },
  disable: {
    '&.Mui-disabled': {
      backgroundColor: Branding.Colors.black[6]
    }
  },
  newProfile: {
    fontSize: 32,
    color: '#3190AF',
    margin: 0,
    fontWeight: 'bold'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 300
  },
  centerForgot: {
    display: 'flex',
    position: 'static',
  },
  centerDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100%'
  }
});

export const useMobileProfilePageStyles = makeStyles({
  bodyWrapper: {
    padding: `0 ${convertPixelsToRems(24)}`,
    width: '80%',
    margin: '0 auto',
    maxWidth: 1280
  },
  profileDetailsWrapper: {
    padding: `${convertPixelsToRems(20)} 0`,
    display: 'flex',
    gap: '1rem'
  }
});
