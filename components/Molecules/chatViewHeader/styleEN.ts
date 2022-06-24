import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";
import {Theme, ThemeOptions} from "@mui/material";

export const useChatViewHeaderStylesEN = makeStyles<Theme, { expandedChat: boolean }>((theme: ThemeOptions) => ({
    chatTitleWrapper: {
        display: 'flex',
        left: 0,
        marginLeft: ({expandedChat}) => expandedChat ? 15 : 0,
        width: '100%'
    },
    chatTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '70%',
        height: '100%',
        paddingLeft: 10
    },
    backIcon: {
        width: 40,
        height: '100%'
    },
    chatIcon: {
        position: 'absolute',
        right: 0,
        width: 56,
        height: 56
    },
    chatHeader: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        width: '100%',
        padding: '16px 16px 16px 0px',
        backgroundColor: ({expandedChat}) => expandedChat ? Branding.Colors.black["4"] : Branding.Colors.white,
        borderBottom: ({expandedChat}) => expandedChat ? 'none' : `1px solid ${Branding.Colors.black["6"]}`,
    }
}));
