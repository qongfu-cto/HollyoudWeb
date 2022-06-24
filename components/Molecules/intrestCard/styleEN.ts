import {makeStyles} from "@mui/styles";
import {Branding} from "../../../utilities/branding";

export const useInterestCardStylesEN = makeStyles((props) => ({
    container: {
        height: 210,
        backgroundColor: Branding.Colors.white,
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",


    },
    headerContainer: {
        padding: `15px 30px`,
        height: "70%",
    },
    tagContainer: {
        width: "100%",

    },

    button: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        border: ` solid ${Branding.Colors.black[6]}`,
        borderWidth: `2px 0  2px 0 `,
        padding: 5,
        boxShadow: `0 1px 1px 0 rgba(0, 0, 0, 0.2)`,
    },
}));
