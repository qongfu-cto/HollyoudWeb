import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const usePlaceCardStyles = makeStyles({
    card: {

  
        "&.MuiCard-root": {minWidth: 320, height: 360, borderRadius: "12px"},
    },
    image: {
        borderRadius: 12,
    },
    content: {
        position: "relative",
        top: -24,
        backgroundColor: Branding.Colors.white,
        justifyContent:"space-between",
        borderRadius: 12,
        height: 180,
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
       // justifyContent: "space-between",
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
    divider:{
        color:Branding.Colors.black[16],
        margin:` 0px 5px 3px 10px`
    },
    focus:{

      "&.MuiCardActionArea-focusHighlight":{
        backgroundColor: "transparent",
        
        '&:active': {
            backgroundColor: "transparent"
          },
          '&:focus': {
            backgroundColor: "transparent"
          }
      },
        
    },
    action:{
        "&.Mui-focusVisible":{
            backgroundColor: "transparent",
        }
    }
});
