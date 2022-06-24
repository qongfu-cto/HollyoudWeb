import {Theme, ThemeOptions} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';


export const useQTextStylesEN = makeStyles<Theme, { color: string | undefined }>((theme: ThemeOptions) => ({
    label: {
        color: ({color}) => color ?? Branding.Colors.primary.normal,

        //fontWeight:"bold",
        fontSize: 16
    },
    container: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center"
    },
    img: {
        margin: `0px 5px 0px 5px`,
    }
}));
