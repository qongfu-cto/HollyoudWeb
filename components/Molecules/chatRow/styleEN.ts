import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";
import {Theme, ThemeOptions} from "@mui/material";

export const useChatRowStylesEN = makeStyles<Theme, { selected: boolean, expandedChat: boolean }>((theme: ThemeOptions) => ({
    container: {
        display: 'flex',
        position: 'relative',
        padding: '10px 10px',
        alignItems: 'center',
        width: '100%',
        borderBottom: ({expandedChat}) => expandedChat ? 'none' : `1px solid ${Branding.Colors.black["6"]}`,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: ({selected}) => selected ? Branding.Colors.black["16"] : Branding.Colors.black["4"]
        }
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '70%',
        height: '100%',
        paddingLeft: 10
    },
    subTitle: {
        display: 'flex'
    },
    status: {
        position: 'absolute',
        width: 12,
        height: 12,
        borderRadius: 6,
        right: 20
    }
}));
