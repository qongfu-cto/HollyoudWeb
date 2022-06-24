import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';


export const useOtpInputsStylesEN = makeStyles((props) => ({

    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center"

    }
    ,
    input: {


        textAlign: "center",
        margin: 5,
        borderRadius: 10,
        backgroundColor: Branding.Colors.offWhite,
        borderWidth: 0.1,
        borderColor: Branding.Colors.black[6],
        color: Branding.Colors.black[100]

    },

}));
