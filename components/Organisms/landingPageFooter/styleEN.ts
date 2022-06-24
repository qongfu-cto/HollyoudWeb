import {makeStyles} from '@mui/styles';
import {Branding} from '../../../utilities/branding';

export const useLandingPageFooterStylesEN = makeStyles({
    container: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 64,
        paddingLeft: 64,


        borderTop: `solid 2.5px ${Branding.Colors.black[4]}`
        // backgroundColor:"red"
    },

});
