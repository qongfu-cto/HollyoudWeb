import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';

export const useSelectLanguageStyles = makeStyles({
  section: {
    width: 648,
    height: 122,
    border: `1px solid ${Branding.Colors.black[16]}`,
    borderRadius: 12,
    margin: ` 5px 10px`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  search: {
    width: 328,
    height: 48,
    border: `1px solid ${Branding.Colors.black[16]}`,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10
  },
  tag: {
    // width:128,
    // height:40,
    // backgroundColor: Branding.Colors.blue.variant_4,
    // borderRadius:4,
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButton: {
    '&.MuiButton-root': {
      width: 136,
      borderRadius: 12,
      // borderColor: Branding.Colors.black[16],
      marginLeft: 16,
      height: 40,
      marginTop: 10,
      color: Branding.Colors.white,
      backgroundColor: Branding.Colors.primary.normal,
      fontWight: '500',
      fontSize: 14,
      textAlign: 'center',
      fontFamily: 'Roboto'
      //       top: 708px;
      // left: 904px;
      // width: 136px;
      // height: 40px;
      // border: 1px solid var(---b5b5b5);
      // border: 1px solid #B5B5B5;
      // border-radius: 12px;
      // opacity: 1;
      //   width: 88,
      //   height: 32,
      //   borderRadius: 4,
      //   color: Branding.Colors.white,

      //
      //   backgroundColor: Branding.Colors.primary.normal
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.primary.normal
    }
  },
  disabledAddButton: {
    '&.Mui-disabled': {
      width: 136,
      borderRadius: 12,
      marginLeft: 16,
      height: 40,
      marginTop: 10,
      color: Branding.Colors.white,
      fontWight: '500',
      fontSize: 14,
      textAlign: 'center',
      fontFamily: 'Roboto'
    }
  }
});
