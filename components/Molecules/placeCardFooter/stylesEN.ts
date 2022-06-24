import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const usePlaceCardFooterStylesEN = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",

    },
    title: {
        "&.MuiTypography-root": {
            color: Branding.Colors.black[86],
            fontSize: 14
        },


    },
    location: {
        "&.MuiTypography-root": {

            fontSize: 14
        },
    }
});
