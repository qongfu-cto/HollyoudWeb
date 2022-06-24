import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";
import {convertPixelsToRems} from "utilities/theme";

export const useProfileDetailsStartStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",

        //   gap: "0.75rem",
        width:"60%",
    },
    containerStart: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        //gap: "0.5rem",
    },
    profileDescription: {
        paddingTop: 8,
        display: "flex",
        flexDirection: "column",
        rowGap: convertPixelsToRems(10),
    },
    title: {
        "&.MuiTypography-root": {
            color: Branding.Colors.primary.dark,
            fontWeight: 500,
            fontSize: convertPixelsToRems(32),
            letterSpacing: 0,
            fontFamily: "Outfit",
        },
    },
    placeDescriptionContainer: {
        display: "flex",
        columnGap: convertPixelsToRems(12),
        alignItems: "center",
    },
    placeDescriptionStatus: {
        "&.MuiTypography-root": {
            color: Branding.Colors.success.normal,
            fontSize: convertPixelsToRems(20),
            lineHeight: convertPixelsToRems(25),
            fontFamily: "Outfit",
            fontWeight: 500,
        },
    },
    placeDescriptionTime: {
        "&.MuiTypography-root": {
            color: "#474747",
            fontSize: convertPixelsToRems(16),
            lineHeight: convertPixelsToRems(19),
            fontFamily: "Roboto",
            fontWeight: 400,
        },
    },
    propertyDescriptionContainer: {
        display: "flex",
        columnGap: convertPixelsToRems(16),
        alignItems: "center",
    },
    propertyType: {
        "&.MuiTypography-root": {
            fontWeight: 400,
            fontSize: convertPixelsToRems(22),
            lineHeight: convertPixelsToRems(27),
            fontFamily: "Roboto",
            letterSpacing: 0,
            color: "#5D5D5D",
        },
    },
    borderedBlock: {
        //margin: "0.5rem 0",
        padding: "1rem 0",
        

    },
    borderedBlockTitle: {
        "&.MuiTypography-root": {
            color: Branding.Colors.primary.dark,
            fontWeight: 500,
            fontSize: convertPixelsToRems(24),
            lineHeight: convertPixelsToRems(18),
            fontFamily: "Outfit",
            letterSpacing: 0,
        },
    },
    smallColorBox: {
        height: 15,
        width: 15,
        backgroundColor: "#FFD6D6",
    },
fav:{
    border: `1px solid ${Branding.Colors.black[16]} `,
        padding: 5,
        borderRadius: 18,
        margin: `0 10px `,
         width:50,
         height:50,
         display:"flex",
         alignItems:"center",
         justifyContent:"center"

},
scheduleModal:{
    width:500,
    height:384,
    backgroundColor:"white",
    zIndex:1,
    position: "absolute",
    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
    top:40,
    left:40,
    padding:15,
    borderRadius: 16,
    overflow:"hidden",
   overflowY: 'auto',
    scrollBehavior: 'smooth',

},
icon:{
    width:45,
    height:45
},
    placeType: {
        width: '100%',
        height: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: -8
    }

    
});

export const useMobileProfileDetailsStartStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        //   padding:20,
        //ap: "0.75rem",
        flex: 1,
    },
    containerStart: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `10px 20px 0 20px`
        // gap: "0.5rem",
    },
    profileDescription: {
        display: "flex",
        flexDirection: "column",
        rowGap: convertPixelsToRems(5),
        marginTop: 5,
        padding: `0 20px`
    },
    title: {
        "&.MuiTypography-root": {
            color: Branding.Colors.primary.dark,
            fontWeight: 500,
            fontSize: convertPixelsToRems(24),
            letterSpacing: 0,
            fontFamily: "Outfit",
        },
    },
    placeDescriptionContainer: {
        display: "flex",
        columnGap: convertPixelsToRems(12),
        alignItems: "center",
    },
    placeDescriptionStatus: {
        "&.MuiTypography-root": {
            color: Branding.Colors.success.normal,
            fontSize: convertPixelsToRems(20),
            lineHeight: convertPixelsToRems(25),
            fontFamily: "Outfit",
            fontWeight: 500,
        },
    },
    placeDescriptionTime: {
        "&.MuiTypography-root": {
            color: "#474747",
            fontSize: convertPixelsToRems(16),
            lineHeight: convertPixelsToRems(19),
            fontFamily: "Roboto",
            fontWeight: 400,
        },
    },
    propertyDescriptionContainer: {
        display: "flex",
        columnGap: convertPixelsToRems(16),
        alignItems: "center",
    },
    propertyType: {
        "&.MuiTypography-root": {
            fontWeight: 400,
            fontSize: convertPixelsToRems(22),
            lineHeight: convertPixelsToRems(27),
            fontFamily: "Roboto",
            letterSpacing: 0,
            color: "#5D5D5D",
        },
    },
    borderedBlock: {

        //margin: "0.5rem 0",
        padding: "1.5rem 0",

    },
    borderedBlockTitle: {
        "&.MuiTypography-root": {
            color: Branding.Colors.primary.dark,
            fontWeight: 500,
            fontSize: convertPixelsToRems(24),
            lineHeight: convertPixelsToRems(18),
            fontFamily: "Outfit",
            letterSpacing: 0,
        },
    },
    smallColorBox: {
        height: 15,
        width: 15,
        backgroundColor: "#FFD6D6",
    },
    contentFooter: {
         padding: `10px 15px`,
         position: 'fixed',
        borderBottom:`1px solid ${Branding.Colors.black[16]}`,
         top:0,
         backgroundColor:"white",
         display: 'flex',
         zIndex:2,
         flexDirection:"column",
         //justifyContent:"space-between",
         width: '100%'
     },
     divider:{
        color:Branding.Colors.black[16],
        margin:` 0px 5px 3px 10px`
    },
    start:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginTop:4
       
    }
});
