import { Branding } from 'utilities/branding';
import { makeStyles } from '@mui/styles';

export const Styles = makeStyles({
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
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: 0,
    padding: 0
  },
  red: {
    marginLeft: 2,
    fontSize: 18,
    color: Branding.Colors.danger.normal
  },
  message: {
    textAlign: 'left',
    width: '90%'
    // marginLeft: 32
    // backgroundColor: 'pink'
  },
  notAvailable: {
    color: Branding.Colors.danger.normal
  },
  available: {
    color: Branding.Colors.green.variant_2
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
  },
  listHeight: {
    height: 35
  },
  avatar: {
    marginTop: 8
  },
  borderBottom: {
    borderTop: `1px solid ${Branding.Colors.black[6]}`,
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
    marginTop: 250,
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
  }
});
