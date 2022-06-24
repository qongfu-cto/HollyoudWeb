import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const Styles = makeStyles((props) => ({
    btn: {
        "&.MuiButton-root": {
            backgroundColor: Branding.Colors.primary.normal,
            borderRadius: 12,

            height: 40,
            marginLeft: 15
        }

    },
    cancelBtn: {
        "&.MuiButton-root": {
            borderRadius: 12,
            width: 200,
            height: 40
        }

    },
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        //  flexDirection:"row",

        margin: `20px auto`
    }
}));
