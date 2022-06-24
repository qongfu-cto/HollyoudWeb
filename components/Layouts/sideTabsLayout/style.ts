import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles(props => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: `0 20px `,
    position: 'relative'
  },
  container2: {
    width: 288,
    marginLeft: 350,
    position: 'absolute'
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    padding: 8
  },
  componentContainer: {
    backgroundColor: Branding.Colors.white,
    boxShadow: '0px 1px 3px #00000029',
    borderRadius: 12,
    margin: `20px 0`,
    marginLeft: 20,
    padding: 40,
    height: 'auto',
    width: '100%',
    marginBottom: 150
  },
  tabCard: {
    width: 248,
    height: 56,
    backgroundColor: Branding.Colors.white,
    boxShadow: '0px 1px 3px #00000029',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: `10px 0`,
    paddingLeft: 20
  },
  active: {
    border: 'solid 1px ' + Branding.Colors.primary.normal,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  activeText: {
    color: Branding.Colors.primary.normal,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 500,

    width: 190
  },
  inactiveText: {
    color: Branding.Colors.black[86],
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 16,

    width: 190
  },
  modalText: {
    color: Branding.Colors.black[86],
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'center'
  },
  checkText: {
    color: Branding.Colors.black[86],
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'left'
  },
  check: {
    marginTop: 34
  },
  header: {
    width: '100%'
  },
  btnHeader: {
    display: 'flex',
    flexDirection: 'row',
    //  margin:` 14px  20px`,

    gap: 16
  },
  btnContainer: {
    display: 'flex',
    gap: 16
  },
  updateBtn: {
    width: 104,
    height: 32,
    backgroundColor: Branding.Colors.primary.normal,
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: 12,
    color: Branding.Colors.white
  },
  cancelBtn: {
    width: 104,
    height: 32,
    borderRadius: 12,
    border: '1px solid' + Branding.Colors.black[86],
    color: Branding.Colors.black[86]
  },
  title: {
    color: Branding.Colors.black[86],
    fontSize: 24,
    fontFamily: 'Outfit',
    textAlign: 'left'
  },
  subTitle: {
    color: Branding.Colors.black[60],
    fontSize: 12,
    fontFamily: 'Roboto',
    textAlign: 'left'
  },
  updatebtn: {
    width: 88,
    height: 32,
    backgroundColor: Branding.Colors.blue.variant_4,
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: 4,
    color: Branding.Colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '500'
  },
  closebtn: {
    width: 64,
    height: 32,
    backgroundColor: Branding.Colors.white,
    borderRadius: 4,
    color: Branding.Colors.black[36],
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto'
  },
  cancelButton: {
    width: 185,
    height: 48,
    borderRadius: 4,
    border: '1px solid ' + Branding.Colors.primary.normal,
    color: Branding.Colors.black[60],
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Outfit'
  },
  discardButton: {
    width: 180,
    height: 48,
    borderRadius: 24,
    border: '1px solid ' + Branding.Colors.primary.normal,
    color: Branding.Colors.primary.normal,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Outfit'
  }
}));
