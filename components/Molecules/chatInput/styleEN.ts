import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const useChatInputStylesEN = makeStyles({
    container: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "inherit",
        height: 56,
        padding: '10px 10px',
        backgroundColor: Branding.Colors.white,
        borderTop: `1px solid ${Branding.Colors.black["6"]}`
    },
    leftIcon: {
        position: 'absolute',
        left: 0,
        width: 50,
        height: 50
    },
    rightIcon: {
        position: 'absolute',
        right: 0,
        width: 50,
        height: 50
    },
    input: {
        width: '100%',
        textAlign: "left",
        padding: '6px 6px',
        border: 'none',
        font: 'normal 300 normal 15px/18px Roboto',
        color: Branding.Colors.black["36"]
    }
});
