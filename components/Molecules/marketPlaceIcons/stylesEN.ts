import { Theme } from "@mui/material";
import {makeStyles} from "@mui/styles";

export const useMarketPlaceIconsStylesEN =  makeStyles<Theme, {fontsize?: number,margin?:number | string }>({
    container: {

        display: "flex",
        flexDirection: "row",
margin:({margin})=> margin?? 0
    },
    sideContainer: {
        display: "inherit",
        marginLeft: 5
    },
    price: {
        fontSize: 14,

    },
    label: {
        "&.MuiTypography-root": {
            fontSize:({fontsize})=> fontsize?? 14,
           // color: "black",
            textAlign: "center"
        },

    },
    house: {
        "&.MuiTypography-root": {
            fontSize: 13,

            textAlign: "center"
        },


    }
});
