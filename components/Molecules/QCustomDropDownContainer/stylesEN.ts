import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useDropDownStyling = makeStyles(props => ({
  hotspotContentFlowStyling: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start space-between',
    width: '100%'
  },

  parentContainer: {
    borderRadius: `0 0 14px  14px`,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
   // overflowY: 'scroll',
    overflowX: 'hidden',
    margin: 0,
    padding: ' 0 0 1em 0 ',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e5e5',
    borderTop: 0,
    boxSizing: 'border-box',
    color: '#1E5065',
    fontSize: '18px',
    fontWeight: 500,
    width: 440,
    // height: 150,
  zIndex:1,
    boxShadow: '0px 3px 6px #0000003'
  },

  '@global': {
    '::-webkit-scrollbar': {
      width: '0.3em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'red'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#DEDEDE'
      //outline: '1px solid slategrey'
    }
  },

  hotspotHeaderStyles: {
    fontFamily: 'Outfit',
    fontWeight: 500
  },

  containerStyling: {
    cursor: 'pointer',
    width: '49%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  hotspotImageStyling: {
    overflow: 'hidden',
    height: 64,
    width: '35%',
    borderRadius: 12
  },

  textContainerStyling: {
    width: '63%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '2%'
  },

  hotspotLabelStyling: {
    fontSize: 15,
    margin: 0,
    textTransform: 'capitalize'
  },

  hotspotDescriptionStyling: {
    fontSize: 12,
    margin: '4px 0px 0px',
    textTransform: 'capitalize'
  },

  searchItemLabelStyling: {
    fontSize: 16,
    fontVariant: 'normal',
    fontWeight: 'normal',
    fontFamily: 'Outfit',
    color: '#4F4F4F',
    textAlign: 'left',
    letterSpacing: '0.15px'
  },

  searchItemDescriptionStyling: {
    fontSize: 14,
    fontWeight: 300,
    fontFamily: 'Outfit',
    color: '#858585',
    fontVariant: 'normal',
    fontStyle: 'normal'
  }
}));

export const useMobileDropDownStyling = makeStyles<
  Theme,
  { width: number; fullWidth: boolean }
>(() => ({
  hotspotContentFlowStyling: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start space-between',
    width: '100%'
  },

  parentContainer: {
    position: 'absolute',
    padding: '10px 0',
    left: 0,
    right: 0,
    top: 82,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 0,
    background: '#ffffff',
    border: '1px solid #e5e5e5',
    boxSizing: 'border-box',
    color: '#1E5065',
    fontSize: '18px',
    fontWeight: 500,
    width: ({ width, fullWidth }) => (fullWidth ? 'auto' : width),
    height: '100vh',
    zIndex: 999,
    boxShadow: '0px 3px 6px #0000003'
  },
  '@global': {
    '::-webkit-scrollbar': {
      width: '0.3em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'red'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#DEDEDE'
      //outline: '1px solid slategrey'
    }
  },

  hotspotHeaderStyles: {
    fontFamily: 'Outfit',
    fontWeight: 500
  },

  containerStyling: {
    cursor: 'pointer',
    width: '49%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  hotspotImageStyling: {
    overflow: 'hidden',
    height: 64,
    width: '35%',
    borderRadius: 12
  },

  textContainerStyling: {
    width: '63%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '2%'
  },

  hotspotLabelStyling: {
    fontSize: 15,
    margin: 0,
    textTransform: 'capitalize'
  },

  hotspotDescriptionStyling: {
    fontSize: 12,
    margin: '4px 0px 0px',
    textTransform: 'capitalize'
  },

  searchItemLabelStyling: {
    fontSize: 16,
    fontVariant: 'normal',
    fontWeight: 'normal',
    fontFamily: 'Outfit',
    color: '#4F4F4F',
    textAlign: 'left',
    letterSpacing: '0.15px'
  },

  searchItemDescriptionStyling: {
    fontSize: 14,
    fontWeight: 300,
    fontFamily: 'Outfit',
    color: '#858585',
    fontVariant: 'normal',
    fontStyle: 'normal'
  }
}));
