import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";
import {convertPixelsToRems} from "utilities/theme";

export const useMarketplaceProfileHeadInfoStyles = makeStyles({

    containerStart: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.5rem",
    },
    profileDescription: {
        display: "flex",
        flexDirection: "column",
        rowGap: convertPixelsToRems(10),
    },
    title: {
        "&.MuiTypography-root": {
            color: Branding.Colors.primary.dark,
            fontWeight: 500,
            fontSize: convertPixelsToRems(32),
            letterSpacing: 0,
            fontFamily: "Outfit",
        },
    },

});

export const useMobileMarketplaceProfileHeadInfoStyles = makeStyles({

    containerStart: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `10px 20px 0 20px`,

        // gap: "0.5rem",
    },
    profileDescription: {

        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        padding: `0 20px`,
      
    },
    title: {
        "&.MuiTypography-root": {
            color: Branding.Colors.primary.dark,
            fontWeight: 500,

            letterSpacing: 0,
            fontFamily: "Outfit",
        },
    },

    ratingContainer: {
        display: "flex",
        flexDirection: "row"
    }
});
