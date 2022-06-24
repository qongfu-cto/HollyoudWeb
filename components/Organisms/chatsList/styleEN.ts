import {makeStyles} from "@mui/styles";
import {Theme, ThemeOptions} from "@mui/material";
import {Branding} from "../../../utilities/branding";

export const useChatsListStylesEN = makeStyles<Theme, { height: number | undefined }>((theme: ThemeOptions) => ({
    container: {
        flexDirection: "column",
        borderTop: `1px solid ${Branding.Colors.black[16]}`,
        height: ({height}) => height ?? '100%',
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        width: '100%',
        alignItems: "center",
        backgroundColor: 'white',
    }
}));
