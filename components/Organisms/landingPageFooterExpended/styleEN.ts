import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const useLandingPageFooterExpendedStylesEN = makeStyles({
    container: {
        backgroundColor: Branding.Colors.black[100],
        height: 352,
        bottom: 0,
        paddingRight: 64,
        paddingLeft: 64,
        paddingTop: 32,
        paddingBottom: 32,
    },
    label: {
        fontFamily: 'Outfit',
        fontSize: 12,
        color: Branding.Colors.white + ' !important',
        opacity: 0.5
    },
    form:{
        width:"100%",
        color: Branding.Colors.white + ' !important',
    }
});
