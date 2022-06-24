import { makeStyles } from '@mui/styles';
import { SxProps } from '@mui/system';
import { Branding } from 'utilities/branding';

const footerButtonCommonStyles: SxProps = {
  fontWeight: 'medium',
  fontSize: 16,
  lineHeight: '20px',
  letterSpacing: '0.15px',
  color: Branding.Colors.white,
  textTransform: 'none',
  padding: '14px 18px',
  borderRadius: 14,
  fontFamily: 'Outfit'
};

export const useFilterDialogStyles = makeStyles({
  modal: {
    '&.MuiModal-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 'none',
      position: 'fixed',
      overflow: 'hidden',
    },
  },
  container: {
    width: 720,
    maxHeight: 568,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Branding.Colors.white,
    borderRadius: 18,
    overflow: 'hidden'
  },
  header: {
    height: 80,
     position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `solid 1px ${Branding.Colors.black[16]}`,
    color: Branding.Colors.grey,
    // overflow: 'auto',
    // overscrollBehavior: 'none',
    // position: 'fixed',
    // overflow: 'hidden',
  },
  close: {
    '&.MuiButton-root': {
      // color: Branding.Colors.primary.normal,
      // fontSize: 18,
      // textAlign: 'left',
      // fontFamily: 'Outfit',
      // fontWight: '600',
      // marginTop: -8,
      // marginBottom: 16,
      // textTransform: 'none'
      position: 'absolute',
      left: 30,
      color: 'inherit'
    }
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Outfit',
    color: Branding.Colors.grey
  },

  footer: {
    // height: 88,
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'row',
    // gap: '0.5rem',
    // padding: '16px 24px 24px',
    // borderTop: `solid 1px ${Branding.Colors.black[16]}`,
    // marginLeft: 200
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    margin: '16px 24px 16px 24px',
    borderTop: `solid 1px ${Branding.Colors.black[16]}`,
  },
  applyButton: {
    '&.MuiButton-root': {
      width: 152,
      height: 48,
      textTransform: 'none',
      color: Branding.Colors.white,
      fontSize: 16,
      fontFamily: 'Outfit',
      letterSpacing: '0.15px',
      borderRadius: 14,
      fontWeight: 'medium',
      backgroundColor: Branding.Colors.primary.normal
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.primary.normal
    }
  },
  clearButton: {
    '&.MuiButton-root': {
      width: 152,
      height: 48,
      textTransform: 'none',
      backgroundColor: Branding.Colors.black[60],
      color: Branding.Colors.white,
      fontSize: 16,
      fontFamily: 'Outfit',
      letterSpacing: '0.15px',
      borderRadius: 14,
      fontWeight: 'medium'
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.black[60]
    }
  },
  content: {
    maxHeight: 300,
    overflowY: 'scroll',
    overflowX: 'hidden',
    flex: 1,
    padding: '0 32px',
    // position: 'sticky'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: `solid 1px ${Branding.Colors.black[16]}`,
    justifyContent: 'space-between',
    gap: '0.5rem',
    padding: '16px 24px 24px'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '0.5rem',
    padding: '16px 24px 24px'
  },
  selectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 464,
    height: 'auto',
    backgroundColor: Branding.Colors.offWhite,
    border: '1px solid ' + Branding.Colors.black[36],
    borderRadius: 12,
    padding: 8
  },
  selection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    listStyle: 'none',
    width: 368
  },
  selectionButton: {
    '&.MuiButton-root': {
      width: 88,
      height: 32,
      borderRadius: 4,
      color: Branding.Colors.white,
      fontSize: 13,
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontWight: '600',
      backgroundColor: Branding.Colors.primary.normal
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.primary.normal
    }
  },
  searchField: {
    marginTop: -34,
    width: 336,
    height: 12
  },
  searchFieldStyle: {
    borderRadius: 4,
    marginTop: 24,
    marginBottom: 16,
    width: 336,
    height: 40,
    backgroundColor: Branding.Colors.offWhite,
    border: '1px solid ' + Branding.Colors.black[16]
  },
  formControlLabel: {
    width: 544,
    color: Branding.Colors.black[86],
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Outfit',
    fontWight: '600'
    // marginLeft: -30,
    // borderBottom: `solid 1px ${Branding.Colors.black[16]}`
  },
  subList: {
    width: 544,
    color: Branding.Colors.black[60],
    textAlign: 'left',
    fontFamily: 'Outfit',
    fontSize: 16
    // borderBottom: `solid 1px ${Branding.Colors.black[16]}`,
  }
});
