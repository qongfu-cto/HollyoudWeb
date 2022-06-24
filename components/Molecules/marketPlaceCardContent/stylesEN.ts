import {makeStyles} from "@mui/styles";


export const useMarketPlaceCardContentStylesEN = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",


    },
    price: {
        "&.MuiTypography-root": {
            fontSize: 14,
            fontWeight: "bold"

        },
        textTransform: "none",

        whiteSpace: "nowrap"


    }
});
