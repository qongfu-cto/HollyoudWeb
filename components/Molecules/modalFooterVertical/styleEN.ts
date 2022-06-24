import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';


export const useModalFooterVerticalStylesEN = makeStyles((props) => ({

    container: {
        display: "flex",
        flexDirection: "column",

        alignItems: "center"
    },
    disable: {
        "&.Mui-disabled": {
            backgroundColor: Branding.Colors.black[6]
        }


    }
}));
