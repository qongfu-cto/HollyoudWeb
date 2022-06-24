import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const usePropertyCardStyles = makeStyles({
    card: {
        "&.MuiCard-root": {
        display: "grid",
        gridTemplateColumns: "100%",
        height: 300,
        borderRadius: 12,
        minWidth: 320,
        }
    },
    image: {
        borderRadius: 12,
    },
    content: {
        position: "relative",
        top: -24,
        backgroundColor: Branding.Colors.white,
        borderRadius: 12,
        height: 60,
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
        "&.MuiCardContent-root": {
            padding: "10px 16px",
        },
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:5
    },
    stats: {display: "flex", columnGap: 9, alignItems: "center"},
    reviews: {
        color: Branding.Colors.black[60],
        fontSize: 12,
        lineHeight: "14px",
        fontFamily: "Roboto",
        letterSpacing: 0,
    },
    price: {
        color: Branding.Colors.primary.normal,
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "18px",
        letterSpacing: 0,
    },
    title: {
        color: Branding.Colors.primary.dark,
        textAlign: "left",
        fontWeight: 500,
        fontSize: 18,
        lineHeight: "23px",
        letterSpacing: 0,
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        padding: "2px 0",
        color: Branding.Colors.primary.normal,
        fontSize: 14,
        lineHeight: "19px",
        fontFamily: "Roboto",
        letterSpacing: 0,
    },
    rating: {
        color: "#DD8C00",
        "&.MuiRating-root": {
            color: "#DD8C00",
        },
        "&.MuiRating-icon": {
            color: "#DD8C00",
        },
        "&.MuiRating-iconFilled": {
            color: "#DD8C00",
        },
        "&.MuiRating-iconHover": {
            color: "#DD8C00",
        },
        "&.MuiRating-iconEmpty": {
            color: "#DD8C00",
        },
    },
});


export const useMobileDummyCardStyle=makeStyles({
    cardWrapper: {
        display: 'flex',
        flexDirection: "column",
    
        // width: '100%',
        padding: '0px 20px 20px',
        maxHeight: 400,
        // position: 'relative',
        borderBottom: `solid 1px ${Branding.Colors.black[16]}`,
  marginTop:15
    
        
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
    contentFooter: {
        // paddingLeft: 10,
         position: 'relative',
         alignItems: "center",
         display: 'flex',
         flexDirection:"row",
         //justifyContent:"space-between",
         width: '100%'
     },
     divider:{
        color:Branding.Colors.black[16],
        margin:` 0px 5px 3px 10px`
    }
})