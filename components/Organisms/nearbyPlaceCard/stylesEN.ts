import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const usePlaceCardStyles = makeStyles({
    card: {
        //padding: 16,


        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
        backgroundColor: Branding.Colors.white,
    },
    container: {
        "&.MuiCardContent-root": {
            margin: 0,
            padding: 0,
        },
    },
    image: {
        borderRadius: `5px 5px 0 0`,
       
        height: 88,
        "&.MuiCardMedia-root":{
            width: 120,

        }
    },
    cardStyle: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",

        width: "100%",
    },

});
