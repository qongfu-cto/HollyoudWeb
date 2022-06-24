import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';

export const useMainSearchStylesEN = makeStyles({
    textStyle: {
        color: Branding.Colors.primary.normal,
        font: 'normal normal bold 16px Roboto',
        letterSpacing: 0.15,
        // top: '9px',
        textTransform: 'none'
    },
    placeHolderStyle: {
        color: '#ABABAB',
        letterSpacing: 0.15,
        font: 'normal normal normal 16px Roboto',
        width: 250
    },

    dividerStyle: {},

    flagStyle: {
        position: 'relative',
        left: 40,
        width: 44,
        justifySelf: 'flex-end',
        border: '1px solid #707070',
        background: `${Branding.Colors.white} 0% 0% no-repeat padding-box`,
        opacity: 1,
        borderRadius: 43
    },
    buttonStyle: {}


})

export const useMobileMainSearchStylesEN = makeStyles({
    container: {
        display: 'flex',
        width: '100%'
    }

})
