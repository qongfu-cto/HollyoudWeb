import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';

const QHeaderStyles = makeStyles({
    labelOne: {
        color: Branding.Colors.black['100'],
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 'normal',
        letterSpacing: '-1px',
        // top: '9px',
        textTransform: 'none'
    },
    labelTwo: {
        color: Branding.Colors.black['100'],
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 'normal',
        // top: '9px',
        textTransform: 'none'
    },
    appBarColor: {
        backgroundColor: Branding.Colors.white
    },
    userIcon: {
        borderRadius: 20
    },
    containerOne: {

        display: 'flex',
        flexDirection: 'row',
        // width: '28%'

    },
    containerTwo: {
        display: 'flex',
        flexDirection: 'row',
        // width: '30%'
    }

})

export default QHeaderStyles
