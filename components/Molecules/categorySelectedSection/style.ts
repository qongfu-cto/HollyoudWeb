import { Theme } from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const categorySelectedSectionStylesEN = makeStyles<Theme, { active: boolean }>(() => ({
    textStyle: {
        width: '100%',
        height: 19,
        color: '#3190AF',
        fontSize: 16,
        fontVariant: 'normal',
        fontFamily: 'Roboto',
        letterSpacing: 0.15,
        textTransform: 'none'
    },
    placeHolderStyle: {
        color: Branding.Colors.black['100'],
        letterSpacing: 0.15,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontVariant: 'normal',
        width: '100%'
    },

    flagStyle: {
        borderRadius: 18,
    },

    iconButtonStyle: {
        position: 'relative',
        right: 10
    },

    iconContainer: {
        position: 'absolute',
        left: 0,
        width: 40,
        height: 40
    },
    exploreButtonStyle: {
        padding: 0
    },
    inputWrapper: {display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', paddingLeft: 6},
    input: {
        display: "flex",
        width: '90%',
        paddingLeft: 15,
    },
    categoryInput: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        alignSelf: "flex-end",
        width: 32,
        height: 32,
        transform: ({active}) => active ? 'rotate(180deg)' : 'rotate(0deg)'
    },
    rightIcon: {
        width: 36,
        height: 36
    }
}));
