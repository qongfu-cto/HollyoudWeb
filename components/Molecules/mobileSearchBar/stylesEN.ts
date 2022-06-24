import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';
import {Theme} from '@mui/material';

export const useMobileSearchBarStylesEN = makeStyles<Theme,
    { active: boolean }>(() => ({
    placeHolderStyle: {
        color: Branding.Colors.black['100'],
        letterSpacing: 0.15,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontVariant: 'normal',
        width: '100%'
    },

    exploreButtonStyle: {
        padding: 0
    },
    inputWrapper: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 6,
        flexDirection: "row"

    },
    input: {
        display: 'flex',
        width: '100%',
        paddingLeft: 15

    },
  
}));
