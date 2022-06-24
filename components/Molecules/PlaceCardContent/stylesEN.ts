import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const usePlaceCardContentStylesEN = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    title: {
        "&.MuiTypography-root": {
            fontWeight: "bold",
            fontSize: 16,
            color: Branding.Colors.primary.dark,

        }


    }
});
