import {makeStyles} from "@mui/styles";
import {mediaQueries} from "../../../utilities/designSystem";
import {Branding} from "../../../utilities/branding";
import {Theme, ThemeOptions} from "@mui/material";

export const useChatPopUpStylesEN = makeStyles<Theme, { expandedChat: boolean }>((theme: ThemeOptions) => ({
    popUpContainer: {
        position: 'fixed',
        flexDirection: "column",
        right: 0,
        top: 0,
        height: '100%',
        width: ({expandedChat}) => expandedChat ? 1000 : 400,
        alignItems: "center",
        boxShadow: `-3px 0px 6px ${Branding.Colors.primary.dark}`,
        backgroundColor: 'white',
        transition: 'width 300ms ease-in-out',
        [mediaQueries.small]: {
            width: '100% !important'
        }
    },
    leftSection: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 400,
        borderRight: `1px solid ${Branding.Colors.primary.normal}`,
        width: '40%'
    },
    rightSection: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%'
    }
}));
