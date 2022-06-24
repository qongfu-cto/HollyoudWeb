import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";
import {Theme, ThemeOptions} from "@mui/material";

export const useChatHeaderStylesEN = makeStyles<Theme, { color: string }>((theme: ThemeOptions) => ({
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        top: 0,
        height: 56,
        backgroundColor: ({color}) => color ?? Branding.Colors.primary.normal
    },
    closeIcon: {
        position: "absolute",
        top: 12,
        left: 10,
        width: 32,
        height: 32
    },
}));
