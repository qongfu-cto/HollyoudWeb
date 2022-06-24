import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';
import {Theme} from "@mui/material";

export const useNavHeaderStylesEN = makeStyles<Theme, { active: boolean }>(() => ({
    container: {
        display: "flex",
        position: 'relative',
        width: 'auto',
        flexDirection: "row",
        alignItems: "center",
        cursor: 'pointer',
        height: 40,
        padding: '0px 20px'
    },
    icon: {
        width: 30,
        height: 30,
        transform: ({active}) => active ? 'rotate(180deg)' : 'rotate(0deg)'
    },
    crossIcon: {
        width: 32,
        height: 32,
    },
    border: {
        position: 'absolute',
        bottom: 0,
        height: 3,
        backgroundColor: ({active}) => active ? Branding.Colors.blue.variant_4 : Branding.Colors.primary.normal,
        borderRadius: 4,
        width: 'calc(100% - 45px)'
    }
}));
