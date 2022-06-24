import {Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const useChatSearchBoxStylesEN = makeStyles<Theme, { height: string | number | undefined }>(() => ({
    btn: {
        marginRight: 20,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        height: 40,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    input: {
        textAlign: "left",
        backgroundColor: Branding.Colors.blue.variant_2,
        padding: '6px 6px',
        font: 'normal normal 300 16px/25px Poppins',
        color: Branding.Colors.black["60"],
        height: ({height}) => height ?? "auto",
    }
}));
