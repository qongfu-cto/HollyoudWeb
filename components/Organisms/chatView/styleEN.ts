import {makeStyles} from "@mui/styles";
import {Theme, ThemeOptions} from "@mui/material";
import {Branding} from "../../../utilities/branding";

export const useChatViewStylesEN = makeStyles<Theme, { height: number | undefined, expandedChat: boolean }>((theme: ThemeOptions) => ({
    container: {
        flexDirection: "column",
        position: 'relative',
        borderTop: ({expandedChat}) => expandedChat ? 'none' : `1px solid ${Branding.Colors.black[16]}`,
        height: ({height}) => height ?? '100%',
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        width: '100%',
        alignItems: "center",
        backgroundColor: ({expandedChat}) => expandedChat ? Branding.Colors.black["4"] : Branding.Colors.white
    }
}));
