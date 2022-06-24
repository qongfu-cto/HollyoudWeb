import { Branding } from 'utilities/branding';
import { makeStyles } from '@mui/styles';

export const Styles = makeStyles({
  mdText: {
    fontSize: 16,
    color: Branding.Colors.black[86]
  },
  lText: {
    color: Branding.Colors.black[36],
    cursor: 'pointer'
  },
  justifySpaceBetween: {
    justifyContent: 'space-between'
  },
  mAround: {
    // margin: `0 46`
    marginLeft: 24, // 32
    marginRight: 20
  },
  mt: {
    marginTop: 6
  },
  mtI: {
    marginTop: 16
  },
  ml8: {
    marginLeft: 8
  },
  fZ12: {
    fontSize: 12
  },
  menu: {
    width: 280
  },
  code: {
    width: 30
  },
  fz14: {
    fontSize: 22,
    color: Branding.Colors.black[60]
  },
  smmenu: {
    width: 'auto'
  },
  row: {
    flexDirection: 'row',
    display: 'flex'
  },
  newProfile: {
    fontSize: 32,
    color: '#3190AF',
    margin: 0,
    fontWeight: 'bold'
  },
  container: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    borderRadius: 2,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  label: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Roboto'
  },
  centerDiv: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: 0,
    padding: 0
    // backgroundColor: 'red'
  },
  red: {
    marginLeft: 2,
    fontSize: 18,
    color: Branding.Colors.danger.normal
  },
  message: {
    textAlign: 'left',
    width: '95%', // 90
    margin: 0,
    padding: 0
    // marginLeft: 32
    // backgroundColor: 'pink'
  },
  notAvailable: {
    color: Branding.Colors.danger.normal
  },
  available: {
    color: Branding.Colors.green.variant_2,
    margin: 0,
    marginTop: 2,
    padding: 0
  },
  modal: {
    '&.MuiModal-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 'none',
      overflowHorizontal: 'hidden'
    }
  },
  fullWidth: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchCountry: {
    // width: '80%',
    // height: 40
  },
  bottomBorder: {
    borderBottom: `1px solid ${Branding.Colors.black[6]}`
  },
  specificHeight: {
    height: 80
    // backgroundColor: 'red'
    // overflowY: 'scroll'
  },
  listHeight: {
    height: 35
    // backgroundColor: 'red'
  },
  avatar: {
    marginTop: 8
  },
  borderBottom: {
    borderBottom: `1px solid ${Branding.Colors.black[6]}`,
    borderLeft: `1px solid ${Branding.Colors.black[6]}`,
    borderRight: `1px solid ${Branding.Colors.black[6]}`,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%'
  },
  selectedCountry: {
    backgroundColor: Branding.Colors.black[16]
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  down: {
    // backgroundColor: 'red',
    top: 200,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkIcon: {
    color: Branding.Colors.success.normal
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  mobilecenterDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    width: '100%',
    textAlign: 'center'
  },
  mtMobile12: {
    marginTop: 12
  },
  labelMobile: {
    color: '#858585',
    fontSize: 12,
    textAlign: 'left',
    marginTop: 18
  },
  mtAuto: {
    marginTop: 'auto'
  }
});
