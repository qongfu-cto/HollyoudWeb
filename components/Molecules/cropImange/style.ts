import { makeStyles } from '@mui/styles';
import { Branding } from '../../../utilities/branding';

export const Styles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
    // margin: "32px 32px",
    // gap: 16,
  },
  settingContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '16px 16px'
    // width: 752,
    // height: 312,
    // background: "transparent",
    // borderRadius: 4,
    // // gap: 16,
  },
  logo: {
    position: 'absolute',
    width: 160,
    height: 160,
    background: 'transparent',
    borderRadius: 127,
    border: '5px solid ' + Branding.Colors.white,
    marginLeft: 40,
    marginTop: -116
  },
  imagesStack: {
    width: 168,
    height: 312,
    backgroundColor: Branding.Colors.black[4],
    marginLeft: 8,
    border: '1px solid ' + Branding.Colors.black[16],
    borderRadius: 4,
    overflowY: 'scroll'
  },
  addImage: {
    width: 140,
    height: 88,
    border: '1px dashed ' + Branding.Colors.primary.normal,
    borderRadius: 2,
    margin: '8px 8px'
  },
  imageBox: {
    width: 140,
    height: 88,
    borderRadius: 2,
    position: 'relative'
  },
  images: {
    width: 140,
    height: 88,
    border: '1px dashed ' + Branding.Colors.primary.normal,
    borderRadius: 2,
    margin: '8px 8px',
    position: 'relative'
  },
  img: {
    height: window.innerHeight * 0.5
  },
  delete: {
    position: 'absolute',
    marginLeft: 120,
    marginTop: -90
  },
  deleteAvatar: {
    position: 'absolute',
    marginLeft: 150,
    marginTop: -100
  },
  placeContainer: {
    marginLeft: 40,
    marginTop: 32
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column'
  },
  placeRow: {
    gap: 16
  },
  inputField: {
    height: 48,
    backgroundColor: Branding.Colors.offWhite,
    border: '1px solid ' + Branding.Colors.black[16],
    borderRadius: 4,
    // textAlign: "left",
    paddingLeft: 16
  },
  areaField: {
    width: 456,
    height: 104,
    backgroundColor: Branding.Colors.offWhite,
    border: '1px solid ' + Branding.Colors.black[16],
    borderRadius: 4,
    textAlign: 'left',
    paddingLeft: 16,
    marginBottom: 32,
    color: Branding.Colors.black[100],
    fontSize: 16
  },
  noImage: {
    width: 752,
    height: 312,
    backgroundColor: Branding.Colors.black[16],
    borderRadius: 4,
    position: 'relative'
    ///border: "1px solid " + Branding.Colors.black[16],
  },
  absolutePosition: {
    position: 'absolute'
  },
  relativePosition: {
    position: 'relative'
  },
  logoUpload: {
    marginLeft: 104,
    marginTop: 10
  },
  placeUpload: {
    marginLeft: 544,
    marginTop: -30
  },
  addModeplaceUpload: {
    marginLeft: 715,
    marginTop: -30
  },
  deleteBtn: {
    backgroundColor: Branding.Colors.danger.normal,
    width: 136,
    height: 40,
    color: 'white',
    '&:hover': {
      backgroundColor: Branding.Colors.danger.normal
    }
  },
  cancelBtn: {
    color: Branding.Colors.black[86],
    width: 136,
    height: 40,
    marginTop: 16
  },
  customModalContainer: {
    height: 822,
    width: 798,
    boxShadow: '0px 1px 2px #0000003D',
    borderRadius: 4
  },
  buttomContainer: {
    gap: 16,
    width: '100%'
  },
  btnContainer: {
    display: 'flex',
    gap: 16,
    marginBottom: 16
  },
  updateBtn: {
    width: '50%',
    height: 40,
    borderRadius: 8,
    border: '1px solid' + Branding.Colors.black[86],
    color: Branding.Colors.black[86]
  },
  cancelBtn2: {
    width: '50%',
    height: 40,
    borderRadius: 8,
    border: '1px solid' + Branding.Colors.black[86],
    color: Branding.Colors.black[86]
  },
  switchsContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  switchContainer: {
    width: 152,
    height: 32,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid ' + Branding.Colors.black[16],
    borderRadius: 8
  },
  switchContainer2: {
    width: 152,
    height: 32,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid ' + Branding.Colors.primary.normal,
    borderRadius: 8
  },
  labelSelect: {
    color: Branding.Colors.black[60],
    fontSize: 12,
    fontFamily: 'Roboto',
    textAlign: 'left'
  },
  setting: {
    color: Branding.Colors.black[60],
    fontSize: 12,
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: '500',
    marginTop: 6,
    marginLeft: 8
  },
  setting2: {
    color: Branding.Colors.primary.normal,
    fontSize: 12,
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: '500',
    marginTop: 6,
    marginLeft: 8
  }
}));
