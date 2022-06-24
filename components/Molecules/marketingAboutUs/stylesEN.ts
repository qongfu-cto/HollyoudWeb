import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const aboutUsStyling = makeStyles({
    container: {
        width: "60%",
        //height: 896,
        // display: 'flex',
        //  flexDirection: 'column',
        // flexWrap: 'wrap',
        margin: ' auto'
    },

    aboutUsContainer: {

        width: 491,
        height: 650,
        columnCount: 1
    },

    aboutUsHeaderStyle: {
        fontSize: 56,
        fontWeight: 500,
        fontFamily: 'Outfit',
        marginBottom: 20
    },

    aboutUSContentStyle: {
        lineHeight: 1.6,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'left',

    },

    // buttonStyles:{
    //   width: 337,
    //   height: 48,
    //   color: '#4F4F4F',
    //   fontFamily:'Outfit',
    //   fontSize: 16,
    //   fontVariant: 'normal',
    //   fontWeight: 'normal',
    //   letterSpacing: 0,
    //   fontStyle: 'normal',
    //   textTransform: "none",
    //   border : '1px solid #707070',
    //   boxShadow: '0px 3px 6px #00000029',
    //   borderRadius: 12,
    //   position: 'relative',
    //   left: 920,
    //   top: 65
    // },

    quoteStyling: {

        textAlign: 'center',
        fontSize: 24,
        width: 729,
        height: 60,
        fontFamily: 'Outfit',
        color: Branding.Colors.primary.normal,
        fontWeight: 500,
        margin: " 50px auto"

    },

    // copyrightStyle:{
    //   position: 'relative',
    //   left: 25,
    //   top: 99,
    //   width: 388,
    //   height: 14,
    //   textAlign:'left',
    //   fontFamily:'Roboto',
    //   fontSize: 12
    // }
})

