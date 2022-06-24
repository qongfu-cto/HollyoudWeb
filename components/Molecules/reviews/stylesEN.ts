import {makeStyles} from "@mui/styles";
import {convertPixelsToRems} from "utilities/theme";

export const useReviewStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        rowGap: convertPixelsToRems(27),
    },
    username: {
        "&.MuiTypography-root": {
            fontWeight: 500,
            fontSize: convertPixelsToRems(18),
            lineHeight: convertPixelsToRems(24),
            fontFamily: "Roboto",
            letterSpacing: 0,
            color: "#474747",
        },
    },
    datetime: {
        "&.MuiTypography-root": {
            fontWeight: 400,
            fontSize: convertPixelsToRems(14),
            lineHeight: convertPixelsToRems(22),
            fontFamily: "Roboto",
            letterSpacing: 0,
            color: "#ABABAB",
        },
    },
    reviewsGrid: {
        "&.MuiGrid-root": {
            rowGap: convertPixelsToRems(36),
        },
    },
    reviewContainer: {
        display: "flex",
        flexDirection: "column",
        rowGap: convertPixelsToRems(12),
        margin:`10px 0`
    },
    reviewHeader: {
        display: "flex",
        alignItems: "center",
        columnGap: convertPixelsToRems(10),
        
    },
    reviewText: {
        "&.MuiTypography-root": {
            fontWeight: 400,
            fontSize: convertPixelsToRems(14),
            lineHeight: convertPixelsToRems(24),
            fontFamily: "Roboto",
            letterSpacing: 0,
            color: "#ABABAB",
            margin:`0 10px`
        },
    },
    avatar: {
        height: 69,
        width: 69,
        border: "solid 2px #CACACA",
        borderRadius: "50%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    avatarDetails: {
        display: "flex",
        flexDirection: "column",
        rowGap: convertPixelsToRems(4),
    },
});
