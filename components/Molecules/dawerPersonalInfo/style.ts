import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const Styles = makeStyles({
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  name: {
    // marginTop: 1,
    color: Branding.Colors.blue.variant_10
  },
  text24: {
    fontSize: 24
  },
  textField: {
    width: '100%',
    border: `1px solid ${Branding.Colors.blue.variant_10}`
    // height: 40
  },
  drawerHeight: {
    height: 180
  },
  increasesdrawerHeight: {
    height: 280
  },
  mostIncreasesdrawerHeight: {
    height: 380
  },
  updateBtn: {
    '&:focus': {
      backgroundColor: 'red'
    }
  },
  successicon: {
    color: Branding.Colors.success.normal
  },
  alerticon: {
    color: Branding.Colors.danger.normal
  },
  warnicon: {
    color: Branding.Colors.warning.normal
  },

  textMessage: {
    width: '100%',
    textAlign: 'right'
  },
  centerSms: {
    color: Branding.Colors.black[60],
    textAlign: 'center'
  },
  blackSms: {
    color: Branding.Colors.black[86],
    textAlign: 'center',
    fontSize: 18
  },
  center: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    // marginTop: 16,
    flexDirection: 'column',
    alignItems: 'center'
  },
  mt16: {
    marginTop: 16
  },
  genderBox: {
    backgroundColor: Branding.Colors.white,
    height: 64,
    width: 300,
    border: `1px solid ${Branding.Colors.black[36]}`,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  activegenderBox: {
    backgroundColor: Branding.Colors.blue.variant_4,
    height: 64,
    width: 300,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
});
