import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';
import { convertPixelsToRems } from 'utilities/theme';

export const useProfileDetailsEndStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: "40%"
  },
  card: {
    '&.MuiCard-root': {
      boxShadow: '0 1px 4px 0 #00000029',
      borderRadius: convertPixelsToRems(12),
  
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: convertPixelsToRems(16),
    marginBottom: convertPixelsToRems(33)
  },
  title: {
    '&.MuiTypography-root': {
      color: Branding.Colors.primary.normal,
      fontWeight: 700,
      fontSize: convertPixelsToRems(32),
      fontFamily: 'Outfit'
    }
  },
  headerIcons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  propertyDetails: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: convertPixelsToRems(8),
    borderBottom: `1px solid ${Branding.Colors.black[16]}`,
    marginBottom: convertPixelsToRems(16),
    paddingBottom: convertPixelsToRems(32)
  },
  propertyDetailHeader: {
    '&.MuiTypography-root': {
      fontSize: convertPixelsToRems(28),
      fontWeight: 500,
      fontFamily: 'Outfit',
      color: Branding.Colors.black[86],
      letterSpacing: 0
    }
  },
  propertyDetailPrice: {
    '&.MuiTypography-root': {
      fontSize: convertPixelsToRems(32),
      fontWeight: 600,
      fontFamily: 'Outfit',
      color: Branding.Colors.primary.normal,
      letterSpacing: 0
    }
  },
  propertyDetailPriceAdditional: {
    '&.MuiTypography-root': {
      color: Branding.Colors.black[86],
      fontSize: convertPixelsToRems(14),
      fontFamily: 'Outfit'
    }
  },
  propertyMoreDetailButton: {
    '&.MuiButton-root': {
      color: Branding.Colors.white,
      boxShadow: 'none',
      backgroundColor: Branding.Colors.primary.normal,
      borderRadius: 12,
      width: 'fit-content',
      textTransform: 'none',
      padding: `${convertPixelsToRems(6)} ${convertPixelsToRems(16)}`,
      fontWeight: 500,
      fontFamily: 'Poppins',
      letterSpacing: 0,
      fontSize: convertPixelsToRems(14),
      lineHeight: convertPixelsToRems(20)
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.primary.normal
    }
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: convertPixelsToRems(8)
  },
  locationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  locationTitle: {
    '&.MuiTypography-root': {
      color: Branding.Colors.primary.dark,
      fontWeight: 500,
      fontSize: convertPixelsToRems(18),
      lineHeight: convertPixelsToRems(18),
      fontFamily: 'Outfit'
    }
  },
  locationMap: {
    border: `1px solid ${Branding.Colors.black[16]}`,
    borderRadius: convertPixelsToRems(4),
    height: 184
  },
  locationAddress: {
    '&.MuiTypography-root': {
      color: Branding.Colors.black[86],
      fontSize: convertPixelsToRems(14),
      lineHeight: convertPixelsToRems(24),
      fontFamily: 'Roboto',
      paddingTop: convertPixelsToRems(8)
    }
  },

  scroll: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: convertPixelsToRems(18),
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    height: 520,
  },
  mapContainer :{
    display: 'flex',
  
    //justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export const useMobileProfileDetailsEndStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 20
  },
  card: {
    '&.MuiCard-root': {
      boxShadow: '0px 1px 2px #00000029',
      borderRadius: convertPixelsToRems(12)
    }
  },
  header: {
    marginBottom: convertPixelsToRems(10)
  },
  title: {
    '&.MuiTypography-root': {
      color: Branding.Colors.primary.normal,
      fontWeight: 700,
      fontSize: convertPixelsToRems(24),
      fontFamily: 'Outfit'
    }
  },
  headerIcons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  propertyDetails: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: convertPixelsToRems(8),
    borderBottom: `1px solid ${Branding.Colors.black[16]}`,
    marginBottom: convertPixelsToRems(16),
    paddingBottom: convertPixelsToRems(32)
  },
  propertyDetailHeader: {
    '&.MuiTypography-root': {
      fontSize: convertPixelsToRems(28),
      fontWeight: 500,
      fontFamily: 'Outfit',
      color: Branding.Colors.black[86],
      letterSpacing: 0
    }
  },
  propertyDetailPrice: {
    '&.MuiTypography-root': {
      fontSize: convertPixelsToRems(32),
      fontWeight: 600,
      fontFamily: 'Outfit',
      color: Branding.Colors.primary.normal,
      letterSpacing: 0
    }
  },
  propertyDetailPriceAdditional: {
    '&.MuiTypography-root': {
      color: Branding.Colors.black[86],
      fontSize: convertPixelsToRems(14),
      fontFamily: 'Outfit'
    }
  },
  propertyMoreDetailButton: {
    '&.MuiButton-root': {
      color: Branding.Colors.white,
      boxShadow: 'none',
      backgroundColor: Branding.Colors.primary.normal,
      borderRadius: 12,
      width: 'fit-content',
      textTransform: 'none',
      padding: `${convertPixelsToRems(6)} ${convertPixelsToRems(16)}`,
      fontWeight: 500,
      fontFamily: 'Poppins',
      letterSpacing: 0,
      fontSize: convertPixelsToRems(14),
      lineHeight: convertPixelsToRems(20)
    },
    '&.MuiButton-root:hover': {
      backgroundColor: Branding.Colors.primary.normal
    }
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: convertPixelsToRems(8)
  },
  locationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  locationTitle: {
    '&.MuiTypography-root': {
      color: Branding.Colors.primary.dark,
      fontWeight: 500,
      fontSize: convertPixelsToRems(18),
      lineHeight: convertPixelsToRems(18),
      fontFamily: 'Outfit'
    }
  },
  locationMap: {
    border: `1px solid ${Branding.Colors.black[16]}`,
    borderRadius: convertPixelsToRems(4),
    height: 184,
    marginTop: 10
  },
  locationAddress: {
    '&.MuiTypography-root': {
      color: Branding.Colors.black[86],
      fontSize: convertPixelsToRems(14),
      lineHeight: convertPixelsToRems(24),
      fontFamily: 'Roboto',
      paddingTop: convertPixelsToRems(8),
      border: 0,
      height: 40
    }
  },
  circle: {
    width: 132,
    height: 132,
    backgroundColor: "#FF00001F",
    border: "3px solid #FF000099",
    borderRadius: 100,
   // marginTop: 20,
   // marginLeft: 168,
    zIndex: 1,
    position: "absolute",
    right:100,
    top:20
  },
  midCircle: {
    width: 13,
    height: 13,
    backgroundColor: "#FF000099",
    borderRadius: 100,
    margin: 56,
    
  },
});
