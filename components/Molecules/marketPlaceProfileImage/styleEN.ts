import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const useMarketPlaceProfileImagesStyles = makeStyles({
    container: {
        display: "flex",
        gap: "1rem",
    },
    start: {
        height: 275,
        flex: 1,
        position: "relative",

    },
    end: {
        display: "grid",
        //  gridTemplateColumns: "1fr 1fr",
        gap: "0.2rem",
        flex: 1,
    },
    imageBox: {
        height: 135,
      //  cursor:"pointer"

    },
    imageShare: {
        borderRadius: 8,
        border: `solid 1px ${Branding.Colors.black[16]}`,
        backgroundColor: "rgba(0,0,0,0.08)",

    },

    img: {
        borderRadius: 4,
        width: "100%",
        height: "100%",
        objectFit: "cover",

    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    avatarContainer: {
        width: 88,
        height: 88,
        borderRadius: 50,
        position: "absolute",
        //  border: "1px solid #FAFAFA",
        top: 16,
        left: 16
    }
})

