import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';

export const useSignupSubmitLoaderStylesEN = makeStyles({
    mainContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
    },
    mobileMainContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      alignItems:"center"
    },
    lottieContainer: {
        width: 256,
        height: 256,
        margin: '0px auto',

    },
    lottie: {
        width: '100%',
        height: 'auto',

    },
    header: {
        color: Branding.Colors.danger.normal,
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 500,
        margin: '16px auto 0px'
    },
    mobileHeader: {
        color: Branding.Colors.danger.normal,
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 500,
     
    },
    message: {
        color: Branding.Colors.black[86],
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
        margin: '10px auto 32px',
        width: '100%',
        textAlign: 'center',
    }
});
