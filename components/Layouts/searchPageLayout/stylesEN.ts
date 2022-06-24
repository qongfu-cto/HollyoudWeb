import { Theme } from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Branding} from "utilities/branding";

export const useDefaultLayoutStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        paddingTop:120


    },
    bodyWrapper: {
      
        flexDirection: "column",
        width: "100%",
        margin: "0 auto",
        rowGap: 48,
    },
    searchBarStyles: {
        position: "relative",
    },
    navbarIcons: {display: "flex", gap: 8},
    iconStyle: {
        border: () => `1px solid ${Branding.Colors.primary.normal} !important`,
    },
    resultsHeader: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    tabsSections: {display: "flex", columnGap: 36},
    tab: {
        "&.MuiTab-root": {
            fontSize: 18,
            lineHeight: "23px",
            letterSpacing: 0,
            fontFamily: "Outfit",
            textTransform: "none",
            color: "#45A0BC",
            "&.Mui-selected": {color: "#2D6278"},
        },
    },
    selectedTabIndicator: {
        backgroundColor: "#2D6278",
    },
    actions: {
        display: "flex",
        columnGap: 16,
    },
    actionButton: {
        "&.MuiButton-root": {
            borderRadius: 24,
            fontSize: 16,
            lineHeight: "20px",
            fontFamily: "Outfit",
            letterSpacing: 0,
            color: "#45A0BC",
            textTransform: "none",
            borderColor: "#45A0BC",
        },
        "&.MuiButton-root:hover": {
            borderColor: "inherit",
        },
    },
    navbar: {
        width: "100%",
        maxWidth: 1820,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        margin: `0 auto`,

    }
});
export const useDefaultMobileLayoutStyles = makeStyles<Theme, { width: number }>(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: '100%'
    },
    bodyWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "0 auto",
        maxWidth: ({width}) => width,
    },

    navbarIcons: {display: "flex", gap: 8},
    iconStyle: {
        border: () => `1px solid ${Branding.Colors.primary.normal} !important`,
    },
    resultsHeader: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    tabsSections: {display: "flex", columnGap: 36},
    tab: {
        "&.MuiTab-root": {
            fontSize: 18,
            lineHeight: "23px",
            letterSpacing: 0,
            fontFamily: "Outfit",
            textTransform: "none",
            color: "#45A0BC",
            "&.Mui-selected": {color: "#2D6278"},
        },
    },
    selectedTabIndicator: {
        backgroundColor: "#2D6278",
    },
    actions: {
        display: "flex",
        columnGap: 16,
    },
    actionButton: {
        "&.MuiButton-root": {
            borderRadius: 24,
            fontSize: 16,
            lineHeight: "20px",
            fontFamily: "Outfit",
            letterSpacing: 0,
            color: "#45A0BC",
            textTransform: "none",
            borderColor: "#45A0BC",
        },
        "&.MuiButton-root:hover": {
            borderColor: "inherit",
        },
    },
    navbar: {
        width: "100%",
        maxWidth: ({width}) => width,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: `0 auto`,
    }
}));

