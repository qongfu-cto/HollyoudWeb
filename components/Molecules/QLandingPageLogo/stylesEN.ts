import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';

export const QLandingPageLogoStyles = makeStyles({
    mainTitle: {
        ".MuiTypography-root": {
            fontSize: 28,
        },
        position: 'relative',
        bottom: 3,

        fontFamily: 'poppins',
        fontWeight: 700,
        fontVariant: 'normal',
        color: Branding.Colors.black['86'],
    },
    secondTitle: {
        position: 'relative',
        bottom: 58,
        left: 95,
        fontSize: 15.6,
        fontFamily: 'poppins',
        fontWeight: 500,
        fontVariant: 'normal',
        color: Branding.Colors.primary['dark'],
        letterSpacing: '0px',
        opacity: 1
    }
});
