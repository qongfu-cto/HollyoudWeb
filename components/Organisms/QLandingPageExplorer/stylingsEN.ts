import { Theme } from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

const useQExplorerStyle = makeStyles({
    Qlogin: {
        position: "relative",
        left: 20,
    },

    QOrganism: {
        margin: "0px auto",
        width: 400,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: '70vh'
    },

    logoStyles: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    searchBarStyles: {
        marginTop: 8,
        position: "relative",
        right: 0,
        bottom: 24,
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
    },

    categoriesButtonsStyles: {
        // position: "relative",
        width: '100%',
        minWidth: 600,
        display: "flex",
        justifyContent: "center",

        columnGap: 42,
        rowGap: 30,
        // bottom: 52,


    },

    headerText: {
        marginTop: -32,
        marginBottom: 64,
        fontSize: 28,
        fontWeight: 400,
        color: Branding.Colors.primary.dark
    }

});
export const useQMobileExplorerStyle = makeStyles<Theme, { width: number }>(() => ({
    Qlogin: {
        position: "relative",
        left: 20,
    },

    QOrganism: {
        margin: "0px auto",
        width: '100%',
        padding: '0px 20px',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center'
    },

    logoStyles: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 20,
        padding: '20px 20px 20px 20px'
    },

    notFoundWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 20px 0px 20px'
    },

    searchBarStyles: {
        display: 'flex',
        width: '99%',
        minWidth: ({width}) => 0.9 * width,
        position: "relative",
    },

    propertyButtonsStyles: {
        display: "flex",
        padding: '25px 5px 0px',
        alignItems: 'center',
        justifyContent: "center",
        flexWrap: 'wrap'
    },
    img: {
        width: 280,
        marginBottom: -28
    },
    confusedImg: {
        width: 'auto'
    },
    headerText: {
        marginTop: -24,
        marginBottom: 24,
        fontSize: 24,
        fontWeight: 400,
        color: Branding.Colors.primary.dark
    }
}));

export default useQExplorerStyle;
