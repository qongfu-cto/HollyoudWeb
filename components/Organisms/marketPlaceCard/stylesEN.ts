import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";


export const useMarketPlaceCardStylesEN = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-evenly",

        flexDirection: "column",
        borderRadius: 12,
        backgroundColor: "white",
        width: "100%",
        position: "relative",
        bottom: 10,

    },
    title: {
        "&.MuiTypography-root": {
            fontWeight: "bold",
            color: Branding.Colors.primary.dark,
            fontSize: 18,
            overflow: "hidden",
            textOverflow: " ellipsis",
            whiteSpace: "nowrap",
            width: "80%"

        }

    },
    placesFooterContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
				marginLeft: -6
    },
    card: {

        "&.MuiCard-root": {
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "100%",
            height: 300,
            borderRadius: 12,
            minWidth: 320
            // "@media(max-width:1280px)":{
            //   width:400
            // }
        }
    },
    icon:{
        margin:0
    }
});

export const useMobileMarketPlaceCardStylesEN = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        borderRadius: 12,
        backgroundColor: "white",
        width: "100%",
        position: "relative",
        bottom: 10,
       
    },
    title: {
        "&.MuiTypography-root": {
            fontWeight: 400,
            color: Branding.Colors.primary.dark,
            fontSize: 18,
            overflow: "hidden",
            textOverflow: " ellipsis",
            whiteSpace: "nowrap",
            width: "80%"
        }
    },
    placesFooterContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    card: {
        "&.MuiCard-root": {
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "100%",
            height: 300,
        }
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: "column",
    
        // width: '100%',
        padding: '0px 20px 20px',
        maxHeight: 400,
        // position: 'relative',
        borderBottom: `solid 1px ${Branding.Colors.black[16]}`,
  
    
        
    },
    cardContent: {
        display: 'flex',
        //height: '100%',
      
        width: '100%',
        flexDirection: 'column'
    },
    contentHeader: {
        display: 'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        padding: `0 10px`,
        marginTop:10,
       // alignItems: "center",
        width: '100%',
        
    },
    contentTitle: {
        display: 'flex',
        overflow: 'scroll',
        marginLeft: 10,
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        width: '100%'
    },
    contentFooter: {
       // paddingLeft: 10,
        position: 'relative',
        alignItems: "center",
        display: 'flex',
        flexDirection:"row",
        //justifyContent:"space-between",
        width: '100%'
    },
    titleIcon: {
        width: 40,
        marginLeft: -8,
        padding: 0,
    },
    homeIcon: {
        padding: 0
    },
    timing:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        margin: "3px 0"
    },
    divider:{
        color:Branding.Colors.black[16],
        margin:` 0px 5px 3px 10px`
    }
});
