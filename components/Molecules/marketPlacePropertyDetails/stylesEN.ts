import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";
import {convertPixelsToRems} from "utilities/theme";

export const usePropertyDetailStyles = makeStyles({
    propertyDetailsGrid: {
        "&.MuiGrid-root": {
            marginTop: convertPixelsToRems(30),
            rowGap: convertPixelsToRems(25),
        },
    },
    propertyDetailItem: {
        flex: 1,
        display: "flex",
       // flexDirection:"column",
        alignItems: "center",
        gap: convertPixelsToRems(10),
    },
    propertyDetailItemLabelBox: {
        flex: 1,
        display: "flex",
        //flexDirection:"column",
        alignItems: "center",
        gap: convertPixelsToRems(10),
    },
    propertyDetailItemValueBox: {
        flex: 4,
        display: "flex",
        width:"100%",
        //flexDirection:"column",
        alignItems: "center",
        gap: convertPixelsToRems(10),
    },
    propertyDetailLabel: {
        "&.MuiTypography-root": {
            color: Branding.Colors.black[60],
            fontSize: convertPixelsToRems(14),
            lineHeight: convertPixelsToRems(18),
            letterSpacing: 0,
        },
    },
    propertyDetailValue: {
        
        "&.MuiTypography-root": {
            color: Branding.Colors.black[86],
            fontWeight: 500,
            fontSize: convertPixelsToRems(14),
            lineHeight: convertPixelsToRems(18),
            letterSpacing: 0,
           
        },
    },
});

export const useMobilePropertyDetailStyles = makeStyles({
    propertyDetailsGrid: {
        "&.MuiGrid-root": {
            marginTop: convertPixelsToRems(30),
            rowGap: convertPixelsToRems(25),
        },
    },
    propertyDetailItem: {
        flex: 1,
        display: "flex",
       // flexDirection:"column",
        alignItems: "center",
        gap: convertPixelsToRems(10),
      
    },
    propertyDetailItemLabelBox: {
        flex: 1,
        display: "flex",
        //flexDirection:"column",
        alignItems: "center",
        gap: convertPixelsToRems(10),
    },
    propertyDetailItemValueBox: {
        flex: 3,
        display: "flex",
        //flexDirection:"column",
        alignItems: "center",
        gap: convertPixelsToRems(10),
    },
    propertyDetailLabel: {
        "&.MuiTypography-root": {
            color: Branding.Colors.black[60],
            fontSize: convertPixelsToRems(14),
            lineHeight: convertPixelsToRems(18),
            letterSpacing: 0,
        },
    },
    propertyDetailValue: {
        "&.MuiTypography-root": {
            color: Branding.Colors.black[86],
            fontWeight: 500,
            fontSize: convertPixelsToRems(14),
            lineHeight: convertPixelsToRems(18),
            letterSpacing: 0,
     
            
        },
    },
});
