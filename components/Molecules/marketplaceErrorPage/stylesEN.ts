import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";


export const useMarketPlaceErrorPageStylesEN = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        maxWidth:"1000px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",


    },
    text: {
        fontSize: 16,
        color: Branding.Colors.black[60]
    },
    helpdesk: {
        fontSize: 16,
        color: "#0093DD",
        fontWeight: "bold"
    },
    categories:{
       width:"500px",
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       marginTop:30
    }

});


export const useMarketPlaceMobileErrorPageStylesEN = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20

    },
    text: {
        fontSize: 16,
        color: Branding.Colors.black[60],
        textAlign: "center"
    },
    helpdesk: {
        fontSize: 16,
        color: "#0093DD",
        fontWeight: "bold"
    },
    categoriesContainer: {
        display: "flex",
        padding: '25px 5px 0px',
        alignItems: 'center',
        justifyContent: "center",
        flexWrap: 'wrap'
    }

});
