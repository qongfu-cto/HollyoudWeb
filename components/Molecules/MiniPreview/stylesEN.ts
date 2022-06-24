import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";
import {convertPixelsToRems} from "utilities/theme";

export const useMiniPreviewStyles = makeStyles({
    container: {
        display: "flex",
        columnGap: convertPixelsToRems(8),

    },
    propertyImage: {
        width: convertPixelsToRems(80),
        height: convertPixelsToRems(48),
        // border: "1px solid #FAFAFA",
        // borderRadius: convertPixelsToRems(4),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    placeImage: {
        width: convertPixelsToRems(48),
        height: convertPixelsToRems(48),
        //   border: "1px solid #FAFAFA",
        borderRadius: "50%",
        clipPath: "circle(50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    ratingContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: convertPixelsToRems(8),
    },
    title: {
        "&.MuiTypography-root": {
            color: Branding.Colors.primary.dark,
            fontWeight: 500,
            fontSize: convertPixelsToRems(18),
            lineHeight: convertPixelsToRems(20),
            letterSpacing: 0,
            fontFamily: "Outfit",
        },
    },
    location: {
        "&.MuiTypography-root": {
            color: Branding.Colors.primary.normal,
            fontWeight: 400,
            fontSize: convertPixelsToRems(13),
            letterSpacing: 0,
            fontFamily: "Outfit",
            lineHeight: convertPixelsToRems(13),
            marginTop:5
        },
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }
});
