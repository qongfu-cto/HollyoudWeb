import { makeStyles } from '@mui/styles';
import { SxProps } from '@mui/system';
import { Branding } from '../../../utilities/branding';

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
  // marginTop: 16,
};

const selectionContainerCommonStyles: any = {
  display: 'flex',
  flexDirection: 'row',
  width: 464,
  backgroundColor: Branding.Colors.white,
  border: '1px solid ' + Branding.Colors.black[36],
  borderRadius: 12,
  padding: '8px 8px 8px 16px'
};

export const Styles = makeStyles({
  btns: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  center: {
    textAlign: 'center'
  },
  paper: {
    width: '496px',
    height: '296px',
    backgroundColor: Branding.Colors.black[16]
  },
  title: {
    color: Branding.Colors.primary.normal,
    fontFamily: 'Roboto',
    fontSize: 32,
    textAlign: 'center'
  },
  content: {
    // height: 80,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10
  },

  modal: {
    '&.MuiModal-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 'none'
    }
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
    color: Branding.Colors.grey
  },
  closeIcon: {
    '&.MuiIconButton-root': {
      position: 'absolute',
      right: 30,
      color: 'inherit'
    }
  },
  footer: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    // margin: '47px 24px 16px 24px',
    width: 400,
    marginTop: 47,
    marginLeft: 56,
    marginRight: 56,
    marginBottom: 39
  },
  applyButton: {
    '&.MuiButton-root': {
      width: 192,
      height: 48,
      fontWeight: 'medium',
      fontSize: 16,
      lineHeight: '19px',
      color: Branding.Colors.white,
      padding: 15,
      borderRadius: 12,
      fontFamily: 'Roboto',
      backgroundColor: Branding.Colors.danger.normal
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.danger.normal
    }
  },
  clearButton: {
    '&.MuiButton-root': {
      width: 192,
      height: 48,
      fontWeight: 'medium',
      fontSize: 16,
      lineHeight: '19px',
      color: Branding.Colors.black[60],
      padding: 15,
      borderRadius: 12,
      fontFamily: 'Roboto',
      backgroundColor: Branding.Colors.white,
      border: '1px solid ' + Branding.Colors.black[60]
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.white,
      border: '1px solid ' + Branding.Colors.black[60]
    }
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
    ...selectionContainerCommonStyles,
    height: 'auto'
  },
  noSelectionContainer: {
    ...selectionContainerCommonStyles,
    height: 48
  },
  selection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    listStyle: 'none',
    width: 368,
    gap: 8
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
  chip: {}
});
