import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';

export const useAuthenticatedLayoutStylesEN = makeStyles({
    sidebar: {
        float: "left",
        width: 240,
        height: 800,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: Branding.Colors.black[4],
        display: "inherit",
        alignItems: "center",
        flexDirection: "column"

    },
    iconContainer: {
        width: 88,
        height: 88,
        borderRadius: 12,
        backgroundColor: Branding.Colors.primary.light,
        margin: 10
    },
    img: {
        margin: 15
    },
    navigation: {
        width: '100%',
        height: 72,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Branding.Colors.white
    }
});
