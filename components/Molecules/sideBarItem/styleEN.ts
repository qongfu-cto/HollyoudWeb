import {makeStyles} from '@mui/styles';
import {Branding} from "../../../utilities/branding";
import {Theme} from "@mui/material";
import {mediaQueries} from "../../../utilities/designSystem";

export const useSideBarItemStylesEN = makeStyles<Theme, { open: boolean, active: boolean }>(() => ({
    sidebarItem: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        padding: ({open}) => open ? '8px 12px' : '8px 5px',
        margin: '2px 0px',
        borderRadius: 12,
        backgroundColor: ({active}) => active ? Branding.Colors.blue.variant_6 : 'unset',
        alignItems: 'center',
        justifyContent: 'center',
        height: ({open}) => open ? 78 : 48,
        boxShadow: ({active}) => active ? `0px 2px 4px ${Branding.Colors.blue.variant_2}` : 'none',
        minWidth: ({open}) => open ? 88 : 42,
        maxWidth: ({open}) => open ? 100 : 48,
        [mediaQueries.small]: {
            minWidth: 88,
            maxWidth: 100,
            height: 78,
            padding: '15px 12px'
        }
    },
    icon: {
        width: ({open}) => open ? 54 : 48,
        height: ({open}) => open ? 40 : 40,
        [mediaQueries.small]: {
            width: 54,
            height: 40
        }
    }
}));
