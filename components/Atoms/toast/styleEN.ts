import {Theme} from '@mui/material';
import {makeStyles} from '@mui/styles';

export const useToastStylesEN = makeStyles<Theme, { errorColor: string }>({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: ({errorColor}) => errorColor,
        borderRadius: 12
    },
});
