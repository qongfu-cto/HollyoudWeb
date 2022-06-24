import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';
import {Theme} from "@mui/material";

export const useNestedToolTipStylesEN = makeStyles<Theme, { active: boolean }>(() => ({
    container: {
        display: "flex",
        position: 'absolute',
        flexDirection: "column",
        width: 'auto',
        alignItems: "flex-start",
        cursor: 'pointer',
        borderRadius: 4,
        marginLeft: 15,
        height: 'auto',
        padding: '20px 15px',
        top: 60,
        zIndex: 10,
        background: Branding.Colors.white,
        boxShadow: `8px 8px 16px ${Branding.Colors.black["16"]},
        -8px -8px 16px ${Branding.Colors.white}`

    },
    nestedMenuHeader: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '10px 15px',
        paddingRight: 45,
        width: '100%',
        borderRadius: 12,
        cursor: 'pointer'
    },
    subMenu: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '10px 15px',
        width: '100%',
        borderRadius: 12,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: Branding.Colors.black["16"]
        }
    },
    icon: {
        position: 'absolute',
        right: 10,
        width: 30,
        height: 30
    },
    nestedHeaderIcon: {
        position: 'absolute',
        right: 10,
        width: 30,
        height: 30
    },
    nestedMenuToolTip: {
        position: 'absolute',
        top: -60,
    }
}));
