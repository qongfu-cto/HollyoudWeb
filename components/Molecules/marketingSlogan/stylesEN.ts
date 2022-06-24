import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const sloganStylesEN = makeStyles({
    container: {
        width: "100%",
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        // background: Branding.Colors.offWhite,
        paddingBottom: 40,
        // borderTop: `1px solid ${Branding.Colors.black[6]}`,
        borderBottom: `1px solid ${Branding.Colors.black[6]}`,

    },
    spanStyle: {
        fontSize: 48,
        color: Branding.Colors.white,
        fontWeight: 400,
        letterSpacing: 0,
        fontFamily: 'Outfit',

    },
    imageContainer: {
        width: 496,
        height: 331
    },
    spanStyleOne: {
        fontSize: 59,
        fontFamily: 'Outfit',
        fontVariant: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: Branding.Colors.white,
    },
    spanStyleTwo: {
        fontSize: 59,
        fontFamily: 'Outfit',
        fontVariant: 'normal',
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: Branding.Colors.white,
    },
    mobileSlogan: {
        width: '100%',
        marginTop: 20,
        padding: '20px 30px',
    }

});
