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

export const useFilterDialogStyles = makeStyles({
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
    borderBottom: `solid 1px ${Branding.Colors.black[16]}`,
    color: Branding.Colors.grey
  },
  closeIcon: {
    '&.MuiIconButton-root': {
      position: 'absolute',
      right: 30,
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
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    margin: '16px 24px 16px 24px',
    borderTop: `solid 1px ${Branding.Colors.black[16]}`
  },
  applyButton: {
    '&.MuiButton-root': {
      ...footerButtonCommonStyles,
      backgroundColor: Branding.Colors.primary.normal
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.primary.normal
    }
  },
  clearButton: {
    '&.MuiButton-root': {
      ...footerButtonCommonStyles,
      backgroundColor: Branding.Colors.black[60]
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.black[60]
    }
  },
  content: {
    maxHeight: 400,
    overflowY: 'scroll',
    overflowX: 'hidden',
    flex: 1,
    padding: '0 32px'
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
