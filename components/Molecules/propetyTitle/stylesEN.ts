import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";
import {convertPixelsToRems} from "utilities/theme";

export const usePropertyTitleStyles = makeStyles({

    item: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: convertPixelsToRems(10),
    },
    title: {
        "&.MuiTypography-root": {
            color: Branding.Colors.black[60],
            fontSize: convertPixelsToRems(14),
            lineHeight: convertPixelsToRems(18),
            letterSpacing: 0,
            fontFamily: "Roboto",
        },
    },
    smallColorBox: {
        height: 15,
        width: 15,
        backgroundColor: "#FFD6D6",
    },
});
