import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';

export const useTextButtonStylesEN = makeStyles({
    label: {
        color: Branding.Colors.primary['normal'],

        fontWeight: "bold",
        fontSize: 15
    },
    text: {
    

        "&.Mui-focusVisible": {
            backgroundColor: "transparent",

        },
     

    }
});
