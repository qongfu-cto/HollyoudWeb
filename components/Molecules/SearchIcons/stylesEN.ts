import {makeStyles} from '@mui/styles';
import {Branding} from 'utilities/branding';


export const useSearchIconsStylesEN = makeStyles({
    btn: {
        "&.MuiIconButton-root": {
            border: `1px solid ${Branding.Colors.primary.normal}`,
            margin: 5,
            width: 48,
            height: 48
        }

    },
    btnClicked: {
        "&.MuiIconButton-root": {
            backgroundColor: Branding.Colors.primary.normal,
            margin: 5,
            width: 48,
            height: 48
        }
    },
    notice: {
        border: `1px solid ${Branding.Colors.primary.normal}`,
        borderRadius: 50,
        width: 15,
        height: 15,
        backgroundColor: Branding.Colors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 35,
        left: 35
    },
    notitext: {
        fontSize: 8,

    }


})
