import { makeStyles } from '@mui/styles';
import { Branding } from 'utilities/branding';
import { mediaQueries } from 'utilities/designSystem';

export const useSearchResultBoxStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24,
    margin: 'auto',

    //  width:"80%",
    //  maxWidth:1024,
    height: '80vh',
    background: Branding.Colors.black[100],
  },
  header: {
    display: 'flex',
    gap: '1rem',
    padding: '0px 24px',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    display: 'flex',
    alignItems: 'flex-end',
    flex: 1,
    columnGap: 14,
    color: Branding.Colors.white
  },
  sorting: {
    display: 'flex',
    // alignItems: "center",
    columnGap: 8,
    marginBottom: 40,
    position: 'relative'
  },
  filtering: {
    display: 'flex',
    // alignItems: "center",
    columnGap: 8,
    marginBottom: 40,
    position: 'relative'
  },

  results: {
    display: 'grid',
    gridTemplateColumns: ' repeat(5, minmax(0px, 1fr)) !important',
    columnGap: 42,
    rowGap: 30,
    '@media(max-width:2267px)': {
      gridTemplateColumns: 'repeat(4, minmax(0px, 1fr)) !important'
    },
    '@media(max-width:1815px)': {
      gridTemplateColumns: 'repeat(3, minmax(0px, 1fr)) !important'
    },
    '@media(max-width:1200px)': {
      gridTemplateColumns: 'repeat(2, minmax(0px, 1fr)) !important'
    },
    '@media(max-width:939px)': {
      gridTemplateColumns: 'repeat(1, minmax(0px, 1fr)) !important'
    },
    paddingLeft: 24,
    paddingRight: 24, //justifyContent: "space-between",
    paddingBottom: 64
    // alignItems: "space-between",
  },
  sortButton: {
    '&.MuiButton-root': {
      borderRadius: 12,
      fontSize: 14,
      lineHeight: '19px',
      letterSpacing: '0.15px',
      color: Branding.Colors.black[86],
      textTransform: 'none',
      borderColor: Branding.Colors.black[16]
    },
    '&.MuiButton-root:hover': {
      borderColor: 'inherit'
    }
  },
  sortDropDown: {
    borderRadius: 12,
    fontSize: 14,
    lineHeight: '19px',
    letterSpacing: '0.15px',
    color: Branding.Colors.black[86],
    textTransform: 'none',
    border: `1px solid ${Branding.Colors.black[16]}`,
    position: 'absolute',
    width: 200,
    padding: 12,
    backgroundColor: 'white',
    zIndex: 1,
    right: 24,
    cursor: "pointer"
  },

  sortTitle: {
    position: 'absolute',
    right: 230,
    top: 10,
    whiteSpace: 'nowrap'
  },

  error: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterButton: {
    '&.MuiButton-root': {
      borderRadius: 224,
      fontSize: 14,
      lineHeight: '19px',
      letterSpacing: '0.15px',
      color: Branding.Colors.primary.normal,
      textTransform: 'none',
      border: '1px solid ' + Branding.Colors.primary.normal,
      marginRight: 310,
      width: 100,
      height: 32
    },
    '&.MuiButton-root:hover': {
      border: '1px solid ' + Branding.Colors.primary.normal
    }
  }
});

export const useMobileSearchResultBoxStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',

    rowGap: 24,
    border: 0,
    [mediaQueries.small]: {
      // width: '100%'
    }
  },
  header: {
    display: 'flex',
    gap: '1rem',
    //alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: 'column',
    color: Branding.Colors.white + ' !important'
  },
  title: {
    padding: '20px 20px 0px',
    color: Branding.Colors.white + ' !important'
  },
  sorting: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 8,
    color: Branding.Colors.white + ' !important'
  },
  results: {
    display: 'grid',
    gridTemplateColumns: ' repeat(3, minmax(0px, 1fr)) !important',
    columnGap: 42,
    rowGap: 30,
    '@media(max-width:1200px)': {
      gridTemplateColumns: 'repeat(2, minmax(0px, 1fr)) !important'
    },
    '@media(max-width:850px)': {
      gridTemplateColumns: 'repeat(1, minmax(0px, 1fr)) !important'
    },
    [mediaQueries.small]: {
      rowGap: 20
    },
    color: Branding.Colors.white + ' !important'
  },
  sortButton: {
    '&.MuiButton-root': {
      borderRadius: 12,
      fontSize: 14,
      lineHeight: '19px',
      letterSpacing: '0.15px',
      color: Branding.Colors.black[86],
      textTransform: 'none',
      borderColor: Branding.Colors.black[16]
    },
    '&.MuiButton-root:hover': {
      borderColor: 'inherit'
    }
  },
  error: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
